import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validate function
  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Live Validation
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() ? "" : prevErrors[name],
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Labbai Irfan",
          from_email: form.email,
          to_email: "Labbaiirfan955@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-lg shadow-primary'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-6'>
          {/* Name Field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input 
              type='text' 
              name='name' 
              value={form.name} 
              onChange={handleChange} 
              placeholder="What's your good name?" 
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition duration-300 ease-in-out hover:scale-105' 
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
          </label>

          {/* Email Field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email</span>
            <input 
              type='email' 
              name='email' 
              value={form.email} 
              onChange={handleChange} 
              placeholder="What's your email?" 
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition duration-300 ease-in-out hover:scale-105' 
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
          </label>

          {/* Message Field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea 
              rows={6} 
              name='message' 
              value={form.message} 
              onChange={handleChange} 
              placeholder='What do you want to say?' 
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition duration-300 ease-in-out hover:scale-105' 
            />
            {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
          </label>

          {/* Submit Button */}
          <button 
            type='submit' 
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:shadow-lg hover:scale-105 transition duration-300 ${
              loading || Object.keys(errors).length > 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading || Object.keys(errors).length > 0}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Social Links */}
        <div className='mt-8 text-white text-center'>
          <p className='font-semibold'>Follow me on:</p>
          <div className='flex justify-center gap-6 mt-4'>
            <a href='https://www.instagram.com/iffuu.9?igsh=NnE0enljeW5jNTRm' target='_blank' rel='noopener noreferrer' className='text-white text-lg font-medium hover:text-primary transition duration-300'>Instagram</a>
            <a href='https://www.linkedin.com/in/labbai-irfan-5085a0288/' target='_blank' rel='noopener noreferrer' className='text-white text-lg font-medium hover:text-primary transition duration-300'>LinkedIn</a>
            <a href='https://github.com/LabbaiIrfan' target='_blank' rel='noopener noreferrer' className='text-white text-lg font-medium hover:text-primary transition duration-300'>GitHub</a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={slideIn("right", "tween", 0.2, 1)} 
        className='xl:flex-1 xl:h-[800px] md:h-[700px] h-[500px] w-full'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
