const SUPABASE_URL = "https://ksapnytsttbzgcxmjmwg.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_E4Gulqno88NOHDCba6pBJw_DlRabfTR";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    }
);
