import whyChooseUsImg from "../assets/why_choose_us.png";

export const WhyChooseUs = () => {
  const renderLeft = () => {
    return (
      <div className="w-[60%] space-y-8">
        <h1 className="text-4xl bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent font-semibold leading-tight">
          Why Choose Us?
        </h1>
        <div className="space-y-2">
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Clean & Sanitized Vehicles</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Flexible Pickup & Drop Locations</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Outstation Travel (Self-drive)</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Hassle-Free Process (Just DL & ID Proof)</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>No Hidden Charges – Transparent Pricing</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>24x7 Roadside Assistance (Calling & WhatsApp)</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Wide Range of Vehicles (Hatchbacks, Sedans, SUVs)</span>
          </div>
        </div>
      </div>
    );
  };

  const renderRight = () => {
    return <img src={whyChooseUsImg} className="w-[40%]" />;
  };

  return (
    <div className="w-4/5 flex flex-row self-center items-center">
      {renderLeft()}
      {renderRight()}
    </div>
  );
};
