"use server";

import Section from "@/components/section";
import { Hero } from "@/components/sections/hero";
import { MainFooter } from "@/components/sections/main-footer";

export default async function About() {
  return (
    <main>
      <Hero>
        <h1 className="text-5xl lg:text-7xl font-semibold text-center">
          Contact Us
        </h1>
      </Hero>

      <Section variant="muted" spacing="tight">
        <div className="container mx-auto text-2xl max-w-prose space-y-6 leading-relaxed">
          <iframe
            width="540"
            height="700"
            src="https://d2b14e5d.sibforms.com/serve/MUIFAOKiwmGDm13NGyLXOvrgLBXLFKhUW-jj_-cgUjx2s2ddS0Ewp8TersWWv8wfP--bnAqC5bT8lSN6JrtyGscewOk0uu1_JwYL8hHmw_1C_4MFZauhCQ6BbUBVU9llxR9BKy4MizMl0w76WB3LUZblLVUQzUxQErlZLpiqblVOVCyXrBOzXbymiN7Fvk4HWak4C65m-22FjHaN"
            allowFullScreen
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
            }}
          ></iframe>
        </div>
      </Section>

      <MainFooter />
    </main>
  );
}
