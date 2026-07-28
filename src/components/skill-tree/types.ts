export const stackFront = {
  "": "",
  react: "react",
  router: "reactrouter",
  vite: "vite",
  html: "html5",
  css: "css",
  js: "javascript",
  ts: "typescript",
  redux: "redux",
  tailwind: "tailwindcss",
  gsap: "gsap",
};

export const stackBack = {
  "": "",
  postgres: "postgresql",
  mysql: "mysql",
  redis: "redis",
  express: "express/white",
  node: "node.js",
  git: "git",
  github: "github/white",
  npm: "npm",
}

export const stackAll = { ...stackFront, ...stackBack };

export type StackKeys = keyof typeof stackAll;
export type StackKeysFront = keyof typeof stackFront;
export type StackKeysBack = keyof typeof stackBack;

export type SkillNodeType = {
  idNode: StackKeysFront | StackKeysBack;

  x: number;
  y: number;
};

export type ConnectionType = {
  from: StackKeysFront | StackKeysBack;
  to: StackKeysFront | StackKeysBack;
  type: "primary" | "secondary" | "soft";
};

export type NodeType = {
  active: boolean,
  nodeActiveNow: StackKeysFront | StackKeysBack,
}

export type techDetail = {
  title: string;
  category: string;
  experience: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  related: string[];
  description: string;
};

