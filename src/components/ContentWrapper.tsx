import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

const ContentWrapper = ({ children, className = "" }: ContentWrapperProps) => {
  return (
    <div className={`relative w-full bg-background z-20 ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
