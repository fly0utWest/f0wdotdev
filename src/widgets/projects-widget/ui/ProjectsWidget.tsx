import React from 'react';

const ProjectsWidget = () => {
  return (
    <>
      <div className="w-full mb-5" id="#tech-stack"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl">
            <span className="text-violet-400">cat</span> ~/projects.md
          </h2>
          <p className='text-gray-400 font-light text-sm'>## projects I&apos;ve beenn working on</p>
        </div>
      </section>
      <hr className="border-gray-600 w-full" />
    </>
  );
};

export default ProjectsWidget;
