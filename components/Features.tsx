import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";

const Features = () => {
  const features = [
    {
      icon: SiNextdotjs,
      title: "Next.js 14",
      description: "App dir, Routing, Layouts, Loading UI and API routes.",
    },
    {
      icon: FaReact,
      title: "React 18",
      description: "Server and Client Components. Use hook.",
    },
    {
      icon: FaDatabase,
      title: "Database",
      description: "Postgres basic support added. Use node pg.",
    },
    {
      icon: SiTailwindcss,
      title: "Components",
      description: "UI components built using Radix UI and styled with Tailwind CSS.",
    },
    {
      icon: FaShieldAlt,
      title: "Authentication",
      description: "Authentication using NextAuth.js and middlewares.",
    },
    {
      icon: SiStripe,
      title: "Subscriptions",
      description: "Free and paid subscriptions using Stripe. (To be added.)",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 bg-gray-50 dark:bg-black transition-colors duration-200 dark:border dark:border-gray-800 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Features</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            This project is an experiment to see how a modern app, with features like auth, subscriptions, API routes,
            and static pages would work in Next.js 14 app dir.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
