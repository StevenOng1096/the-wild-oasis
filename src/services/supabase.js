import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ajmqbvdbqijzysxxsjvu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqbXFidmRicWlqenlzeHhzanZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4OTc1NDgsImV4cCI6MjA0NDQ3MzU0OH0.Zr2WonoI-fhRfW8r1UP6jZMZktIu815vxj69oeDuvfo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
