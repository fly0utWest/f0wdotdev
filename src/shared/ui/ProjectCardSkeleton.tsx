import React from 'react';

const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="p-4 min-h-24 w-full animate-pulse duration-150 border-2 border-black dark:border-white">
      <div className="flex flex-col gap-6 w-full h-full">
        <div className="flex flex-col gap-2">
          <div className="w-[50%] h-7 bg-black dark:invert"></div>
          <div className="w-[100%] h-4 bg-black dark:invert"></div>
          <div className="w-[100%] h-4 bg-black dark:invert"></div>
          <div className="w-[100%] h-4 bg-black dark:invert"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
