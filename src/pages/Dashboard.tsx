import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [subscription, setSubscription] = useState<any>(null);
  const [searchCount, setSearchCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/');
        return;
      }
    };
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return;

        const { data: subscriptionData, error: subscriptionError } = await supabase
          .from('user_subscriptions')
          .select('*')
          .eq('user_id', session.user.id)
          .maybeSingle();

        if (subscriptionError) throw subscriptionError;

        const { data: searchCountData, error: searchCountError } = await supabase
          .rpc('get_monthly_search_count', { user_id: session.user.id });

        if (searchCountError) throw searchCountError;

        setSubscription(subscriptionData || { plan: 'starter' }); // Default to starter if no subscription found
        setSearchCount(searchCountData || 0);
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  const getMaxSearches = (plan: string) => {
    switch (plan) {
      case 'starter':
        return 10;
      case 'pro':
        return 50;
      case 'enterprise':
        return 100;
      default:
        return 0;
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const maxSearches = getMaxSearches(subscription?.plan);
  const searchProgress = (searchCount / maxSearches) * 100;

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Plan: {subscription?.plan?.toUpperCase() || 'STARTER'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Monthly Searches: {searchCount} / {maxSearches}
                </p>
                <Progress value={searchProgress} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;