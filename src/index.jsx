import "./style.css";

import { Fragment, render } from "preact";

// Components
import { Header } from "./components/header";

// Sections
import { HeroSection } from "./sections/hero";
import { WhyWait } from "./sections/why-wait";
import { CarTypes } from "./sections/car-types";
import { WhyChooseUs } from "./sections/why-choose-us";
import { PickupAndDrop } from "./sections/pickup-and-drop";
import { Pricing } from "./sections/pricing";
import { OurMission } from "./sections/our-mission";
import { ContactUs } from "./sections/contact-us";

export function App() {
  return (
    <div className="main-app space-y-36">
      <Header />
      <HeroSection />
      <WhyWait />
      <CarTypes />
      <WhyChooseUs />
      <PickupAndDrop />
      <Pricing />
      <OurMission />
      <ContactUs />
    </div>
  );
}

render(<App />, document.getElementById("app"));
