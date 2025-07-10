import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zronewujlepzmanxmtug.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpyb25ld3VqbGVwem1hbnhtdHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxODQ4OTYsImV4cCI6MjA2Mzc2MDg5Nn0.qUYyPBh4NLOUFu1OWf7ahIXTtUtollUIoN2C8smQVrc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 