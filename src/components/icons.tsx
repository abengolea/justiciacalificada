import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("text-secondary", props.className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M50,0C27.9,0,10,17.9,10,40c0,22.1,40,60,40,60s40-37.9,40-60C90,17.9,72.1,0,50,0z"
      />
      <text
        x="50"
        y="52"
        fontFamily="sans-serif"
        fontSize="30"
        textAnchor="middle"
        dy=".3em"
        fill="hsl(var(--header-foreground))"
        fontWeight="bold"
      >
        JC
      </text>
    </svg>
  );
}
