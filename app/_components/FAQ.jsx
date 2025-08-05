import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long is the course?",
    a: "It is a 2-week microcourse with 15-minute daily lessons.",
  },
  {
    q: "Is it suitable for shy kids?",
    a: "Absolutely! It’s designed to build confidence step by step.",
  },
  {
    q: "Can parents track progress?",
    a: "Yes, we provide weekly progress reports to parents.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "They are pre-recorded but interactive with quizzes and exercises.",
  },
  {
    q: "Can we access the course on mobile?",
    a: "Yes, the course is fully mobile-friendly.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 px-6 bg-gradient-to-r from-purple-50 via-purple-100 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-purple-700">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white shadow-md rounded-xl px-4 border border-purple-100 hover:border-purple-300 transition"
            >
              <AccordionTrigger className="text-lg font-semibold text-purple-700 hover:text-purple-900 transition">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
