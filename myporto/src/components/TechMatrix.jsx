import React, { useState, useEffect, useRef } from "react";
import { useContent } from "../content/ContentContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const clamp = (n) => Math.min(100, Math.max(0, Number(n) || 0));

const CategorySkills = ({ category, items }) => {
  const [page, setPage] = useState(0);
  const perPage = 6;
  const totalPages = Math.ceil(items.length / perPage);

  const start = page * perPage;
  const end = start + perPage;
  const visibleItems = items.slice(start, end);

  // --- Dynamic arrow centering ---
  const gridRef = useRef(null);
  const [arrowTop, setArrowTop] = useState(0);

  useEffect(() => {
    if (gridRef.current) {
      const updateTop = () => {
        setArrowTop(gridRef.current.offsetHeight / 2);
      };
      updateTop();
      window.addEventListener("resize", updateTop);
      return () => window.removeEventListener("resize", updateTop);
    }
  }, [page, visibleItems]);

  return (
    <div className="mb-16 relative group">
      {/* Category Title */}
      <h3 className="text-xl font-semibold mb-5 text-white/90 border-b border-white/10 pb-2">
        {category}
      </h3>

      {/* Content: Skills Grid + Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grid + Arrows wrapper */}
        <div className="relative" ref={gridRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {visibleItems.map((t, j) => (
                <div
                  key={j}
                  className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{t.name}</h4>
                    <span className="text-sm text-white/70">{t.years} yrs</span>
                  </div>

                  <div className="mt-3 h-2 w-full bg-white/10 rounded">
                    <div
                      className="h-2 bg-blue-500 rounded"
                      style={{ width: `${clamp(t.level)}%` }}
                    />
                  </div>

                  <div className="mt-2 text-xs text-white/60">
                    Proficiency: {clamp(t.level)}%
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Arrow Left */}
          {totalPages > 1 && (
            <button
              className="absolute -left-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10 opacity-0 group-hover:opacity-100"
              style={{ top: `${arrowTop}px`, transform: "translateY(-50%)" }}
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Arrow Right */}
          {totalPages > 1 && (
            <button
              className="absolute -right-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10 opacity-0 group-hover:opacity-100"
              style={{ top: `${arrowTop}px`, transform: "translateY(-50%)" }}
              onClick={() => setPage((p) => (p + 1) % totalPages)}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Dots (centered below grid) */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    idx === page
                      ? "bg-blue-500 scale-110"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Radar Chart Overview */}
        <div className="p-5 rounded-xl border border-white/10 bg-white/5">
          <h4 className="text-sm text-white/70 mb-1">Category Overview</h4>
          <p className="text-xs text-white/50 mb-3">
            Includes all skills in this category
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={items}>
              <PolarGrid stroke="#ffffff22" />
              <PolarAngleAxis dataKey="name" stroke="#ccc" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#999" />
              <Radar
                name={category}
                dataKey="level"
                stroke="#3498db"
                fill="#3498db"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const TechMatrix = () => {
  const { content } = useContent();

  let categories = Array.isArray(content?.techMatrix) ? content.techMatrix : [];
  if (Array.isArray(categories[0]) && categories.length === 1) {
    categories = categories[0]; // flatten if double wrapped
  }

  if (categories.length === 0) return null;

  return (
    <section id="tech" className="section !h-auto !min-h-0 !py-16 mt-20 md:mt-22">
      <div className="container mx-auto">
        <h2 className="h2 text-accent mb-10" style={{ color: "#3498db" }}>
          Tech Stack
        </h2>

        {categories.map((cat, i) => (
          <CategorySkills key={i} category={cat.category} items={cat.items} />
        ))}
      </div>
    </section>
  );
};

export default TechMatrix;
