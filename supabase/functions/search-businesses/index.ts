import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { query, location } = await req.json()
    console.log(`Searching for ${query} in ${location}`)

    const GOOGLE_API_KEY = Deno.env.get('GOOGLE_PLACES_API_KEY')
    if (!GOOGLE_API_KEY) {
      throw new Error('Google Places API key not configured')
    }

    // First, get place ID using Places API Text Search
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
      query + ' in ' + location
    )}&key=${GOOGLE_API_KEY}`

    const searchResponse = await fetch(searchUrl)
    const searchData = await searchResponse.json()

    if (!searchData.results || searchData.results.length === 0) {
      return new Response(
        JSON.stringify([]),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Get details for each place
    const detailedResults = await Promise.all(
      searchData.results.slice(0, 5).map(async (place: any) => {
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,formatted_address,formatted_phone_number,website,international_phone_number&key=${GOOGLE_API_KEY}`
        const detailsResponse = await fetch(detailsUrl)
        const detailsData = await detailsResponse.json()
        
        return {
          name: detailsData.result.name || '',
          address: detailsData.result.formatted_address || '',
          phone: detailsData.result.formatted_phone_number || '',
          website: detailsData.result.website || '',
          international_phone: detailsData.result.international_phone_number || ''
        }
      })
    )

    return new Response(
      JSON.stringify(detailedResults),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})