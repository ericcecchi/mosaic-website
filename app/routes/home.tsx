import { Link } from "@/components/link";
import { Button } from "@/components/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Build Inclusive Culture | Mosaic Consulting" },
    {
      name: "description",
      content:
        "Mosaic provides cultural agility training through customized roadmaps—including team workshops, individual coaching, and team and leadership development crash courses.",
    },
    {
      name: "og:title",
      content: "Build Inclusive Culture | Mosaic Consulting",
    },
    {
      name: "og:description",
      content:
        "Mosaic provides cultural agility training through customized roadmaps—including team workshops, individual coaching, and team and leadership development crash courses.",
    },
    {
      name: "og:image",
      content: "https://www.mosaicconsultingservices.com/images/og-image.png",
    },
    { name: "og:image:width", content: "1200" },
    { name: "og:image:height", content: "628" },
    { name: "og:url", content: "https://www.mosaicconsultingservices.com" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Build Inclusive Culture | Mosaic Consulting",
    },
    {
      name: "twitter:description",
      content:
        "Mosaic provides cultural agility training through customized roadmaps—including team workshops, individual coaching, and team and leadership development crash courses.",
    },
    {
      name: "twitter:image",
      content: "https://www.mosaicconsultingservices.com/images/og-image.png",
    },
    { name: "twitter:image:alt", content: "Mosaic Consulting" },
  ];
}

export default function Home() {
  return (
    <main>
      <header className="bg-indigo-900 text-white">
        <nav className="flex justify-between items-center md:p-8 p-6 flex-wrap gap-6">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Mosaic Consulting"
              className="h-6 w-auto flex-0"
            />
          </Link>
          <div className="flex space-x-6">
            <Link to="/about" variant="inverse">
              About
            </Link>
            <Link to="/strategy" variant="inverse">
              Strategy
            </Link>
          </div>
          <Button asChild variant="primary" size="sm">
            <RRLink to="/contact-us">Contact Us</RRLink>
          </Button>
        </nav>

        <section className="py-16 p-4 container mx-auto md:flex items-center">
          <div className="md:w-1/2 md:pr-12 pb-12 md:pb-0">
            <h1 className="text-5xl lg:text-7xl leading-tight font-semibold">
              Equipping leaders and teams to build inclusive culture
            </h1>
            <p className="text-2xl font-light leading-relaxed my-6">
              Mosaic provides cultural agility training through customized
              roadmaps—including team workshops, individual coaching, and team
              and leadership development crash courses.
            </p>
            <Button asChild variant="inverse" size="lg">
              <RRLink to="/contact-us">Schedule a free consultation</RRLink>
            </Button>
          </div>

          <div className="md:w-1/2">
            <img
              src="/images/abstract+mosaic+background+2007.png"
              alt="Equipping leaders and teams to build inclusive culture"
              className="w-full"
            />
          </div>
        </section>
      </header>
    </main>
  );
}
