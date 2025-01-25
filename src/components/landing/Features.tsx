import { MapPin, FileSpreadsheet, Filter } from "lucide-react";

const features = [
  {
    name: "Location Search",
    description: "Input any location and get instant access to local business data.",
    icon: MapPin,
  },
  {
    name: "Smart Filtering",
    description: "Filter businesses by type, rating, and more to find exactly what you need.",
    icon: Filter,
  },
  {
    name: "CSV Export",
    description: "Download comprehensive business data in CSV format for easy analysis.",
    icon: FileSpreadsheet,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to gather local business data
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform simplifies the process of collecting and organizing business information from any location.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;