/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";
import { useOthers } from "@liveblocks/react";

const LiveCursors = () => {
  const others = useOthers();
  return (
    <>
      {others.map(({ connectionId, presence }: any) => {
        if (!presence?.cursor) return null;
        return (
          <Cursor
            key={connectionId}
            color={COLORS[Number(connectionId) % COLORS.length]}
            x={presence.cursor.x}
            y={presence.cursor.y}
            message={presence.message || ""}
          />
        );
      })}
    </>
  );
};

export default LiveCursors;
