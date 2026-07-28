import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { Observer } from 'gsap/Observer';
import { Flip } from "gsap/Flip";

import App from "./App.tsx";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);
gsap.registerPlugin(Observer);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
