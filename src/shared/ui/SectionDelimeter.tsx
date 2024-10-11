import React from 'react';

interface SectionDelimeterProps {
  caption: string;
}

const SectionDelimeter: React.FC<SectionDelimeterProps> = ({ caption }) => {
  return (
    <section className="flex items-center relative text-center uppercase mt-24 mb-24 w-full text-nowrap">
      <div className="w-full flex-grow border-t-2 border-dotted border-black dark:border-white"></div>
      <span className="text-black dark:text-white mx-2">{caption}</span>
      <div className="flex-grow w-full border-t-2 border-dotted border-black dark:border-white"></div>
    </section>
  );
};

export default SectionDelimeter;
