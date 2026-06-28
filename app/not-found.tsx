import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-px flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="font-display text-7xl font-black gradient-text">404</div>
      <h1 className="mt-4 font-display text-2xl font-bold text-charcoal">
        This floor doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-md text-chrome">
        The page you&apos;re looking for moved or never existed. Let&apos;s get you back
        to the dance floor.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          Back Home
        </Link>
        <a href={site.phoneHref} className="btn-secondary">
          📞 {site.phone}
        </a>
      </div>
    </section>
  );
}
