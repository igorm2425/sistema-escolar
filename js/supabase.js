// Cole aqui os dados do seu projeto Supabase.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://rcnliujujlxjxqalmtna.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_iM4a1OT4IjfpfoVmvGypfg_V_l7iGXq";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
