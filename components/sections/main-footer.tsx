"use server";
import { Link } from "@/components/link";
import Section from "@/components/section";
import { MainCta } from "./main-cta";

export async function MainFooter() {
  return (
    <>
      <MainCta />

      <Section variant="muted" asChild spacing="loose">
        <footer>
          <div className="container mx-auto max-w-5xl space-y-12">
            <h2 className="text-4xl font-semibold">Mosaic</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 justify-items-start items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/strategy">Strategy</Link>
                  </li>
                  <li>
                    <Link href="https://learn.mosaicconsultingservices.com/free-consultation">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Location</h3>
                <address className="not-italic">
                  <p>Chicago, IL</p>
                </address>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="mailto:celeste@mosaicconsultingservices.com">
                      celeste@mosaicconsultingservices.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-2 text-muted-foreground">
              <p>
                Copyright &copy; 2025 Mosaic Consulting Services, LLC. All
                rights reserved.
              </p>

              <p>
                Mosaic Consulting Services has obtained a license to use the
                IDI® from IDI, LLC.
              </p>

              <p>
                Mosaic Consulting Services is recognized by SHRM to offer Professional Development Credits (PDCs)
                for SHRM-CP® or SHRM-SCP®. For more information about certification or recertification, please visit
                <Link href="https://www.shrm.org/certification" className="ml-1">www.shrm.org/certification</Link>.
              </p>
            </div>
          </div>
        </footer>
      </Section>
    </>
  );
}
