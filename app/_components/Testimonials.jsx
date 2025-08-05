import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Amit Sharma",
    text: "My son gained so much confidence! He now answers in class without hesitation.",
  },
  {
    name: "Neha Patel",
    text: "The lessons are short, engaging, and super effective for kids!",
  },
  {
    name: "Rahul Verma",
    text: "Scoreazy's microcourse is the best investment for my child's confidence.",
  },
  {
    name: "Priya Mehta",
    text: "Interactive lessons and quizzes keep my daughter motivated every day!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        What Parents Say
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className="bg-white/90 backdrop-blur shadow-xl border border-purple-200 rounded-xl hover:shadow-2xl transition"
          >
            <CardContent className="p-6 text-center">
              <p className="italic mb-4 text-gray-800">"{t.text}"</p>
              <span className="font-semibold text-purple-700">{t.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
