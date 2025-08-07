import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-primary", props.className)}
      {...props}
    >
      <path d="M12 3v18" />
      <path d="M3 7h18" />
      <path d="M5 7a5 5 0 0 1 7-5a5 5 0 0 1 7 5" />
      <path d="M5 7c0 5.5-2 9-2 9" />
      <path d="M19 7c0 5.5 2 9 2 9" />
    </svg>
  );
}
