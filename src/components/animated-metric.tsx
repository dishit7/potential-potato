"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedMetricProps {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function AnimatedMetric({
  value,
  suffix,
  label,
  decimals = 0,
  duration = 900,
  className,
}: AnimatedMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedValue(value);
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = -(Math.cos(Math.PI * progress) - 1) / 2;

      setDisplayedValue(value * easedProgress);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [duration, isInView, value]);

  const formattedValue = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(displayedValue);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {formattedValue}
        {suffix} {label}
      </span>
      <span className="sr-only">
        {value}
        {suffix} {label}
      </span>
    </span>
  );
}
