interface BurgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function BurgerMenu({ isOpen, onToggle }: BurgerMenuProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
    >
      <span
        className={`block w-6 h-[2px] bg-white rounded-sm transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-[6px]" : ""
        }`}
      />
      <span
        className={`block w-6 h-[2px] bg-white rounded-sm my-[5px] transition-opacity duration-200 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block w-6 h-[2px] bg-white rounded-sm transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-[6px]" : ""
        }`}
      />
    </button>
  );
}