import type { HTMLAttributes, Ref } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "img-comparison-slider": HTMLAttributes<HTMLElement> & {
        ref?: Ref<HTMLElement>;
        value?: string | number;
        hover?: string;
        direction?: "horizontal" | "vertical";
      };
    }
  }
}
