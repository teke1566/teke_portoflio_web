import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useContent } from "../content/ContentContext";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const PER_PAGE = 4; // 2×2 grid

const Work = () => {
  const { content } = useContent();
  const projects = Array.isArray(content?.projects) ? content.projects : [];

  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(projects.length / PER_PAGE));
  const pageItems = useMemo(() => {
    const from = page * PER_PAGE;
    return projects.slice(from, from + PER_PAGE);
  }, [projects, page]);

  const next = () => setPage((p) => (p + 1) % pageCount);
  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);

  const [open, setOpen] = useState(null); // project or null

  return (
    <section className="section relative" id="work">
      <div className="container mx-auto relative">
        {/* Side arrows only if more than a page */}
        {projects.length > PER_PAGE && (
          <>
            <button
              type="button"
              aria-label="Previous projects"
              onClick={prev}
              className="grid place-items-center absolute left-2 top-1/2 -translate-y-1/2
                         w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white
                         border border-white/20 backdrop-blur z-20"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              onClick={next}
              className="grid place-items-center absolute right-2 top-1/2 -translate-y-1/2
                         w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white
                         border border-white/20 backdrop-blur z-20"
            >
              <FiChevronRight size={22} />
            </button>
          </>
        )}

        {/* Header */}
        <div className="mb-8">
          <h2 className="h2 leading-tight text-accent" style={{ color: "#3498db" }}>
            Discover <br /> My Latest Work.
          </h2>
          <p className="text-lg mt-4">
            Delve into my recent work — a fusion of innovation and technical excellence.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {pageItems.map((p, idx) => {
            const short =
              (p.description || "").length > 140
                ? (p.description || "").slice(0, 140) + "…"
                : p.description || "";

            return (
              <div
                key={`${p.title}-${idx}-${page}`}
                className="group relative overflow-hidden border-2 border-white/40 rounded-xl shadow-lg"
              >
                {/* dark overlay */}
                <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

                {/* image */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* hover content */}
                <div className="absolute left-6 right-6 bottom-6 z-20 translate-y-8 opacity-0
                                group-hover:translate-y-0 group-hover:opacity-100
                                transition-all duration-400">
                  {p.subtitle && (
                    <div className="text-sm font-medium" style={{ color: "#3498db" }}>
                      {p.subtitle}
                    </div>
                  )}
                  <div className="text-2xl font-semibold text-white mt-1">{p.title}</div>

                  {short && <p className="text-white/90 text-sm mt-2">{short}</p>}

                  <div className="mt-3 flex gap-2 flex-wrap">
                    {(p.tags || []).slice(0, 4).map((t, i) => (
                      <span key={i} className="text-xs bg-white/15 text-white px-2 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => setOpen(p)}
                      className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {pageItems.length === 0 && <p className="text-white/70">No projects configured.</p>}
        </motion.div>

        {/* Modal */}
        {open && (
          <div
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm grid place-items-center p-4"
            onClick={() => setOpen(null)}
          >
            <div
              className="w-full max-w-3xl bg-[#0f2436] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div>
                  {open.subtitle && (
                    <div className="text-sm" style={{ color: "#3498db" }}>
                      {open.subtitle}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white">{open.title}</h3>
                </div>
                <button
                  aria-label="Close"
                  onClick={() => setOpen(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-white transition"
                >
                  <FiX size={18} />
                </button>
              </div>

              {/* body */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <img src={open.image} alt={open.title} className="h-64 md:h-full w-full object-cover" />
                <div className="p-5">
                  {open.description && (
                    <p className="text-white/90 leading-relaxed">{open.description}</p>
                  )}

                  {(open.tags || []).length > 0 && (
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {open.tags.map((t, i) => (
                        <span key={i} className="text-xs bg-white/15 text-white px-2 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* actions */}
                  <div className="mt-5 flex gap-3 flex-wrap">
                    {open.slug && (
                      <Link
                        to={`/projects/${open.slug}`}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
                        onClick={() => setOpen(null)}
                      >
                        View case study
                      </Link>
                    )}
                    {open.link && (
                      <a
                        href={open.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
                      >
                        <FiExternalLink /> Live
                      </a>
                    )}
                    {open.repo && (
                      <a
                        href={open.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/15 text-white text-sm hover:bg-white/25 transition"
                      >
                        <FaGithub /> Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* footer */}
              <div className="px-5 py-4 border-t border-white/10 text-right">
                <button
                  onClick={() => setOpen(null)}
                  className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm hover:bg-white/20 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
