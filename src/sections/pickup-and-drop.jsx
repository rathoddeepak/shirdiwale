import pickupAndDrop from "../assets/pickup_drop.png";

export const PickupAndDrop = () => {
  return (
    <div className="self-center bg-gradient-to-b from-[#095539] to-[#031d12] w-[90%] mx-6 md:w-4/5 p-6 md:p-10 flex flex-col md:flex-row rounded-3xl md:rounded-4xl gap-y-6 md:gap-y-0 md:gap-x-10">
      <img
        className="w-full md:w-[30%] max-w-xs mx-auto md:mx-0"
        src={pickupAndDrop}
        alt="Pickup and drop"
      />
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-bold leading-tight mb-4 md:mb-5 text-center md:text-left">
          Pickup & Drop Points
        </h1>
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Shirdi Railway Station</span>
          </div>
          <div className="flex items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Shirdi Bus Stand</span>
          </div>
          <div className="flex items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Hotel Pickup/Drop</span>
          </div>
          <div className="flex items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Shirdi Airport</span>
          </div>
          <div className="flex items-center space-x-3 text-sm md:text-base text-muted-foreground">
            <span className="text-yellow-300">✓</span>
            <span>Anywhere in Shirdi or nearby places</span>
          </div>
        </div>
      </div>
    </div>
  );
};
