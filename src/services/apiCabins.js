import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function insert(cabin, id) {
  const hasImage = cabin.image.name.startsWith(supabase);

  console.log("has image", hasImage);
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "");

  const imagePath = hasImage
    ? cabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;

  let query = supabase.from("cabins");

  // Create
  if (!id) query = query.insert([{ ...cabin, image: imagePath }]);

  //  Edit
  if (id) query = query.update({ ...cabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error(error.message);
  }

  // Image upload
  const { error: storageError } = await supabase.storage
    .from("cabins")
    .upload(imageName, cabin.image);
  if (storageError) {
    // Delete cabin
    const { data } = await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabin image cannot be uploaded!");
  }

  return data;
}
