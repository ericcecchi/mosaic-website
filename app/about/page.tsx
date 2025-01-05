"use server";

import Section from "@/components/section";
import { Hero } from "@/components/sections/hero";
import { MainFooter } from "@/components/sections/main-footer";

export default async function About() {
  return (
    <main>
      <Hero>
        <h1 className="text-5xl lg:text-7xl font-semibold text-center">
          About Us
        </h1>
      </Hero>

      <Section variant="muted" spacing="tight">
        <div className="container mx-auto text-2xl max-w-prose space-y-6 leading-relaxed">
          <h2 className="text-3xl font-semibold">About Mosaic</h2>

          <p>
            Mosaics are works of art created from a multitude of individual
            pieces. Traditionally, these tiny pieces are made of tile, glass,
            ceramics, etc. These individual pieces can have rough or broken
            edges, but when carefully crafted together, these tiny, broken
            pieces create a full, beautiful image.
          </p>
          <p>
            Mosaic Consulting Services creates opportunities for people to learn
            more about themselves and the beautiful, complex layers they add to
            any spaces they share with other humans. The deeper we understand
            our own individual layers, the better equipped we are to understand
            and respond to others in the complexity of all their layers. This
            understanding makes us artists within our communities: we create
            richer and fuller communities when we learn about and lean into the
            individual differences we each bring to the whole.
          </p>
          <p>
            Mosaic does nothing in a silo—meaning, the diversity, equity and
            inclusion consulting and training we offer values and invites the
            voices of experts in several different fields for each of our
            clients. Whether you are reaching out for individual coaching, team
            development, or leadership training, you can be sure Mosaic will be
            working in partnership with and elevating the voices of other
            experts as we prepare your roadmap.
          </p>
        </div>
      </Section>

      <MainFooter />
    </main>
  );
}
