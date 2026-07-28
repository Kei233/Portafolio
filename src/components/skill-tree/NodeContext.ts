// theme-context.ts
import { createContext } from "react";
import type { StackKeys, NodeType } from "./types";

type NodeContextType = {
  nodeId: StackKeys;
  newNodeId: (id: StackKeys) => void;
  nodeActive: {
    active: boolean,
    nodeActiveNow: StackKeys;
  }; 
  activeSet: (value: NodeType) => void;
};

export const NodeContext = createContext<NodeContextType | null>(null);