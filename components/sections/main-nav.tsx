"use server";

import Image from "next/image";
import { Link } from "@/components/link";
import { Button } from "../ui/button";
import NextLink from "next/link";
import { SiInstagram, SiLinkedin } from "@icons-pack/react-simple-icons";

export async function MainNav() {
  return (
    <nav className="sm:flex items-center md:p-8 p-6 flex-wrap gap-12">
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
      <div className="flex-1 flex justify-between items-center flex-wrap gap-6 mt-4 sm:mt-0">
        <div className="flex space-x-6">
          <Link href="/" variant="inverse" activeClassName="underline">
            Home
          </Link>
          <Link href="/about" variant="inverse" activeClassName="underline">
            About
          </Link>
          <Link
            href="https://learn.mosaicconsultingservices.com/workshops"
            variant="inverse"
            activeClassName="underline"
          >
            Workshops
          </Link>
          <Link
            href="https://learn.mosaicconsultingservices.com/downloads"
            variant="inverse"
            activeClassName="underline"
          >
            Guides
          </Link>
          <Link href="/strategy" variant="inverse" activeClassName="underline">
            Strategy
          </Link>
        </div>
        <div className="flex space-x-4">
          <Button asChild size="icon" variant="ghost">
            <NextLink
              href="https://www.instagram.com/mosaicconsulting/"
              target="_blank"
            >
              <SiInstagram />
            </NextLink>
          </Button>
          <Button asChild size="icon" variant="ghost">
            <NextLink
              href="https://www.linkedin.com/company/mosaic-consulting-services/"
              target="_blank"
            >
              <SiLinkedin />
            </NextLink>
          </Button>
          <Button asChild variant="outline">
            <NextLink href="https://learn.mosaicconsultingservices.com/">
              Training Portal
            </NextLink>
          </Button>
        </div>
      </div>
    </nav>
  );
}
