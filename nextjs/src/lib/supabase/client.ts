import { createBrowserClient } from '@supabase/ssr'
import { ClientType, SassClient } from "@/lib/supabase/unified";
import { Database } from "@/lib/types";

export function createSPAClient() {

    const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    console.info({ 'api_url': apiUrl, 'api_key': apiKey });

    return createBrowserClient<Database>(apiUrl, apiKey)
}

export async function createSPASassClient() {
    const client = createSPAClient();
    return new SassClient(client, ClientType.SPA);
}