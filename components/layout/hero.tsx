import { GridSection } from "@/components/ui/grid-section";
import Link from "next/link";
import { ArrowRight, ChevronRight, Folder, Globe } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/ui/motion-primitives/animated-group";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AnimatedEmptyState } from "../ui/animated-empty-space";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function Hero() {
  return (
    <GridSection>
      <div className="pointer-events-none absolute inset-0 border-x border-grid-border [mask-image:linear-gradient(transparent,black)]"></div>
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[1800px] -translate-x-1/2 [mask-composite:intersect] [mask-image:linear-gradient(transparent,black)] opacity-80">
        <div className="absolute inset-x-[360px] inset-y-0">
          <svg
            className="pointer-events-none absolute inset-[unset] bottom-0 right-full h-[600px] w-[360px] text-grid-border/60 [mask-image:linear-gradient(90deg,transparent,black)]"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="grid-«r0»"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="transparent"
                  stroke="currentColor"
                  stroke-width="2"
                ></path>
              </pattern>
            </defs>
            <rect fill="url(#grid-«r0»)" width="100%" height="100%"></rect>
          </svg>
          <svg
            className="pointer-events-none absolute inset-[unset] bottom-0 left-full h-[600px] w-[360px] text-grid-border/60 [mask-image:linear-gradient(270deg,transparent,black)]"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="grid-«r1»"
                x="-1"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="transparent"
                  stroke="currentColor"
                  stroke-width="2"
                ></path>
              </pattern>
            </defs>
            <rect fill="url(#grid-«r1»)" width="100%" height="100%"></rect>
          </svg>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <div className="pointer-events-none absolute inset-x-px inset-y-0 overflow-hidden [mask-image:linear-gradient(transparent,black)] opacity-80">
        <svg
          className="pointer-events-none absolute inset-[unset] bottom-0 left-1/2 h-[600px] w-grid-width -translate-x-1/2 text-grid-border/60"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="grid-«r2»"
              x="-1"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="transparent"
                stroke="currentColor"
                stroke-width="2"
              ></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-«r2»)" width="100%" height="100%"></rect>
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-full w-[150%] opacity-15">
          <div className="size-full bg-[linear-gradient(90deg,#F4950C,#EB5C0C)] [mask-image:linear-gradient(transparent_25%,black)]"></div>
        </div>
      </div>
      <section>
        <div className="relative pt-24 md:pt-36">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className="absolute inset-0 -z-20"
          >
            <Image
              src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
              alt="background"
              className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
              width="3276"
              height="4095"
            />
          </AnimatedGroup>
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          <div className="mx-auto max-w-xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
              >
                Allow us eveolve your business
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-8 max-w-2xl text-balance text-lg"
              >
                We build modern, high-performance websites tailored to your
                brand—designed to impress and engineered to convert.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
              >
                <div className="mx-auto mt-10 flex max-w-fit justify-center gap-4 animate-fade-in [animation-delay:300ms] [animation-duration:500ms] [animation-fill-mode:both]">
                  <Link
                    href={`/`}
                    className={cn(buttonVariants({ variant: "primary" }))}
                  >
                    Get in touch
                  </Link>
                  <Link
                    href={`/`}
                    className={cn(buttonVariants({ variant: "secondary" }))}
                  >
                    See our work
                  </Link>
                </div>
              </AnimatedGroup>
            </div>
          </div>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="w-full">
              <AnimatedEmptyState
                title="Conversion-Driven Design"
                description="Beautiful websites aren't enough. We craft experiences that turn clicks into customers."
                cardContent={
                  <>
                    <Globe className="size-4 text-neutral-700" />
                    <div className="h-2.5 w-28 min-w-0 rounded-sm bg-neutral-200" />
                    <div className="flex  grow items-center justify-end gap-1.5 text-neutral-500">
                      <ChevronRight className="size-3.5" />
                    </div>
                  </>
                }
                pillContent="Powered by strategy"
              />
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </GridSection>
  );
}
