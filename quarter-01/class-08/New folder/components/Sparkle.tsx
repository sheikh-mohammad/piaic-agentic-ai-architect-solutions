/** Four-point star ✦ used as a decorative separator (not an emoji). */
export default function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 0c.9 6.4 4.7 10.2 12 12-7.3 1.8-11.1 5.6-12 12-.9-6.4-4.7-10.2-12-12C7.3 10.2 11.1 6.4 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
