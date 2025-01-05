"use server";
import Section from "@/components/section";
import { ComponentProps } from "react";
import { MainNav } from "./main-nav";

export type HeroProps = ComponentProps<typeof Section>;

export async function Hero({ children, ...props }: HeroProps) {
  return (
    <Section asChild variant="hero" className="p-0" {...props}>
      <header>
        <MainNav />

        <section className="pb-16 p-6 container mx-auto">{children}</section>
      </header>
    </Section>
  );
}
