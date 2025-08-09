import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tdnomrgyheypscctnijn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbm9tcmd5aGV5cHNjY3RuaWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NDQxMjksImV4cCI6MjA3MDMyMDEyOX0.Q-I7mTRYSQrhMYKjio4rSxTPsAc-Q0gEKTNuXRqgGI8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
