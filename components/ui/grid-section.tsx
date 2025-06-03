import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function GridSection({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className="grid-section-wrapper">
      <div
        className={cn(
          "grid-section relative overflow-clip px-4 border-grid-border [.grid-section-wrapper:not(:first-of-type)_>_&]:border-y [.grid-section-wrapper:first-of-type_>_&]:border-b",
          className
        )}
      >
        <div className="relative z-0 mx-auto max-w-grid-width border-grid-border border-x pt-24 pb-px">
          {children}
        </div>
      </div>
    </section>
  );
}
