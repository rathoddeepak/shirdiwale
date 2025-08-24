import ourMission from "../assets/our_mission.png";

export const OurMission = () => {
  const renderLeft = () => {
    return (
      <div className="w-full md:w-[60%] space-y-6 md:space-y-8">
        <h1 className="text-3xl md:text-4xl bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent font-semibold leading-tight text-center md:text-left">
          Our Mission & Vision
        </h1>
        <div className="space-y-4 md:space-y-6 w-full md:w-[80%]">
          <div className="flex items-start space-x-3 text-sm md:text-base text-muted-foreground">
            <div className="text-2xl">•</div>
            <span>
              To give devotees and travelers in Shirdi a safe, affordable, and
              private travel experience.
            </span>
          </div>
          <div className="flex items-start space-x-3 text-sm md:text-base text-muted-foreground">
            <div className="text-2xl">•</div>
            <span>
              No driver charges, no hidden costs — just you and your loved ones,
              enjoying your journey in peace.
            </span>
          </div>
          <div className="flex items-start space-x-3 text-sm md:text-base text-muted-foreground">
            <div className="text-2xl">•</div>
            <span>
              To become Shirdi’s most trusted self-drive car rental, where
              travel is easy, honest, and comfortable for everyone.
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderRight = () => {
    return <img src={ourMission} className="w-full md:w-[40%] mt-6 md:mt-0 max-w-md mx-auto md:mx-0" alt="Our mission" />;
  };

  return (
    <div className="w-full px-6 md:w-4/5 flex flex-col md:flex-row self-center items-center gap-y-8 md:gap-y-0">
      {renderLeft()}
      {renderRight()}
    </div>
  );
};
