import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactModal({ isOpen, onClose, selectedCar = "" }) {
  const SERVICE_ID = "service_qxsy0zz";
  const TEMPLATE_ID = "template_bw2zix7";
  const PUBLIC_KEY = "2pIjRgKORLiM9URXa";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carType: selectedCar || "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    carType: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success

  // --- validation functions ---
  const validateEmail = (value) => {
    if (!value) return true; // email optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  const validatePhone = (value) => /^[0-9]{10}$/.test(value);

  // --- input change ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  // --- blur validation ---
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "email" && value && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email." }));
    }
    if (name === "phone" && !validatePhone(value)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter valid 10-digit phone number.",
      }));
    }
    if (name === "name" && !value) {
      setErrors((prev) => ({ ...prev, name: "Name is required." }));
    }
    if (name === "carType" && !value) {
      setErrors((prev) => ({ ...prev, carType: "Car type is required." }));
    }
  };

  useEffect(() => {
    if (selectedCar) {
      setFormData((prev) => ({ ...prev, carType: selectedCar }));
    }
  }, [selectedCar]);

  // --- overall validity ---
  useEffect(() => {
    const requiredFilled = formData.name && formData.phone && formData.carType;
    const noErrors =
      !errors.name && !errors.phone && !errors.carType && !errors.email;
    const allValid =
      requiredFilled &&
      validatePhone(formData.phone) &&
      validateEmail(formData.email);

    setIsValid(allValid && noErrors);
  }, [formData, errors]);

  // --- submit ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("loading");

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY).then(
      () => {
        setTimeout(() => {
          setStatus("success");
          setTimeout(() => {
            setStatus("idle");
            setFormData({ name: "", email: "", phone: "", carType: "" });
            onClose();
          }, 1500);
        }, 800);
      },
      (error) => {
        console.error(error);
        alert("Failed to send. Try again.");
        setStatus("idle");
      }
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center 
                     bg-black/40 backdrop-blur-md z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-[#111]/90 rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-800"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-white">Get In Touch</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-300 text-sm mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-2 bg-[#1a1a1a] text-white border ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } rounded focus:outline-none`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 text-sm mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email (optional)"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-2 bg-[#1a1a1a] text-white border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } rounded focus:outline-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-300 text-sm mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-2 bg-[#1a1a1a] text-white border ${
                    errors.phone ? "border-red-500" : "border-gray-700"
                  } rounded focus:outline-none`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Car Type */}
              <div>
                <label className="block text-gray-300 text-sm mb-1">
                  Car Type *
                </label>
                <select
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-2 bg-[#1a1a1a] text-white border ${
                    errors.carType ? "border-red-500" : "border-gray-700"
                  } rounded focus:outline-none`}
                >
                  <option value="">Select Car Type</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Luxury">Luxury</option>
                </select>
                {errors.carType && (
                  <p className="text-red-500 text-sm mt-1">{errors.carType}</p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={!isValid || status === "loading"}
                className={`flex items-center justify-center overflow-hidden transition-all duration-500 ${
                  status === "success"
                    ? "bg-green-500 text-white rounded-full w-12 h-12 mx-auto"
                    : isValid
                    ? "bg-white text-black hover:bg-gray-200 w-full py-2 rounded"
                    : "bg-gray-600 text-gray-300 cursor-not-allowed w-full py-2 rounded"
                }`}
                animate={
                  status === "success"
                    ? { width: "3rem", height: "3rem", borderRadius: "9999px" }
                    : {}
                }
                transition={{ duration: 0.4 }}
              >
                {status === "loading" && (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                {status === "success" && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.path d="M5 13l4 4L19 7" />
                  </motion.svg>
                )}
                {status === "idle" && "Submit"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
