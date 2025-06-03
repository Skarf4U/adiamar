"use client";

import { LucideIcon } from "lucide-react";
import { ComponentType, SVGProps } from "react";

// loaders
export * from "./loading-spinner";


export type Icon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;