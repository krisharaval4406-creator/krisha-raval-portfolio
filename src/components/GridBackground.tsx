export function GridBackground() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]"
      aria-hidden="true"
    >
      <div className="absolute top-[-22%] left-1/2 -translate-x-1/2 w-[78vw] h-[640px] bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.16)_0%,_rgba(34,211,238,0.08)_42%,_transparent_72%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(129,140,248,0.22)_0%,_rgba(34,211,238,0.1)_42%,_transparent_72%)] rounded-[100%] blur-[90px] opacity-80" />
      <div className="hidden dark:block absolute bottom-[-25%] right-[-10%] w-[50vw] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.12)_0%,_transparent_70%)] rounded-[100%] blur-[100px] opacity-70" />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.3] dark:opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="paper-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[var(--text-tertiary)]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#paper-grid)" />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 25%, var(--bg-primary) 145%)",
        }}
      />
    </div>
  );
}
