import supabase from "./supabase";

export async function getBookings() {
  let { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName, email)");

  console.log(data);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
