"use client";

interface ThemeToggleProps {
  dark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="w-14 h-8 flex items-center rounded-full p-1 bg-gray-700 relative transition-colors duration-300 cursor-pointer"
      aria-label="Toggle theme"
    >
       {/* Sliding circle */}
      <div
        className="w-6 h-6 rounded-full bg-gray-200 shadow-md transform transition-transform duration-300 flex items-center justify-center"
        style={{ transform: dark ? "translateX(24px)" : "translateX(0)" }}
      >
        {/* SVG Icon */}
        {dark ? (
          // Sun SVG
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#ff9a0e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx={12} cy={12} r={5} />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m0-13.728l1.414 1.414M17.95 17.95l1.414 1.414" />
          </svg>
        ) : (
          // Moon SVG
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </div>
    </button>
  );
}