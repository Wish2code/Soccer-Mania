import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jnaxmzjqrattkclqjlcq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuYXhtempxcmF0dGtjbHFqbGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NDQ4MjcsImV4cCI6MjA2OTQyMDgyN30.EBHfNzhI7RLqhVOQobcDyzbe3MExPHKVXZWYsdJcdi0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
