import CursorSVG from "@/public/assets/CursorSVG";
import React from "react";

interface CursorProps {
  color: string;
  x: number;
  y: number;
  message: string;
}

const Cursor = ({ color, x, y, message }: CursorProps) => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{ transform: `translate(${x}px,${y}px)` }}
    >
      <CursorSVG color={color} />
      {message && (
        <div
          className="text-white absolute left-2 top-5 rounded-3xl px-2 py-2"
          style={{ backgroundColor: color }}
        >
          <p className="whitespace-nowrap leading-relaxed text-sm">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Cursor;
