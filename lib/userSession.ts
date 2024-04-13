"use server";
import { createSupbaseServerClientReadOnly } from "./supabase";

export async function readUserSession() {
    const supabase = await createSupbaseServerClientReadOnly();

    // Use supabase.auth.getUser() instead of supabase.auth.getSession()
    return supabase.auth.getSession();
}
