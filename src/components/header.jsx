import MovingBorderCover from "./moving-border-cover";

export const Header = () => {
  return (
    <nav className="flex justify-between items-center p-[4px] backdrop-blur-sm fixed top-8 w-4/5 self-center z-50 rounded-full border border-border bg-[#121212]">
      <div className="text-xl font-medium ml-4">Shirdi Wale</div>
      <div className="flex space-x-8">
        <a
          href="#"
          className="hover:text-foreground transition-colors text-muted-foreground"
        >
          Services
        </a>
        <a
          href="#"
          className="hover:text-foreground transition-colors text-muted-foreground"
        >
          Car Types
        </a>
        <a
          href="#"
          className="hover:text-foreground transition-colors text-muted-foreground"
        >
          Why Us?
        </a>
        <a
          href="#"
          className="hover:text-foreground transition-colors text-muted-foreground"
        >
          Pricing
        </a>
      </div>
      <MovingBorderCover className="rounded-full px-6 py-2">
        Contact us
      </MovingBorderCover>
    </nav>
  );
};
