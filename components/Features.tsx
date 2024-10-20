import React from "react";
import FeatureCard from "./FeatureCard";
import { FaNewspaper, FaDatabase, FaShieldAlt, FaMousePointer, FaFreeCodeCamp, FaGift } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";
import { RiAiGenerate } from "react-icons/ri";
const Features = () => {
  const features = [
    {
      icon: FaMousePointer,
      title: "One click autofill",
      description: "Autofill your job applications with a single click and save time.",
    },
    {
      icon: RiAiGenerate,
      title: "Auto detect fields",
      description: "Jobfillr will auto detect if you are filling a job application and asks you to fill them",
    },
    {
      icon: FaDatabase,
      title: "Save once, use forever",
      description: "Save your Information once and use it everywhere.",
    },
    {
      icon: FaShieldAlt,
      title: "Privacy first",
      description: "All information is stored locally in your browser and never sent to any servers.",
    },
    {
      icon: FaGift,
      title: "Its Free",
      description: "Jobfillr is free to use, its designed by a developer for developers.",
    },
    {
      icon: FaNewspaper,
      title: "Access to new features",
      description: "Jobfillr gets regularly updated with newer features being added",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Autofill with ease
          </h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Jobfillr comes packed with awesome features to make it a breeze when filling your job applications.
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
