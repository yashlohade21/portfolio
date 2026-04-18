"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 9403320356",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "yashlohade2502@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Hyderabad, India (Open to Relocation)",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.8 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          subject: `New Lead: ${formData.service || "General Inquiry"} - ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="py-6 relative z-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <motion.div variants={fadeUp} className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 glass-card"
            >
              <motion.h3
                variants={fadeUp}
                className="text-4xl font-bold gradient-text"
              >
                Let&apos;s Work Together
              </motion.h3>
              <motion.p variants={fadeUp} className="text-[var(--text-muted)]">
                Have a project in mind or want to collaborate? Fill out the form
                below and I&apos;ll get back to you within 24 hours.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-sm font-medium">
                  Open to Opportunities
                </span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <Input
                  type="text"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <Select
                  value={formData.service}
                  onValueChange={(val) => setFormData({ ...formData, service: val })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select A Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select A Service</SelectLabel>
                      <SelectItem value="Full-Stack Web Development">Full-Stack Web Development</SelectItem>
                      <SelectItem value="API & Backend Development">API & Backend Development</SelectItem>
                      <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                      <SelectItem value="Cloud & DevOps">Cloud & DevOps</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Textarea
                  className="h-[200px]"
                  placeholder="Tell me about your project..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block"
                >
                  <Button
                    type="submit"
                    size="md"
                    className="max-w-52"
                    disabled={status === "sending"}
                  >
                    {status === "idle" && "Send Message"}
                    {status === "sending" && "Sending..."}
                    {status === "success" && "Message Sent!"}
                    {status === "error" && "Failed - Try Again"}
                  </Button>
                </motion.div>
              </motion.div>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-sm"
                >
                  Thanks! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            variants={slideRight}
            className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
                  whileHover={{ x: -5, transition: { duration: 0.2 } }}
                  className="flex items-center gap-6 cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] glass-card text-accent rounded-xl flex items-center justify-center text-xl"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-[var(--text-muted)] text-sm">{item.title}</p>
                    <h3 className="text-lg">{item.description}</h3>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
