import carWithMapImg from "../assets/car_with_map.png";

export const HeroSection = () => {
  const renderLeft = () => {
    return (
      <div className="text-white flex flex-col justify-center items-start w-full md:w-1/2 gap-y-4 md:gap-y-6">
        {/* Header */}
        <h1 className="text-lg md:text-xl font-medium tracking-wider text-muted-foreground">
          # ShirdiCarWale
        </h1>

        {/* Main Heading with Gradient */}

        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          <span className="bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent">
            Shirdi's First
          </span>
          <br />
          <span className="bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent">
            Trusted Self-Drive
          </span>
          <br />
          <span className="bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent">
            Car Rental!
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted-foreground">
          No Driver No waiting just ride
        </p>

        {/* CTA Button */}
        <button className="bg-white text-black px-6 md:px-8 py-2 md:py-[7px] rounded-sm text-sm md:text-base font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 group">
          Get In Touch
          <svg
            className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </button>
      </div>
    );
  };

  const renderRight = () => {
    return (
      <img
        src={carWithMapImg}
        className="w-full md:w-1/2 mt-8 md:mt-0"
        alt="Car with map"
      />
    );
  };
  return (
    <>
      <div />
      <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row self-center items-center justify-between px-4 md:px-0">
        {renderLeft()}
        {renderRight()}
      </div>
    </>
  );
};
