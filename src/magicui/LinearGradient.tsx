import React from 'react';
import { CSSProperties } from "react";

type Direction =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right";

interface LinearGradientProps {
  from?: string;
  to?: string;
  width?: string;
  height?: string;
  direction?: Direction;
  transitionPoint?: string;
  className?: string;
}

const LinearGradient: React.FC<LinearGradientProps> = ({
  from = "#00000000",
  to = "rgba(120,119,198,0.3)",
  width = "100%",
  height = "100%",
  transitionPoint = "50%",
  direction = "bottom",
  className,
}) => {
  const styles: CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    inset: 0,
    width: width,
    height: height,
    background: `linear-gradient(to ${direction}, ${from}, ${transitionPoint}, ${to})`,
  };

  return <div className={className} style={styles} />;
};

export default LinearGradient;
