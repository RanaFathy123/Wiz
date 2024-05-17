import  { useState } from 'react';
import './AccordionItem.css'; // Assuming you have some CSS for styling

// eslint-disable-next-line react/prop-types
export const AccordionItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-item-header" onClick={toggleAccordion}>
        <span className="accordion-item-header-title">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-down accordion-item-header-icon"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {isOpen && (
        <div className="accordion-item-description-wrapper">
          <div className="accordion-item-description">
            <hr />
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
