"use server";
import { Button } from "../ui/button";
import NextLink from "next/link";
import Section from "../section";

export async function MainCta() {
  return (
    <Section variant="orange">
      <div className="container mx-auto text-center space-y-6">
        <h2 className="text-4xl font-semibold">Let’s talk!</h2>
        <p className="text-2xl">Your first consultation is free.</p>

        <Button asChild size="lg" variant="secondary">
          <NextLink href="https://learn.mosaicconsultingservices.com/free-consultation">
            Schedule a free consultation
          </NextLink>
        </Button>
      </div>
    </Section>
  );
}
