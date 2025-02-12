import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://usykgjnzszsrnhfcxpta.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzeWtnam56c3pzcm5oZmN4cHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzMjA5MzUsImV4cCI6MjA1NDg5NjkzNX0.QT5GYwYbzEyqVVU-BAc13Bx8fufpFDfXYVeq5Y-6S9M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
