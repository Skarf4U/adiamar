"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { memo, useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselThumbnail,
  CarouselThumbnails,
  useCarousel,
} from "./carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import { BlurImage } from "./blur-image";
import Link from "next/link";

type Project = {
  domain: string;
  name: string;
  description: string;
  image: string;
  color: string;
  logo: string;
};

const projects = [
  {
    domain: "shopsphere.com",
    name: "ShopSphere",
    description:
      "A modern storefront platform optimized for mobile and desktop experiences.",
    image: "https://assets.dub.co/solutions/dashboard.png",
    color: "#B51203",
    logo: "https://assets.dub.co/companies/black/fenitas.svg",
  },
  {
    domain: "insightedge.io",
    name: "InsightEdge",
    description:
      "Real-time dashboards and performance monitoring tools for growing teams.",
    image: "https://assets.dub.co/solutions/events-table.jpg",
    color: "#fd57b7",
    logo: "https://assets.dub.co/companies/black/efficient.svg",
  },
  {
    domain: "teamsync.app",
    name: "TeamSync",
    description:
      "An intuitive platform for managing tasks, documents, and communication.",
    image: "https://assets.dub.co/home/customer-page.png",
    color: "#5d0efb",
    logo: "https://assets.dub.co/companies/black/craylor.svg",
  },
];
export const Projects = ({ className }: { className?: string }) => {
  return (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[2280px] -translate-x-1/2">
        <div className="absolute inset-x-[580px] inset-y-0">
          <svg
            className="pointer-events-none absolute text-black/10 inset-[unset] right-full top-1/2 h-[calc(100%-4rem)] w-[600px] -translate-y-1/2 [mask-image:linear-gradient(90deg,transparent,black_50%)]"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="dots-«rd0»"
                x="-1"
                y="-1"
                width="12"
                height="12"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="1"
                  y="1"
                  width="2"
                  height="2"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect fill="url(#dots-«rd0»)" width="100%" height="100%"></rect>
          </svg>
          <svg
            className="pointer-events-none absolute text-black/10 inset-[unset] left-full top-1/2 h-[calc(100%-4rem)] w-[600px] -translate-y-1/2 translate-x-[12px] [mask-image:linear-gradient(270deg,transparent,black_50%)]"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="dots-«rd1»"
                x="-1"
                y="-1"
                width="12"
                height="12"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="1"
                  y="1"
                  width="2"
                  height="2"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect fill="url(#dots-«rd1»)" width="100%" height="100%"></rect>
          </svg>
        </div>
      </div>
      <div className="relative px-4">
        <div className="mx-auto w-full max-w-[620px] px-4 text-center">
          <h2 className="text-balance font-display text-3xl font-medium text-neutral-900 sm:text-4xl md:text-5xl">
            Explore our projects
          </h2>
          <p className="mt-3 text-pretty text-lg text-neutral-500">
            A showcase of dashboards and fast, responsive marketing sites crafted for real-world impact.
          </p>
        </div>
      </div>
      <div
        className={cn(
          "relative my-12 border-y border-grid-border bg-neutral-50 py-4 sm:px-4 sm:py-8",
          className
        )}
      >
        <AnimatePresence initial={false}>
          <>
            <motion.div
              key="projects"
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              transition={{ duration: 0.1 }}
            >
              <Carousel>
                <CarouselContent>
                  {projects.map((project, idx) => (
                    <CarouselItem key={idx} className="min-w-0 shrink-0 grow-0 pl-4 basis-[calc(100%-2rem)]">
                      <div className="relative isolate flex aspect-[1.8] w-full cursor-grab select-none flex-col overflow-hidden rounded-xl bg-neutral-200 p-3 text-left text-white xs:p-6 sm:aspect-[2] sm:p-10">
                        {/* Image */}
                        <div className="absolute inset-0">
                          <BlurImage
                            src={project.image}
                            alt={`Screenshot of ${project.name}`}
                            width={900}
                            height={580}
                            className="blur-0 object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-[radial-gradient(100%_100%,transparent,#0009)]"></div>
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-current to-85% opacity-90"
                          style={{ color: project.color }}
                        ></div>

                        {/* Bottom card */}
                        <div className="relative flex h-full flex-col justify-between">
                          <div className="relative h-6 shrink-0 sm:h-8"></div>
                          <div className="">
                            <div className="relative text-balance text-base sm:text-2xl lg:text-4xl">
                              {project.description}
                            </div>
                          </div>
                        </div>
                        <div className="absolute right-4 top-3 rounded-full border border-white/40 px-2 py-1 text-xs text-white md:right-10 md:top-8 md:px-3 md:py-2">
                          <Link
                            href={"https://" + project.domain}
                            target="_blank"
                          >
                            {project.domain}
                          </Link>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNavBar projects={projects} />
              </Carousel>
            </motion.div>
          </>
        </AnimatePresence>
      </div>
    </>
  );
};

function CarouselNavBar({ projects }: { projects: Project[] }) {
  const { api } = useCarousel();

  const autoplay = api?.plugins()?.autoplay;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: CarouselApi) => {
    setSelectedIndex(api?.selectedScrollSnap() ?? 0);
  }, []);

  const stopAutoplayAnd = useCallback(
    (fn: () => void) => () => {
      if (autoplay && autoplay.isPlaying()) autoplay.stop();
      fn();
    },
    [autoplay]
  );

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
  }, [api, autoplay, onSelect]);

  return (
    <div className="mx-auto mt-8 w-fit px-4">
      <div className="flex flex-wrap items-center justify-center gap-1">
        {api != null && (
          <>
            {api.slideNodes().map((_, idx) => {
              const project = projects[idx];

              return (
                <button
                  key={idx}
                  onClick={stopAutoplayAnd(() => api.scrollTo(idx))}
                  className={cn(
                    "isolate rounded-full p-0.5 cursor-pointer hover:bg-neutral-100 sm:p-1.5",
                    idx === selectedIndex && ""
                  )}
                >
                  <div
                    className={cn(
                      "relative rounded-full bg-neutral-50 px-5 py-2 text-white transition-colors duration-150",
                      idx === selectedIndex && "bg-black"
                    )}
                  >
                    <div className="relative h-5 w-28">
                      <img
                        src={project.logo}
                        alt="Logo"
                        className="blur-0 object-contain mix-blend-difference invert"
                      />
                    </div>
                  </div>
                  <span className="sr-only">Slide {idx + 1}</span>
                </button>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export function ProjectsLoader() {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="-ml-4 flex -translate-x-1/2">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="min-w-0 shrink-0 grow-0 basis-2/3 pl-4">
              <div className="border border-transparent">
                <div className="aspect-[900/580] animate-pulse rounded-lg bg-neutral-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4 pb-1">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="size-8 animate-pulse rounded-lg bg-neutral-200"
          />
        ))}
      </div>
    </div>
  );
}

export const ProjectLogo = memo(
  ({
    src,
    alt,
    className,
  }: {
    src: string | null;
    alt: string;
    className?: string;
  }) => (
    <div className={cn("relative size-8 shrink-0 rounded-md", className)}>
      {src ? (
        <>
          <BlurImage
            src={src}
            alt={alt}
            className="relative size-full rounded-[inherit]"
            width={32}
            height={32}
          />
          <div className="pointer-events-none absolute inset-0 size-full rounded-[inherit] border border-black/[0.075]" />
        </>
      ) : (
        <div className="relative size-full rounded-[inherit]" />
      )}
    </div>
  )
);
