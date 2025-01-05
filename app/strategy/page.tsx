"use server";

import Section from "@/components/section";
import { Hero } from "@/components/sections/hero";
import { MainFooter } from "@/components/sections/main-footer";

export default async function Strategy() {
  return (
    <main>
      <Hero>
        <div className="container mx-auto space-y-12 max-w-5xl leading-relaxed">
          <h1 className="text-5xl lg:text-7xl font-semibold">Strategy</h1>

          <p className="text-2xl font-light max-w-prose">
            We move individuals and organizations from a place of cultural
            awareness to action to agility. Our framework establishes a
            detailed, customized roadmap with learning objectives and indicators
            of success. Your roadmap may include cultural agility workshops,
            coaching, and team and leadership development training.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Awareness</h2>
              <p>
                Learning what culture is and how individual preferences,
                behaviors and values are influenced by it
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4">Action</h2>
              <p>
                Interpreting and responding to the culturally defined behaviors
                of others
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4">Agility</h2>
              <p>
                Modeling flexibility and inclusivity in intercultural spaces
              </p>
            </div>
          </div>
        </div>
      </Hero>

      <Section variant="muted" spacing="tight">
        <div className="container mx-auto text-lg max-w-5xl space-y-12 leading-relaxed">
          <h2 className="text-4xl font-semibold">What it looks like</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-semibold mb-6">
                Culturally agile individuals:
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  Understand their own culture and how their culture contributes
                  to the broader culture of the communities they are a part of
                </li>
                <li>
                  Interpret and respond to the culturally defined behavior of
                  others within their community
                </li>
                <li>
                  Use this understanding and flexibility to create diverse and
                  inclusive communities
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold  mb-6">
                Culturally agile teams:
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  Understand their shared (macro-level) culture is built by
                  (micro-level) individuals
                </li>
                <li>
                  Understand that retaining a diverse community requires
                  building an inclusive culture
                </li>
                <li>
                  Create a sense of belonging through shared values of
                  curiosity, accountability, and empathy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <MainFooter />
    </main>
  );
}
