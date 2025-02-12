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

export async function insert(cabin) {
  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin, image: imagePath }])
    .select();

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
