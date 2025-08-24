import whyChooseUsImg from "../assets/why_choose_us.png";

export const WhyChooseUs = () => {
  const renderLeft = () => {
    return (
      <div className="w-full md:w-[60%] space-y-6 md:space-y-8">
        <h1 className="text-3xl md:text-4xl bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent font-semibold leading-tight">
          Why Choose Us?
        </h1>
        <div className="space-y-2">
          <div className="flex items-start md:items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Clean & Sanitized Vehicles</span>
          </div>
          <div className="flex items-start md:items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Flexible Pickup & Drop Locations</span>
          </div>
          <div className="flex items-start md:items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Outstation Travel (Self-drive)</span>
          </div>
          <div className="flex items-start md:items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Hassle-Free Process (Just DL & ID Proof)</span>
          </div>
          <div className="flex items-start md:items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>No Hidden Charges – Transparent Pricing</span>
          </div>
          <div className="flex items-start md:items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>24x7 Roadside Assistance (Calling & WhatsApp)</span>
          </div>
          <div className="flex items-start md:items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Wide Range of Vehicles (Hatchbacks, Sedans, SUVs)</span>
          </div>
        </div>
      </div>
    );
  };

  const renderRight = () => {
    return (
      <img
        src={whyChooseUsImg}
        className="w-[40%] hidden md:block mt-6 md:mt-0"
        alt="Why choose us"
      />
    );
  };

  return (
    <div className="w-full px-6 md:w-4/5 flex flex-col md:flex-row self-center items-center gap-y-8 md:gap-y-0">
      {renderLeft()}
      {renderRight()}
    </div>
  );
};
