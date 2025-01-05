import { createClient } from 'jsr:@supabase/supabase-js@2';
import Stripe from 'npm:stripe@^17.5.0';
// import { stripe } from './stripe-checkout';

export const stripe = Stripe(Deno.env.get('EXPO_PUBLIC_STRIPE_SECRET_KEY'), {
  // This is needed to use the Fetch API rather than relying on the Node http
  // package.
  httpClient: Stripe.createFetchHttpClient(),
});

export const getOrCreateStripeCustonerForSupabaseUser = async (
  req: Request
) => {
  const authHeader = req.headers.get('Authorization')!;
  const supabaseClient = createClient(
    Deno.env.get('EXPO_PUBLIC_SUPABASE_URL') ?? '',
    Deno.env.get('EXPO_PUBLIC_SUPABASE_ANON_KEY') ?? '',
    { global: { headers: { Authorization: authHeader } } }
  );

  const {
    data: { user },
  } = await supabaseClient.auth.getUser();

  if (!user) {
    throw new Error('User not found');
  }

  const { data, error } = await supabaseClient
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) throw new Error(`Error fetching user: ${error.message}`);

  if (data.stripe_customer_id) {
    return data.stripe_customer_id;
  }

  const customer = await stripe.customers.create({
    email: user.email,
    metadata: {
      supabase_user_id: user.id,
    },
  });

  console.log("Created stripe customer: ",customer)
  
  await supabaseClient
  .from('users')
  .update({ stripe_customer_id: customer.id })
  .eq('id', user.id);
  
  return customer.id;
};