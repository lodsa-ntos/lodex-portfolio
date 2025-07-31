import { FC, MouseEvent, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { BubblyBubbles } from "./BubblyBubbles";

export type BubblyLinkProps = {
  to: string;
  children: ReactNode;
  colorStart?: string;
  colorEnd?: string;
  className?: string;
  duration?: number;
};

export const BubblyLink: FC<BubblyLinkProps> = ({
  to,
  children,
  colorStart = "#004AAD",
  colorEnd = "#ffffff",
  className = "",
  duration = 1250,
}) => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement> | undefined) => {
    e?.preventDefault();

    if (
      !document.getElementById("react-bubbly-transitions__bubbles") &&
      window.location.pathname !== to
    ) {

      // get access to wave container
      const container = createRoot(
        document.getElementById("react-bubbly-transitions__container")!
      );

      // show the waves
      container.render(
        <BubblyBubbles
          colorStart={colorStart}
          colorEnd={colorEnd}
          duration={duration}
        />
      );

      // do the route change
      setTimeout(() => {
        navigate(to);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, duration / 2); // half total animation

      // hide the waves
      setTimeout(() => container.unmount(), duration); // total animation
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`react-bubbly-transitions__bubbly-link ${
        window.location.pathname === to ? "active" : ""
      } ${ className ?? ""}`}
      role="menuitem"
      tabIndex={0}
    >
      {children}
    </a>
  );
};