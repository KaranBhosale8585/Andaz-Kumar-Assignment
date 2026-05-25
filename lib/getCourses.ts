import { supabase } from "./supabase/client";

export async function getCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch courses");
  }

  console.log(data)

  return data;
}
