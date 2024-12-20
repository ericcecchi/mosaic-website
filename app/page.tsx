"use server";

import Image from "next/image";
import { Button } from "@/components/button";
import NextLink from "next/link";
import { Link } from "@/components/link";

export default async function Home() {
  return (
    <main>
      <header className="bg-indigo-900 text-white">
        <nav className="flex justify-between items-center md:p-8 p-6 flex-wrap gap-6">
          <NextLink href="/" className="flex items-center">
            <Image
              priority
              width={1500}
              height={200}
              src="/images/logo.png"
              alt="Mosaic Consulting"
              className="h-6 w-auto flex-0"
            />
          </NextLink>
          <div className="flex space-x-6">
            <Link href="/about" variant="inverse">
              About
            </Link>
            <Link href="/strategy" variant="inverse">
              Strategy
            </Link>
          </div>
          <Button asChild variant="primary" size="sm">
            <NextLink href="/contact-us">Contact Us</NextLink>
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
              <NextLink href="/contact-us">
                Schedule a free consultation
              </NextLink>
            </Button>
          </div>

          <div className="md:w-1/2">
            <Image
              priority
              width={752}
              height={911}
              src="/images/abstract-mosaic-background.png"
              alt="Equipping leaders and teams to build inclusive culture"
              className="w-full"
            />
          </div>
        </section>
      </header>
    </main>
  );
}
