import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, Github, Star } from "lucide-react";
import { AnimatedMetric } from "@/components/animated-metric";

export function FeaturedOffGrid() {
  return (
    <section id="featured-work" aria-labelledby="featured-work-heading" className="space-y-4">
      <h2 id="featured-work-heading" className="text-xl font-bold">
        Featured Work
      </h2>

      <article className="py-1">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-zinc-950">
            <Image
              src="/off-grid/logo.png"
              alt="Off Grid logo"
              width={40}
              height={40}
              className="size-10 object-contain"
            />
          </div>

          <div className="min-w-0 flex-1 space-y-4">
            <div>
              <h3 className="text-base font-semibold">Off Grid</h3>
              <p className="mt-1 text-sm font-medium leading-relaxed text-foreground/85">
                Open-source AI platform for running models locally across Android and iOS.
              </p>
            </div>

            <div className="flex flex-nowrap items-center gap-x-1.5 overflow-x-auto whitespace-nowrap text-[11px] text-foreground/75 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <span className="inline-flex items-center gap-1">
                <ArrowDownToLine className="size-3.5 text-foreground/70" aria-hidden="true" />
                <AnimatedMetric
                  value={100}
                  suffix="K+"
                  label="downloads"
                  duration={4500}
                  className="text-sm font-semibold tabular-nums text-foreground"
                />
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Star className="size-3.5 fill-current text-amber-500 dark:text-amber-400" aria-hidden="true" />
                <AnimatedMetric
                  value={3}
                  suffix="K+"
                  label="GitHub stars"
                  duration={4200}
                  className="text-sm font-semibold tabular-nums text-foreground"
                />
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-sm font-medium text-foreground">Open source</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                <Image
                  src="/platforms/android.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="size-3.5"
                />
                Android
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                <Image
                  src="/platforms/apple.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="size-3.5 dark:invert"
                />
                iOS
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/60">
                My work
              </p>
              <p className="text-sm leading-relaxed text-foreground/85">
                Maintainer &amp; core contributor working across{" "}
                <strong className="font-semibold text-foreground">on-device inference</strong>,{" "}
                <strong className="font-semibold text-foreground">mobile infrastructure</strong>, and{" "}
                <strong className="font-semibold text-foreground">audio intelligence</strong>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-foreground/80">
              <span>On-device inference</span>
              <span aria-hidden="true">·</span>
              <span>Local MCP</span>
              <span aria-hidden="true">·</span>
              <span>Continuous audio intelligence</span>
              <span aria-hidden="true">·</span>
              <span>Mobile infrastructure</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <Link
                href="https://getoffgridai.co/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold underline-offset-4 hover:underline"
              >
                Visit Off Grid
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </Link>
              <Link
                href="https://github.com/off-grid-ai/OGAM"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold underline-offset-4 hover:underline"
              >
                <Github className="size-3" aria-hidden="true" />
                GitHub
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
