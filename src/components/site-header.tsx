"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="#home" className="font-extrabold">
          VK
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden gap-2 md:flex">
            <NavigationMenuItem>
              <Link href="#about" className="px-2 text-xs text-muted-foreground hover:text-foreground">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#experience" className="px-2 text-xs text-muted-foreground hover:text-foreground">
                Experience
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#projects" className="px-2 text-xs text-muted-foreground hover:text-foreground">
                Projects
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3">
          <a href="https://github.com/vibhavkaluvala" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/vibhavkaluvala" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:vibhavsaik@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
