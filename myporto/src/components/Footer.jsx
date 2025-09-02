import React from "react";
import { useContent } from "../content/ContentContext";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion"; // add framer-motion for animations

// Utility: match label to icon
const iconFor = (label) => {
  const L = (label || "").toLowerCase();
  if (L.includes("github")) return <FaGithub size={20} />;
  if (L.includes("linkedin")) return <FaLinkedin size={20} />;
  if (L.includes("resume")) return <BsFillPersonLinesFill size={20} />;
  if (L.includes("mail") || L.includes("email")) return <HiOutlineMail size={20} />;
  if (L.includes("whatsapp") || L.includes("wa")) return <FaWhatsapp size={20} />;
  return null;
};

const Footer = () => {
  const { content } = useContent();
  const links = Array.isArray(content?.socialLinks) ? content.socialLinks : [];
  const availability = content?.availability?.status;

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white mt-20">
      <div className="container mx-auto py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
        
        {/* Left - copyright */}
        <motion.p
          className="text-sm text-white/70"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} <span className="font-semibold">Teketsel Beyene</span>. All rights reserved.
        </motion.p>

        {/* Center - availability badge */}
        {availability && (
          <motion.span
            className="px-3 py-1 rounded-full bg-green-600/20 text-green-400 text-xs font-medium shadow-sm border border-green-500/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {availability}
          </motion.span>
        )}

        {/* Right - social icons */}
        <div className="flex gap-4">
          {links.map((l, i) => (
            <motion.a
              key={i}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm"
              title={l.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {iconFor(l.label)}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
