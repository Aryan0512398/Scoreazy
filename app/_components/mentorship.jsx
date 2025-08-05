import { Card, CardContent } from "@/components/ui/card";
import { User, Video, MessageSquare } from "lucide-react";

const mentorships = [
  {
    title: "1-on-1 Mentorship",
    description: "Personal guidance for your child to build confidence and skills.",
    icon: User,
  },
  {
    title: "Live Interactive Sessions",
    description: "Participate in live sessions with our expert mentors.",
    icon: Video,
  },
  {
    title: "Continuous Feedback",
    description: "Get regular updates and tips to help your child grow.",
    icon: MessageSquare,
  },
];

export default function Mentorship() {
  return (
    <section
      id="mentorship"
      className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-white"
    >
      <h2 className="text-4xl font-extrabold mb-12">
        Our Mentorship Program
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {mentorships.map((mentor, i) => (
          <Card
            key={i}
            className="bg-white/90 backdrop-blur shadow-lg hover:shadow-2xl transition border border-purple-200 rounded-xl"
          >
            <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
              <mentor.icon size={40} className="text-purple-700" />
              <h3 className="text-xl font-semibold text-purple-700">
                {mentor.title}
              </h3>
              <p className="text-gray-700 text-sm">{mentor.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
