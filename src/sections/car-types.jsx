import swiftCarImage from "../assets/swift-car.png";
import dzireCarImage from "../assets/dzire.png";
import taveraImage from "../assets/tavera.png";
import innovaImage from "../assets/innova-car.png";

const VehicleCards = () => {
  const vehicles = [
    {
      type: "hatchback",
      title: "Hatchback",
      subtitle: "Swift (CNG, DIESEL)",
      description:
        "Compact and fuel-efficient cars perfect for city driving and short trips with good mileage.",
      image: swiftCarImage,
      gradientFrom: "from-[#305D7E]",
      gradientTo: "to-black",
      borderColor: "border-[#0a2031]",
    },
    {
      type: "sedan",
      title: "Sedan",
      subtitle: "Dzire (CNG, DIESEL)",
      description:
        "Spacious and comfortable sedans ideal for long distance travel with premium comfort features.",
      image: dzireCarImage,
      gradientFrom: "from-black",
      gradientTo: "to-[#7A5E30]",
      borderColor: "border-[#251c0e]",
    },
    {
      type: "suv",
      title: "SUV",
      subtitle: "Ertiga- (CNG, Diesel, Petrol)",
      description:
        "Powerful SUVs perfect for family trips with spacious interiors and advanced safety features.",
      image: taveraImage,
      gradientFrom: "from-[#463B76]",
      gradientTo: "to-black",
      borderColor: "border-[#181427]",
    },
    {
      type: "luxury",
      title: "Luxury",
      subtitle: "Innova Crysta (Diesel)",
      description:
        "Premium luxury vehicles with top-tier amenities for special occasions and executive travel.",
      image: innovaImage,
      gradientFrom: "from-black",
      gradientTo: "to-[#794360]",
      borderColor: "border-[#2b1822]",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 mt-12">
      {vehicles.map((vehicle, index) => (
        <div
          key={vehicle.type}
          className={`
            rounded-3xl border ${vehicle.borderColor}
            bg-gradient-to-r ${vehicle.gradientFrom} ${vehicle.gradientTo}
            p-6 md:p-9 flex flex-col md:flex-row items-center gap-6 md:gap-10
            cursor-pointer transition-all duration-300 ease-in-out
            hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40
            min-h-[200px]
          `}
        >
          {/* Vehicle Image Container */}
          <div className="w-[200px] md:w-[24%] h-24 md:h-30 flex items-center justify-center flex-shrink-0">
            <img
              src={vehicle.image}
              alt={vehicle.title}
              className="w-full h-auto drop-shadow-xl"
            />
          </div>

          {/* Vehicle Info */}
          <div className="w-full md:w-[30%] items-center md:items-start flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="vehicle-type">
                <h3 className="text-white font-bold text-base md:text-lg tracking-widest uppercase mb-1 drop-shadow-lg text-center md:text-left">
                  {vehicle.title}
                </h3>
                <h4 className="text-white/75 text-sm md:text-base font-normal text-center md:text-left">
                  {vehicle.subtitle}
                </h4>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex-grow flex flex-col w-full md:w-[30%]">
            <div className="text-white font-semibold text-base md:text-lg drop-shadow-lg text-center md:text-left">
              Description
            </div>
            <div className="text-white/75 text-sm md:text-base leading-relaxed font-normal text-center md:text-left">
              {vehicle.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CarTypes = () => {
  return (
    <div className="w-full px-6 md:w-4/5 flex flex-col self-center items-center">
      <div className="text-center space-y-4">
        <div className="font-medium text-lg md:text-xl text-muted-foreground">
          Available Car Types
        </div>
        <div className="bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent font-semibold text-3xl md:text-5xl">
          Find perfect ride for your journey
        </div>
        <div className="text-sm md:text-base text-muted-foreground">
          All cars come with AC, and are regularly sanitized.
        </div>
      </div>

      <VehicleCards />
    </div>
  );
};
