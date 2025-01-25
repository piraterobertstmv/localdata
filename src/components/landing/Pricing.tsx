import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: 0,
    features: ["10 searches per month", "Basic business data", "CSV downloads", "Email support"],
  },
  {
    name: "Pro",
    price: 29,
    features: [
      "100 searches per month",
      "Advanced business data",
      "Priority support",
      "Custom exports",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: 99,
    features: [
      "Unlimited searches",
      "Full business data",
      "24/7 phone support",
      "Custom integration",
      "Dedicated account manager",
    ],
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold">${tier.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <Button className="mt-8 w-full">Get Started</Button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500" />
                      <span className="ml-3 text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;