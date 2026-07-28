import { useRef, useState } from "react";
import { NodeContext } from "./NodeContext";
import type { StackKeys, NodeType } from "./types";

type Props = {
  children: React.ReactNode;
};

export function NodeProvider({ children }: Props) {
  const [nodeId, setNodeId] = useState<StackKeys>("");
  const [nodeActive, setNodeActive] = useState<NodeType>({
    active: false,
    nodeActiveNow: "",
  });

  const timeoutRef = useRef<number | null>(null);

  function newNodeId(id: StackKeys) {
    setNodeId(id);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setNodeId("");
      setNodeActive({ active: false, nodeActiveNow: "" });
    }, 26000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }

  function activeSet(value: NodeType) {
    setNodeActive(value);
  }

  return (
    <NodeContext.Provider
      value={{
        nodeId,
        newNodeId,
        nodeActive,
        activeSet,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
}
