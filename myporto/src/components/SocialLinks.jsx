import React, { useMemo, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useContent } from "../content/ContentContext";

const iconFor = (label) => {
  const L = (label || "").toLowerCase();
  if (L.includes("github"))   return <FaGithub size={20} />;
  if (L.includes("linkedin")) return <FaLinkedin size={20} />;
  if (L.includes("resume"))   return <BsFillPersonLinesFill size={20} />;
  if (L.includes("mail") || L.includes("email")) return <HiOutlineMail size={20} />;
  if (L.includes("whatsapp") || L.includes("wa")) return <FaWhatsapp size={20} />;
  return null;
};

const SocialLinks = () => {
  const { content } = useContent();

  // Build links from JSON (no fallbacks)
  const links = useMemo(() => {
    const arr = Array.isArray(content?.socialLinks) ? content.socialLinks : [];
    return arr.filter((x) => x && x.label && x.href);
  }, [content]);

  // Hooks must run on every render (even if links is empty)
  const WINDOW = 4;
  const [start, setStart] = useState(0);
  const canPage = links.length > WINDOW;

  const view = useMemo(() => {
    if (!canPage) return links;
    const items = [];
    for (let i = 0; i < WINDOW; i++) items.push(links[(start + i) % links.length]);
    return items;
  }, [links, start, canPage]);

  const next = () => setStart((s) => (s + WINDOW) % links.length);
  const prev = () => setStart((s) => (s - WINDOW + links.length) % links.length);

  // Only decide what to render AFTER hooks have been called
  if (links.length === 0) return null;

  return (
    <div className="fixed left-4 top-1/3 z-[100] flex flex-col items-center gap-2 select-none">
      {canPage && (
        <button
          type="button"
          aria-label="Previous links"
          onClick={prev}
          className="w-8 h-8 rounded-full bg-blue-500/70 text-white grid place-items-center hover:bg-blue-500 transition"
        >
          <FiChevronUp />
        </button>
      )}

      <div className="flex flex-col gap-3">
        {view.map(({ label, href, download }, i) => (
          <a
            key={`${label}-${i}-${start}`}
            href={href}
            download={download}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
            className="w-12 h-12 rounded-full bg-blue-500/90 text-white shadow-lg flex items-center justify-center
                       hover:scale-110 transition-transform duration-200 focus:outline-none"
            title={label}
            aria-label={label}
          >
            {iconFor(label)}
          </a>
        ))}
      </div>

      {canPage && (
        <button
          type="button"
          aria-label="Next links"
          onClick={next}
          className="w-8 h-8 rounded-full bg-blue-500/70 text-white grid place-items-center hover:bg-blue-500 transition"
        >
          <FiChevronDown />
        </button>
      )}
    </div>
  );
};

export default SocialLinks;
