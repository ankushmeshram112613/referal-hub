import { cn } from "@/lib/utils";
import { useState } from "react";

const SidebarItem = ({ id, icon, label, isActive, onClick }) => {
  const [showTour, setShowTour] = useState(false);
  return (
    <button
      id={id}
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:bg-slate-100 transition-colors",
        isActive && "bg-slate-100 text-blue-600"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default SidebarItem;
