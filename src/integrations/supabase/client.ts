// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://frgngppxkompopeumbps.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyZ25ncHB4a29tcG9wZXVtYnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4MTcwOTgsImV4cCI6MjA1MzM5MzA5OH0.bTJiVJPY66q23ic-Vfun7vW_RmUByh65cVsHo-maQTY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);