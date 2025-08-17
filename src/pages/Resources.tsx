import React from "react";
import PageLayout from "../components/PageLayout";
import { BookOpen, User, ShieldCheck, Star, Award, Calendar, Lock } from "lucide-react";

type Resource = {
  title: string;
  url: string;
  icon: React.ReactElement;
  priority?: boolean;
};


const resources: Resource[] = [
  { title: "Boy Scouts of America", url: "https://www.scouting.org/", icon: <Star size={20} />, priority: true },
  { title: "Cub Scouts Program", url: "https://www.scouting.org/programs/cub-scouts/", icon: <BookOpen size={20} /> },
  { title: "Adult Leader Training", url: "https://www.scouting.org/training/adult-leaders/", icon: <User size={20} /> },
  { title: "Guide to Safe Scouting", url: "https://www.scouting.org/health-and-safety/gss/", icon: <ShieldCheck size={20} /> },
  { title: "Cub Scouts Resources", url: "https://www.scouting.org/programs/cub-scouts/resources/", icon: <BookOpen size={20} /> },
  { title: "Youth Protection Training", url: "https://www.scouting.org/training/youth-protection/", icon: <Lock size={20} /> },
  { title: "Awards and Recognitions", url: "https://www.scouting.org/awards/awards-central/", icon: <Award size={20} /> },
  { title: "Scoutbook", url: "https://www.scouting.org/resources/scoutbook/", icon: <Calendar size={20} /> },
];

function ResourceCard({ title, url, icon, priority }: Resource) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-3 p-4 rounded-lg shadow-md transition-transform transform
        hover:scale-105 hover:shadow-lg
        ${priority ? "bg-yellow-100 text-yellow-900" : "bg-white text-blue-800"}
      `}
    >
      {icon}
      <span className="font-semibold">{title}</span>
    </a>
  );
}

export default function Resources() {
  return (
    <PageLayout>
      <h2 className="text-3xl font-bold mb-6">Resources</h2>
      <p className="mb-6">
        Explore these helpful resources to guide you and your scout.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((res) => (
          <ResourceCard key={res.url} {...res} />
        ))}
      </div>
    </PageLayout>
  );
}
