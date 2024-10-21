"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4">
      <div
        className={`w-full rounded-lg overflow-hidden ${
          isOpen ? "bg-black dark:bg-gray-900" : "bg-black dark:bg-gray-900"
        }`}
      >
        <button className="w-full text-left p-4 flex justify-between items-center" onClick={toggleOpen}>
          <span className="text-xl font-semibold text-white dark:text-white">{title}</span>
          <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <FaChevronDown className="text-2xl text-white" />
          </span>
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="p-4">
            <p className="text-white font-light">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultAccordionItems = [
  {
    title: "Advanced form detection",
    content:
      "Using state of the art techniques to auto identify if you are filling a form. No need to manually select the form fields.",
  },
  {
    title: "Free to use",
    content: "The best quality at no cost. No subscription, no credit card required.",
  },
  {
    title: "More fields for those special forms",
    content:
      "For those pesky forms that have a lot of fields, you can provide more data to the extension to fill in more fields.",
  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items = defaultAccordionItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
