import ToolsWidget from '@/widgets/tools-widget/ui/ToolsWidget';
import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <pre className="text-lg text-center whitespace-pre-wrap">{`
               ┓       ┓ 
┏┏┓╋┓┏┏┓  ┏┓┏┓┏┫  ╋┏┓┏┓┃┏
┛┗ ┗┗┻┣┛  ┗┻┛┗┗┻  ┗┗┛┗┛┗┛
      ┛                  
`}</pre>

      <ToolsWidget />
    </>
  );
};
