import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Business {
  name: string;
  address: string;
  phone: string;
  website: string;
  international_phone: string;
}

export default function BusinessSearch() {
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      // Record the search in history
      if (session) {
        await supabase
          .from('search_history')
          .insert([{ location: `${businessType} in ${location}`, user_id: session.user.id }]);
      }

      const response = await fetch(
        'https://frgngppxkompopeumbps.functions.supabase.co/search-businesses',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            query: businessType,
            location: location,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      
      // Generate CSV
      const csvContent = [
        ['Name', 'Address', 'Phone', 'Website'].join(','),
        ...data.map((business: Business) => 
          [
            `"${business.name}"`,
            `"${business.address}"`,
            `"${business.phone}"`,
            `"${business.website}"`,
          ].join(',')
        ),
      ].join('\n');

      // Create and download CSV file
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `business_search_${new Date().toISOString()}.csv`;
      link.click();

      toast({
        title: "Success",
        description: "Your search results have been downloaded",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to search businesses. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium mb-2">
            Business Type
          </label>
          <Input
            id="businessType"
            placeholder="e.g., restaurants, hotels, dentists"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            Location
          </label>
          <Input
            id="location"
            placeholder="City, Country or Full Address"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Searching..." : "Search & Download CSV"}
        </Button>
      </form>
    </div>
  );
}