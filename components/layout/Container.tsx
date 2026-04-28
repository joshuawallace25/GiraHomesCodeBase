import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-[1280px] mx-auto px-4 md:px-8 w-full", className)}>
      {children}
    </div>
  );
};
