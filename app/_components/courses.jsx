import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Star, PlayCircle } from "lucide-react";

const courses = [
  {
    title: "Confidence Booster",
    description: "Build public speaking skills and self-expression in a fun way.",
    icon: Star,
  },
  {
    title: "Interactive Learning",
    description: "Engaging lessons with videos and quizzes to keep kids motivated.",
    icon: PlayCircle,
  },
  {
    title: "Academic Skills",
    description: "Boost reading, writing, and comprehension for Grade 3–5 students.",
    icon: BookOpen,
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 text-center"
    >
      <h2 className="text-4xl font-extrabold text-purple-700 mb-12">
        Our Microcourses
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {courses.map((course, i) => (
          <Card
            key={i}
            className="shadow-lg hover:shadow-xl transition bg-white border border-purple-100 rounded-xl"
          >
            <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
              <course.icon size={40} className="text-purple-600" />
              <h3 className="text-xl font-semibold text-purple-700">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
