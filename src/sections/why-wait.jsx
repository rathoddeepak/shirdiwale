// Components
import threeCarsImage from "../assets/three_cars.png";

export const WhyWait = () => {
  const renderLeft = () => {
    return (
      <div className="text-white flex flex-col justify-center items-start w-1/2 gap-y-6">
        {/* Main Heading with Gradient */}
        <h1 className="text-5xl  font-semibold leading-tight">
          <span className="bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent">
            Why wait for a driver
          </span>
          <br />
          <span className="bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent">
            when you can drive
          </span>
          <br />
          <span className="bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent">
            your own journey?
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground">
          Affordable, Convenient, Hassle Free.
        </p>
      </div>
    );
  };

  const renderRight = () => {
    return (
      <div className="w-1/2 px-10">
        <div className="text-2xl text-muted-foreground font-medium mb-6">
          Services We Offer
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Self-Drive Car Rentals (Hourly / Daily / Weekly)</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>
              Pickup & Drop Available at Hotels, Railway Station, Airport, or
              Any Nearby Location
            </span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Outstation Travel (Self-drive)</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Local Sightseeing (Self-drive)</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Customized Travel Plans (Self-drive)</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-4/5 flex flex-col self-center">
      <div className="w-full flex flex-row items-center">
        {renderLeft()}
        {renderRight()}
      </div>
      <img className="w-[90%] mt-10 self-center" src={threeCarsImage} />
    </div>
  );
};
