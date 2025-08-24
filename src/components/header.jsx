import { useState } from "preact/hooks";
import MovingBorderCover from "./moving-border-cover";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#car-types", label: "Car Types" },
    { href: "#why-us", label: "Why Us?" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center p-[4px] backdrop-blur-sm fixed top-4 md:top-8 w-11/12 md:w-4/5 self-center z-50 rounded-full border border-border bg-[#121212]">
        <div className="text-lg md:text-xl font-medium ml-4">Shirdi Wale</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <MovingBorderCover className="hidden md:block rounded-full px-6 py-2">
          Contact us
        </MovingBorderCover>

        {/* Mobile Menu Button */}
        <MovingBorderCover
          className={`md:hidden rounded-full pt-1 px-5 ${isMenuOpen ? "border-none" : ""}`}
        >
          <button
            onClick={toggleMenu}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </MovingBorderCover>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-4 right-4 z-40 bg-[#121212] border border-border rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <MovingBorderCover className="rounded-full px-6 py-2 text-center">
              Contact us
            </MovingBorderCover>
          </div>
        </div>
      )}
    </>
  );
};
