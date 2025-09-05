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
    <div className="main-app space-y-36 flex flex-col items-center w-full" style="margin-top: 105px">
      <Header />

      <section id="hero" className="w-full flex justify-center">
        <HeroSection />
      </section>

      <section id="services" className="w-full flex justify-center">
        <WhyWait />
      </section>

      <section id="car-types" className="w-full flex justify-center">
        <CarTypes />
      </section>

      <section id="why-us" className="w-full flex justify-center">
        <WhyChooseUs />
      </section>

      <section id="pickup-drop" className="w-full flex justify-center">
        <PickupAndDrop />
      </section>

      <section id="pricing" className="w-full flex justify-center">
        <Pricing />
      </section>

      <section id="contact" className="w-full flex flex-col items-center space-y-20">
        <OurMission />
        <ContactUs />
    </section>
    </div>
  );
}



render(<App />, document.getElementById("app"));
