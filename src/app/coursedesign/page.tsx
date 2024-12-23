"use client";
import { useState } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function CourseDesign() {
  const [currentBackgroundType, setBackgroundType] = useState(
    BackgroundVariant.Dots // Dots, Lines, Cross
  );

  const variantList = [
    BackgroundVariant.Dots,
    BackgroundVariant.Lines,
    BackgroundVariant.Cross,
  ];

  return (
    <ReactFlow>
      <Background color="#ccc" variant={currentBackgroundType} />
      <Panel>
        {variantList.map((variant) => (
          <button key={variant} onClick={() => setBackgroundType(variant)}>
            {variant}
          </button>
        ))}
      </Panel>
      <Controls />
    </ReactFlow>
  );
}
