import ourMission from "../assets/our_mission.png";

export const OurMission = () => {
  const renderLeft = () => {
    return (
      <div className="w-[60%] space-y-8">
        <h1 className="text-4xl bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent font-semibold leading-tight">
          Our Mission & Vision
        </h1>
        <div className="space-y-6 w-[80%]">
          <div className="flex items-start space-x-3 text-muted-foreground">
            <div className="text-2xl">•</div>
            <span>
              To give devotees and travelers in Shirdi a safe, affordable, and
              private travel experience.
            </span>
          </div>
          <div className="flex items-start space-x-3 text-muted-foreground">
            <div className="text-2xl">•</div>
            <span>
              No driver charges, no hidden costs — just you and your loved ones,
              enjoying your journey in peace.
            </span>
          </div>
          <div className="flex items-start space-x-3 text-muted-foreground">
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
    return <img src={ourMission} className="w-[40%]" />;
  };

  return (
    <div className="w-4/5 flex flex-row self-center">
      {renderLeft()}
      {renderRight()}
    </div>
  );
};
