import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "Interactive video lessons tailored for kids",
  "Confidence-building exercises & quizzes",
  "Parent-friendly progress tracking",
];

export default function Benefits() {
  return (
    <section id="courses" className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose This Course?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="shadow hover:shadow-lg transition">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
