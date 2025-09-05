import facebookImage from "../assets/facebook.png";
import instagramImage from "../assets/instagram.png";
import youtubeImage from "../assets/youtube.png";
import whatsappImage from "../assets/whatsapp.png";

export function ContactUs() {
  return (
    <div className="w-full px-6 md:w-4/5 self-center flex flex-col mb-16 md:mb-28">
      <div className="w-full text-center rounded-2xl md:rounded-3xl border border-sky-950 bg-gradient-to-b from-black via-black to-sky-950 shadow-xl py-6 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl bg-gradient-to-r from-foreground to-[#505050] bg-clip-text text-transparent font-bold leading-tight">
          Contact Us
        </h1>

        <div className="space-y-3 md:space-y-2 mt-4 text-gray-300 text-sm md:text-base">
          <p className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
            {/* <FaMapMarkerAlt className="text-yellow-400" />*/}
           ShirdiCarWale, Near Hotel Mathura, Shirdi.
          </p>

          <p className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
            {/* <FaPhone className="text-yellow-400" />*/}
            Call / WhatsApp: <span>7743821515</span>
          </p>

          <p className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
            {/* <FaEnvelope className="text-yellow-400" />*/}
            Email: <span>info@shirdicarwale.com</span>
          </p>

          <p className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
            {/* <FaClock className="text-yellow-400" />*/}
            Open:<span>24/7</span>
          </p>
        </div>
      </div>
      <div className="flex self-center justify-center gap-4 md:gap-6 mt-6 md:mt-8 text-gray-200">
       <a
  href="https://www.instagram.com/vintagecarscollector"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={instagramImage}
    className="w-6 h-6 md:w-8 md:h-8"
    alt="Instagram"
  />
</a>

<a
  href="https://www.facebook.com/groups/2477475798956176/"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={facebookImage}
    className="w-6 h-6 md:w-8 md:h-8"
    alt="Facebook"
  />
</a>

<a
  href="https://www.youtube.com/channel/UChDX4wagpTQS0aTm4eyhJaw"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={youtubeImage}
    className="w-6 h-6 md:w-8 md:h-8"
    alt="YouTube"
  />
</a>

<a
  href="https://wa.me/917743821515"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={whatsappImage}
    className="w-6 h-6 md:w-8 md:h-8"
    alt="WhatsApp"
  />
</a>
      </div>
    </div>
  );
}
