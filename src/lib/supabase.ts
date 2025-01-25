import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://frgngppxkompopeumbps.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyZ25ncHB4a29tcG9wZXVtYnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NjE1NjgsImV4cCI6MjAyNTIzNzU2OH0.Hs_Qw6Qc_5Iy_Hs_Qw6Qc_5Iy';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);