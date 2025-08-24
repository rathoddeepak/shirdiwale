import pickupAndDrop from "../assets/pickup_drop.png";

export const PickupAndDrop = () => {
  return (
    <div className="self-center bg-gradient-to-b from-[#095539] to-[#031d12] w-4/5 p-10 flex flex-row rounded-4xl gap-x-10">
      <img className="w-[30%]" src={pickupAndDrop} />
      <div className="flex flex-col">
        <h1 className="text-4xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-bold leading-tight mb-5">
          Pickup & Drop Points
        </h1>
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-muted-foregroun">
            <span className="text-yellow-300">✓</span>
            <span>Shirdi Railway Station</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foregroun">
            <span className="text-yellow-300">✓</span>
            <span>Bus Stand</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foregroun">
            <span className="text-yellow-300">✓</span>
            <span>Hotel Pickup/Drop</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foregroun">
            <span className="text-yellow-300">✓</span>
            <span>Shirdi Pickup</span>
          </div>
          <div className="flex items-center space-x-3 text-muted-foregroun">
            <span className="text-yellow-300">✓</span>
            <span>Any Pickup within city</span>
          </div>
        </div>
      </div>
    </div>
  );
};
