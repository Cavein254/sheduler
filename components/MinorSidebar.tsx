"use client";
import {} from "react-icons/md";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import React, { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div
          className="flex items-center text-lg font-bold"
          onClick={toggleAccordion}
        >
          <span>{isOpen ? <GoChevronDown /> : <GoChevronRight />}</span>
          <FaBookReader className="ml-2" />
          <h2 className="ml-2">{title}</h2>
        </div>
        <div className="flex items-center">
          <FaEllipsis /> <FaPlus className="ml-2" />
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {content.map((item, idx) => {
            return (
              <div key={idx} className="ml-4">
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const MinorSidebar = () => {
  const accordionItems = [
    { title: "Section 1", content: ["Content for Section 1"] },
    {
      title: "Section 2",
      content: [
        "Content for Section 1",
        "Content for Section 1",
        "Content for Section 1",
      ],
    },
  ];

  return (
    <div className="w-1/6 border-2 border-red-300">
      <Accordion items={accordionItems} />;
    </div>
  );
};

export default MinorSidebar;
