import { createServerClient } from '@supabase/ssr'
import {Database} from "@/lib/types";

export async function createServerAdminClient() {

    const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.PRIVATE_SUPABASE_SERVICE_KEY;

    // console.info({'api_url': apiUrl, 'service_key': serviceKey});

    return createServerClient<Database>(
        apiUrl!,
        serviceKey!,
        {
            cookies: {
                getAll: () => [],
                setAll: () => {},
            },
            auth: {
                persistSession: false,
                autoRefreshToken: false,
            },
            db: {
                schema: 'public'
            },
        }
    )
}