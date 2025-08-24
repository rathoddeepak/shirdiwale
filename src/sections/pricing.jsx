import { useState } from "preact/hooks";

function Table() {
  // Define the pricing data in state
  const [pricingData] = useState({
    plans: [
      {
        id: "hatchback",
        name: "Hatchback",
        description: "Swift (CNG, DIESEL)",
        prices: {
          "12hours": 999,
          "24hours": 1299,
          unknown: 999,
        },
        features: {
          categories: true,
          allClasses: true,
        },
      },
      {
        id: "sedan",
        name: "Sedan",
        description: "Dzire (CNG, DIESEL)",
        recommended: true,
        prices: {
          "12hours": 1199,
          "24hours": 1799,
          unknown: 1199,
        },
        features: {
          categories: true,
          allClasses: true,
        },
      },
      {
        id: "suv",
        name: "SUV",
        description: "Ertiga- (CNG, Diesel, Petrol)",
        prices: {
          "12hours": 1499,
          "24hours": 2499,
          unknown: 1499,
        },
        features: {
          categories: true,
          allClasses: true,
        },
      },
      {
        id: "luxury",
        name: "Luxury",
        description: "Innova Crysta (Diesel)",
        prices: {
          "12hours": 1999,
          "24hours": 2999,
          unknown: 1999,
        },
        features: {
          categories: true,
          allClasses: true,
        },
      },
    ],
    features: [
      { id: "categories", name: "All classes across 11 categories" },
      { id: "allClasses", name: "All classes across 11 categories" },
    ],
    durations: [
      { id: "12hours", name: "12 Hours Plan" },
      { id: "24hours", name: "24 Hours Plan" },
      { id: "unknown", name: "Unknown" },
    ],
  });

  return (
    <div className="grid grid-cols-5 gap-0 rounded-lg overflow-hidden shadow-2xl">
      {/* Left Column - Plan Details */}
      <div>
        <div className="p-6 h-36 border-b border-border">
          <h3 className="text-xl font-semibold mb-2">Choose plan</h3>
          <p className="text-sm text-muted-foreground">
            All plans come with a 30-day satisfaction guarantee.
          </p>
          <div className="w-8 h-0.5 bg-red-500 mt-4"></div>
        </div>

        {pricingData.durations.map((duration) => (
          <div key={duration.id} className="p-6 border-b border-border h-16">
            <h4 className="text-lg font-medium">{duration.name}</h4>
          </div>
        ))}

        {pricingData.features.map((feature, index) => (
          <div
            key={feature.id}
            className={`px-6 flex items-center h-16 ${index < pricingData.features.length - 1 ? "border-b border-border" : ""}`}
          >
            <p className="text-base font-medium">{feature.name}</p>
          </div>
        ))}
      </div>

      {/* Plan Columns */}
      {pricingData.plans.map((plan) => (
        <div
          key={plan.id}
          className={`${plan.recommended ? "bg-gradient-to-b from-indigo-800 via-15% border-indigo-950 border via-border to-[#4242424] relative rounded-tr-3xl rounded-tl-3xl" : ""} cursor-pointer hover:opacity-90 transition-opacity`}
        >
          <div
            className={`p-6 ${plan.recommended ? "" : "border-b"} border-border text-center h-36`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p
              className={`text-sm ${plan.recommended ? "text-purple-100" : "text-muted-foreground"}`}
            >
              {plan.description}
            </p>
          </div>

          {plan.recommended && (
            <div className="absolute top-26 left-1/2 transform -translate-x-1/2 z-10">
              <span className="text-indigo-400 text-xl font-bold">
                RECOMMENDED
              </span>
            </div>
          )}

          {pricingData.durations.map((duration) => (
            <div
              key={duration.id}
              className={`${plan.recommended ? "" : "border-b"} flex items-center w-full border-border text-center h-16`}
            >
              <span className="text-xl w-full font-semibold">
                ₹{plan.prices[duration.id]}
              </span>
            </div>
          ))}

          {pricingData.features.map((feature, index) => (
            <div
              key={feature.id}
              className={`p-6 ${index < pricingData.features.length - 1 ? `${plan.recommended ? "" : "border-b"} border-border` : ""} text-center h-16`}
            >
              <div className="w-6 h-6 mx-auto text-foreground">✓</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export const Pricing = () => {
  return (
    <div className="w-4/5 flex flex-col self-center items-center">
      <div className="text-center space-y-4 mb-10">
        <div className="bg-gradient-to-r from-muted-foreground to-[#505050] bg-clip-text text-transparent font-semibold text-5xl">
          Pricing
        </div>
        <div className="text-base text-muted-foreground">
          Starting at just ₹999 for 12 Hrs!
        </div>
      </div>
      <Table />
    </div>
  );
};
