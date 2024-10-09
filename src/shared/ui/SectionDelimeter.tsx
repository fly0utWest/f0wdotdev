import React from 'react'

interface SectionDelimeterProps {
    caption: string
}

const SectionDelimeter: React.FC<SectionDelimeterProps> = ({caption}) => {
  return (
    <section className='flex items-center relative text-center uppercase mt-24 mb-24'>
    <div className='flex-grow border-t border-dotted border-black dark:border-white'></div>
      <span className='text-black dark:text-white'>{caption}</span>
      <div className='flex-grow border-t border-dotted border-black dark:border-white'></div>
    </section>
  )
}

export default SectionDelimeter