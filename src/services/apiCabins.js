import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log("Cabin cannot be loaded..." + error);
  }

  return data;
}

export async function deleteCabin(id) {
  console.log("----", id);

  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log("Cabin cannot be deleted..." + error);
  }

  return data;
}
