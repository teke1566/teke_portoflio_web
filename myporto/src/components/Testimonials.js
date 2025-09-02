import React from "react";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useContent } from "../content/ContentContext";
import "./testimonial.css";

const makeKey = (o) => {
  const name = (o.name || "").trim().toLowerCase();
  const url = (o.url || "").trim().toLowerCase();
  const quoteStart = (o.quote || "").trim().slice(0, 60).toLowerCase();
  // Prefer URL if present; otherwise name + quote start
  return url || `${name}|${quoteStart}`;
};

const Testimonials = () => {
  const { content } = useContent();

  // Normalize internal testimonials
  const internal = Array.isArray(content?.testimonials)
    ? content.testimonials.map((t) => ({
        name: t.title || t.name || "",
        role: t.role || "",
        avatar: t.image || t.avatar || "",
        quote: t.description || t.quote || "",
        url: t.url || ""
      }))
    : [];

  // Normalize LinkedIn endorsements (we prefer these on duplicates)
  const linkedin = Array.isArray(content?.endorsements)
    ? content.endorsements.map((e) => ({
        name: e.name || "",
        role: e.role || "LinkedIn Recommendation",
        avatar: e.avatar || "",
        quote: e.quote || "",
        url: e.url || ""
      }))
    : [];

  // Merge with preference for LinkedIn
  const map = new Map();
  linkedin.forEach((item) => {
    map.set(makeKey(item), item);
  });
  internal.forEach((item) => {
    const key = makeKey(item);
    if (!map.has(key)) {
      map.set(key, item);
    }
  });

  const items = Array.from(map.values());

  if (items.length === 0) return null;

  return (
    <section id="testimonials" className="pt-52 pb-10 min-h-[60vh]">
      <motion.div
        className="md:w-1/4 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
      >
        <p className="h2 text-accent" style={{ color: "#3498db" }}>
          TESTIMONIALS & ENDORSEMENTS
        </p>
        <LineGradient width="mx-auto w-3/5" />
        <p className="mt-6">What teammates and managers say about my work.</p>
      </motion.div>

      <Swiper
        className="testimonial_container"
        grabCursor={true}
        loop={items.length > 2}
        spaceBetween={24}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 48 }
        }}
        modules={[Pagination, Navigation]}
      >
        {items.map((it, i) => (
          <SwiperSlide
            key={i}
            className="testimonial_card"
            style={{ backgroundColor: "#4682B442" }}
          >
            {it.avatar && (
              <img src={it.avatar} alt={it.name} className="testimonial_img" />
            )}
            <h3 className="testimonial_name">{it.name}</h3>
            {it.role && <div className="text-xs text-white/70">{it.role}</div>}
            <p className="text-white-100 text-[14px] pl-1 tracking-wider mt-2">
              “{it.quote}”
            </p>
            {it.url && (
              <a
                href={it.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-blue-300 hover:underline text-sm"
              >
                View on LinkedIn →
              </a>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
