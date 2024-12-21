import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function CourseDesign() {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
