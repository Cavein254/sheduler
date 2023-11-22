"use client";
import {} from "react-icons/md";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? <GoChevronDown /> : <GoChevronRight />}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const MinorSidebar = () => {
  const accordionItems = [
    { title: "Section 1", content: "Content for Section 1" },
    { title: "Section 2", content: "Content for Section 2" },
  ];

  return <Accordion items={accordionItems} />;
};

export default MinorSidebar;
