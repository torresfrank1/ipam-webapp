import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './db.js';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Login
export async function login(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
}

// Logout
export async function logout() {
    await supabase.auth.signOut();
}

// Get current session
export async function getSession() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
}
