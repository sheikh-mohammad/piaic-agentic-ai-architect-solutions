import Link from "next/link";

export default function NextChapter({
  index,
  label,
  href,
}: {
  index: string;
  label: string;
  href: string;
}) {
  return (
    <div className="border-t border-border">
      <Link
        href={href}
        className="wrap group flex cursor-pointer items-center justify-between py-12 sm:py-16"
      >
        <div>
          <p className="eyebrow mb-3">Next — {index}</p>
          <p className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-4xl">
            {label}
          </p>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-bg">
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path d="M4 12h15m0 0-6-6m6 6-6 6" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
