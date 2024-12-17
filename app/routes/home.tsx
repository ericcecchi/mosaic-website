import type { Route } from "./+types/home";

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
        <nav className="flex justify-between items-center p-8">
          <a href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Mosaic Consulting"
              className="h-6 w-auto"
            />
          </a>
          <div className="flex space-x-6">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/strategy" className="hover:underline">
              Strategy
            </a>
          </div>
          <a
            href="/contact-us"
            className="bg-white text-indigo-900 px-4 py-2 rounded-full"
          >
            Contact Us
          </a>
        </nav>

        <section className="py-16 p-4 container mx-auto flex items-center">
          <div className="w-1/2 pr-12">
            <h1 className="text-7xl font-bold">
              Equipping leaders and teams to build inclusive culture
            </h1>
            <p className="text-2xl my-6">
              Mosaic provides cultural agility training through customized
              roadmaps—including team workshops, individual coaching, and team
              and leadership development crash courses.
            </p>
            <a
              href="/contact-us"
              className="bg-white text-indigo-900 px-6 py-4 rounded-full mt-4 inline-block"
            >
              Schedule a free consultation
            </a>
          </div>

          <div className="w-1/2">
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
