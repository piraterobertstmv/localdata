import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of business data can I access?",
    answer: "You can access comprehensive business information including names, addresses, phone numbers, websites, ratings, and review counts for businesses in your specified location.",
  },
  {
    question: "How accurate is the business information?",
    answer: "Our data is sourced directly from Google Maps API, ensuring high accuracy and regular updates. However, we recommend verifying critical information directly with businesses.",
  },
  {
    question: "Can I export data in other formats besides CSV?",
    answer: "Currently, we support CSV exports as it's the most widely used format for business data analysis. We're working on adding more export options in the future.",
  },
  {
    question: "Is there a limit to how many searches I can perform?",
    answer: "Yes, limits vary by plan. Free users get 10 searches per month, Pro users get 100 searches, and Enterprise users get unlimited searches.",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;