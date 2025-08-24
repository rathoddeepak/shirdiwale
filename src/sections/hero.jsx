import carWithMapImg from "../assets/car_with_map.png";

export const HeroSection = () => {
  const renderLeft = () => {
    return (
      <div className="text-white flex flex-col justify-center items-start w-1/2 gap-y-6">
        {/* Header */}
        <h1 className="text-xl font-medium tracking-wider text-muted-foreground">
          # ShirdiCarWale
        </h1>

        {/* Main Heading with Gradient */}

        <h1 className="text-5xl  font-semibold leading-tight">
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
        <p className="text-lg text-muted-foreground">
          No Diver No waiting just ride
        </p>

        {/* CTA Button */}
        <button className="bg-white text-black px-8 py-[7px] rounded-sm text-base font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 group">
          Get In Touch
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
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
    return <img src={carWithMapImg} className="w-1/2" />;
  };
  return (
    <>
      <div className="h-32" />
      <div className="w-4/5 flex flex-row self-center items-center justify-between">
        {renderLeft()}
        {renderRight()}
      </div>
    </>
  );
};
