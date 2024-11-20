import React, { ReactNode } from 'react';
import { MdError as ErrorIcon } from 'react-icons/md';

interface IErrorDBProps {
  children: ReactNode;
}

export async function ErrorDB({
  children,
}: IErrorDBProps): Promise<JSX.Element> {
  return (
    <div className="flex flex-row gap-4 items-center ">
      <ErrorIcon className="text-red-500" size={24} />
      <p className="text-red-500 md:hidden">{children}</p>
    </div>
  );
}

export default ErrorDB;
