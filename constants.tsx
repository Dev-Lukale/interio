import { DrillIcon, HammerIcon, LightbulbIcon, PenIcon,PencilRulerIcon,RocketIcon,SquareGanttIcon } from "lucide-react";
import { IconWithNameProps } from "./components/WorkProcess/IconWithName";
import { CustomAccordionProps } from "./types";



export const WorkProcessSteps: IconWithNameProps[] = [
  {
    Icon: <LightbulbIcon />,
    title: "Concept",
  },
  {
    Icon: <SquareGanttIcon />,
    title: "Plan",
  },
  {
    Icon: <PencilRulerIcon/>,
    title: "Design",
  },
  {
    Icon: <HammerIcon />,
    title: "Build",
  },
  {
    Icon: <RocketIcon className="text-accent" />,
    title: "Launch",
    borderColor:"border-accent",
  },
];
export const WorkProcessFeatures: CustomAccordionProps[] = [
  {
    title: "Perfection in Every Inch",
    content: "At Frontier we perfect measurements",
    value: "item-1",
  },
  {
    title: "Dynamic Designs",
    content: "At Frontier we perfect measurements",
    value: "item-2",
  },
  {
    title: "Speed",
    content: "At Frontier we perfect measurements",
    value: "item-3",
  },
];