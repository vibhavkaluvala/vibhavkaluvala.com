"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Experience, Project } from "@/data/resume";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Github } from "lucide-react";

export function ExperienceAccordion({ items }: { items: Experience[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((exp, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left">
            <div className="flex w-full items-center gap-3 text-left">
              {exp.logo && (
                <div className="relative h-8 w-8 overflow-hidden rounded-sm border">
                  <img src={`/logos/${exp.logo}?v=${process.env.NEXT_PUBLIC_ASSETS_VERSION ?? '1'}`} alt={`${exp.company} logo`} className="h-full w-full object-contain" />
                </div>
              )}
              <div className="flex w-full flex-col gap-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{exp.company}</h3>
                  <span className="text-[10px] text-muted-foreground">{exp.start} — {exp.end}</span>
                </div>
                <div className="text-[12px] text-muted-foreground">{exp.role}{exp.location ? ` • ${exp.location}` : ""}</div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-[11px] text-muted-foreground">{exp.summary}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function ProjectAccordion({ items }: { items: Project[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((p, i) => (
        <AccordionItem key={i} value={`proj-${i}`}>
          <AccordionTrigger className="text-left">
            <div className="flex w-full items-center justify-between gap-3">
              <span className="font-semibold">{p.name}</span>
              {p.repo ? (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name} GitHub`}
                  className="text-muted-foreground hover:text-foreground"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4" />
                </a>
              ) : (
                <span
                  className="text-muted-foreground/60"
                  title="Add repo URL in src/data/resume.ts"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4" />
                </span>
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <p className="text-[11px] text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t, j) => (
                  <Badge key={j} variant="secondary" className="text-[11px] px-2 py-0.5">{t}</Badge>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
