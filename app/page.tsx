"use server";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import NextLink from "next/link";
import Section from "@/components/section";
import { MainFooter } from "../components/sections/main-footer";
import { Hero } from "../components/sections/hero";

export default async function Home() {
  return (
    <main>
      <Hero>
        <div className="md:flex items-center">
          <div className="md:w-2/3 md:pr-12 pb-12 md:pb-0 text-balance">
            <h1 className="text-5xl lg:text-7xl font-semibold">
              Equipping leaders and teams to build inclusive culture
            </h1>
            <p className="text-2xl font-light leading-relaxed my-6">
              Mosaic provides cultural agility training through team workshops,
              individual coaching, and team and leadership development crash
              courses.
            </p>
            <Button asChild variant="outline" size="lg">
              <NextLink href="https://learn.mosaicconsultingservices.com/free-consultation">
                Schedule a free consultation
              </NextLink>
            </Button>
          </div>

          <div className="md:w-1/3">
            <Image
              priority
              width={752}
              height={911}
              src="/images/abstract-mosaic-background.png"
              alt="Equipping leaders and teams to build inclusive culture"
              className="w-full"
            />
          </div>
        </div>
      </Hero>

      <Section variant="muted" spacing="tight">
        <p className="text-3xl font-light leading-relaxed text-center max-w-prose mx-auto text-balance">
          Mosaic trains individuals and teams to interpret and respond to the
          culturally defined behaviors of others, equipping them to build
          inclusive communities where humanity is honored and diversity is
          celebrated.
        </p>
        <p className="mx-auto text-center">
          <Button asChild size="lg">
            <NextLink href="/strategy">Learn about cultural agility</NextLink>
          </Button>
        </p>
      </Section>

      <Section variant="white">
        <h2 className="text-4xl font-semibold text-center text-stone-900">
          Some of Our Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center container mx-auto">
          <Image
            width={200}
            height={212}
            src="/images/clients/U-M_Logo-Hex.png"
            alt="University of Michigan"
          />
          <Image
            width={200}
            height={44}
            src="/images/clients/logo-Thrivent-rgb.svg"
            alt="Thrivent Financial"
          />
          <Image
            width={200}
            height={78}
            src="/images/clients/St.+Paul+Area+Chamber+Logo+01.png"
            alt="St. Paul Chamber of Commerce"
          />
          <Image
            width={200}
            height={27}
            src="/images/clients/vineyardusa-logo-black-r.png"
            alt="Vineyard USA"
          />
          <Image
            width={200}
            height={122}
            src="/images/clients/university-of-minnesota.svg"
            alt="The University of Minnesota"
          />
        </div>
      </Section>

      <Section variant="muted">
        <h2 className="text-4xl font-semibold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center container mx-auto text-pretty">
          <div className="space-y-4">
            <div className="aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                width={320}
                height={240}
                src="/images/unsplash-image-smgTvepind4.jpg"
                alt="Mosaic Consulting group training workshop"
                className="w-full -translate-y-12"
              />
            </div>
            <h3 className="text-2xl font-semibold">Training</h3>
            <p className="text-lg">
              Whether through a workshop, webinar, or crash course, we train you
              to learn what culture is and how it influences you and your
              community. We then train you how to move from this place of
              awareness to a place where you intentionally create diverse and
              inclusive communities.
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                width={320}
                height={214}
                src="/images/unsplash-image-JaoVGh5aJ3E.jpg"
                alt="Mosaic Consulting 1:1 coaching"
                className="w-full -translate-y-8"
              />
            </div>
            <h3 className="text-2xl font-semibold">Coaching</h3>
            <p className="text-lg">
              Using tools like the IDI assessment, we provide one-on-one
              cultural agility coaching to ensure you feel competent to engage
              the intercultural spaces you find yourself in.
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                width={320}
                height={214}
                src="/images/unsplash-image-KdeqA3aTnBY.jpg"
                alt="Mosaic Consulting leadership and team development"
                className="w-full "
              />
            </div>
            <h3 className="text-2xl font-semibold">
              Leadership & team development
            </h3>
            <p className="text-lg">
              Research shows that diverse, inclusive, and culturally agile teams
              have greater productivity, performance, and profitability. We
              teach your leadership team how to leverage its position and power,
              and move together towards organizational inclusivity.
            </p>
          </div>
        </div>

        <p className="mx-auto text-center">
          <Button asChild size="lg">
            <NextLink href="/strategy">Learn more about our strategy</NextLink>
          </Button>
        </p>
      </Section>

      <Section variant="white">
        <h2 className="text-4xl font-semibold text-center">
          Providing Certified Training in
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center max-w-5xl mx-auto">
          <Image
            width={320}
            height={104}
            src="/images/clients/ICI+Logo+2021+-+2.1.png"
            alt="Official Intercultural Intelligence Certification training (ICI)"
          />

          <Image
            width={320}
            height={128}
            src="/images/clients/IDI+Logo+(Wide).png"
            alt="Certified in Intercultural Development Inventory (IDI) training"
          />

          <Image
            width={256}
            height={256}
            src="/images/clients/21-0012_RecertificationProvider_V1_600_suyjlk_q95ys01.png"
            alt="SHRM Recertification Provider"
          />
        </div>
      </Section>

      <Section variant="dark">
        <div className="container mx-auto space-y-12">
          <h2 className="text-xl font-semibold ">What People Are Saying</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center items-start container mx-auto">
            <div className="bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-light">
                “I had no idea how important it was that I understand my own
                culture in order to understand others!”
              </p>
              <p className="text-lg font-semibold text-accent-foreground mt-4">
                — Individual coachee
                <br />
                <span className="font-normal">University of Minnesota</span>
              </p>
            </div>
            <div className="bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-light">
                “Mosaic Consulting met our team right where we were at and
                challenged us in ways that were long overdue—and we’re better
                for it.”
              </p>
              <p className="text-lg font-semibold text-accent-foreground mt-4">
                — Workshop participant
                <br />
                <span className="font-normal">Saint Paul Public Schools</span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <MainFooter />
    </main>
  );
}
