import { HelpCircle } from "lucide-react";

interface WidgetContainerProps {
  children: React.ReactNode;
  className?: string;
}

const WidgetContainer = ({ children, className = "" }: WidgetContainerProps) => {
  return (
    <div className={`relative bg-widget rounded-[28px] shadow-widget p-10 ${className}`}>
      <div className="absolute top-7 left-7">
        <HelpCircle className="w-6 h-6 text-text-secondary opacity-40 hover:opacity-60 transition-opacity" />
      </div>
      {children}
    </div>
  );
};

export default WidgetContainer;
