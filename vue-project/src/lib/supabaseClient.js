import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://mcxgpcyvptcdbnknusli.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jeGdwY3l2cHRjZGJua251c2xpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMTY2MzMsImV4cCI6MjA1Mzc5MjYzM30.rui4JE3r_ZetcAwFXVrsChJTEfao4J9tWSqgBvYYVao')