
import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/lib/siteConfig";

export default function Home() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-4xl md:text-5xl font-bold">{site.hero.title}</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl">{site.hero.subtitle}</p>
        <div className="mt-8 flex gap-3">
          <Link className="rounded-lg bg-black px-5 py-3 text-white" href="/projects">View Projects</Link>
          <Link className="rounded-lg border px-5 py-3" href="/about">About</Link>
        </div>
      </section>
    </Container>
  );
}
