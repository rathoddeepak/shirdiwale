import facebookImage from "../assets/facebook.png";
import instagramImage from "../assets/instagram.png";
import youtubeImage from "../assets/youtube.png";
import whatsappImage from "../assets/whatsapp.png";

export function ContactUs() {
  return (
    <div className="w-4/5 self-center flex flex-col mb-28">
      <div className="w-full text-center rounded-3xl border border-sky-950 bg-gradient-to-b from-black via-black to-sky-950 shadow-xl py-6">
        <h1 className="text-4xl bg-gradient-to-r from-foreground to-[#505050] bg-clip-text text-transparent font-bold leading-tight">
          Contact Us
        </h1>

        <div className="space-y-2 mt-4 text-gray-300">
          <p className="flex justify-center items-center gap-3">
            {/* <FaMapMarkerAlt className="text-yellow-400" />*/}
            Office Address: 2nd Floor Sai Complex, Near Dwarkamai, Shirdi
          </p>

          <p className="flex justify-center items-center gap-3">
            {/* <FaPhone className="text-yellow-400" />*/}
            Call / WhatsApp: <span>1234567890</span>
          </p>

          <p className="flex justify-center items-center gap-3">
            {/* <FaEnvelope className="text-yellow-400" />*/}
            Email: <span>ShirdiCarWale@gmail.com</span>
          </p>

          <p className="flex justify-center items-center gap-3">
            {/* <FaClock className="text-yellow-400" />*/}
            Open:<span>24/7</span>
          </p>
        </div>
      </div>
      <div className="flex self-center justify-center gap-6 mt-8 text-gray-200">
        <a href="#">
          <img src={instagramImage} className="w-8 h-8" />
        </a>
        <a href="#">
          <img src={facebookImage} className="w-8 h-8" />
        </a>
        <a href="#">
          <img src={youtubeImage} className="w-8 h-8" />
        </a>
        <a href="#">
          <img src={whatsappImage} className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
