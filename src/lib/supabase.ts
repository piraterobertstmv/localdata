import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://frgngppxkompopeumbps.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyZ25ncHB4a29tcG9wZXVtYnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MTcwOTgsImV4cCI6MjA1MzM5MzA5OH0.bTJiVJPY66q23ic-Vfun7vW_RmUByh65cVsHo-maQTY';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);