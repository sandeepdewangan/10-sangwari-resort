import supabase from "./supabase";

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
  console.log(cabin);

  const { data, error } = await supabase
    .from("cabins")
    .insert([cabin])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
