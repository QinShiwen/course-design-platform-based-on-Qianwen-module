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
import { Button } from "@/components";

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
        <div className="grid grid-cols-3 gap-2">
          {variantList.map((variant) => (
            <Button
              variant="default"
              key={variant}
              onClick={() => setBackgroundType(variant)}
            >
              {variant}
            </Button>
          ))}
        </div>
      </Panel>
      <Controls />
    </ReactFlow>
  );
}
