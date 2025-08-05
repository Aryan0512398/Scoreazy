import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-28 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Confidence Building for Grades 3–5
      </h1>
      <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto">
        Boost your child’s confidence and academic skills with Scoreazy’s
        personalized microcourse.
      </p>
      <Button className="mt-6 bg-white text-purple-700 hover:bg-gray-100">
        Enroll Now
      </Button>
    </section>
  );
}
