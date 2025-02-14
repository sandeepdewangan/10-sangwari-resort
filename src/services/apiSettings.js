import supabase from "./supabase";

export async function getSettings() {
  let { data, error } = await supabase.from("settings").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
}

export async function save(settings) {
  const { data, error } = await supabase
    .from("settings")
    .update(settings)
    .eq("id", 1)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
