import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useContent } from "../content/ContentContext";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const { content } = useContent();

  const proj = useMemo(
    () => (content?.projects || []).find((p) => p.slug === slug),
    [content, slug]
  );

  if (!proj) {
    return (
      <div className="container mx-auto py-24 scroll-mt-32 bg-[#0a1a2f] min-h-screen text-white">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:underline"
        >
          <FiArrowLeft /> Back
        </Link>
        <h1 className="text-2xl mt-6">Project not found.</h1>
      </div>
    );
  }

  return (
    <section
      id="project-case-study"
      className="relative z-10 scroll-mt-32 pt-28 pb-32 min-h-screen bg-[#0a1a2f] text-white"
    >
      <div className="container mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:underline"
        >
          <FiArrowLeft /> Back
        </Link>

        {/* Header */}
        <header className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold">{proj.title}</h1>
            {proj.subtitle && (
              <p className="mt-2 text-blue-300">{proj.subtitle}</p>
            )}
            {proj.description && (
              <p className="mt-4 text-white/90 leading-relaxed">
                {proj.description}
              </p>
            )}

            {/* Tags */}
            <div className="mt-6 flex gap-3 flex-wrap">
              {(proj.tags || []).map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-white/10 text-white border border-white/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-3 flex-wrap">
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600"
                >
                  <FiExternalLink /> Live
                </a>
              )}
              {proj.repo && (
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/15 text-white text-sm hover:bg-white/25"
                >
                  <FaGithub /> Repo
                </a>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <img
              src={proj.gallery?.[0] || proj.image}
              alt={proj.title}
              className="w-full h-80 object-cover"
            />
          </div>
        </header>

        {/* Problem / Solution / Results */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Problem</h2>
              <p className="text-white/90 leading-relaxed">{proj.problem}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Solution</h2>
              <ul className="list-disc ml-6 space-y-2">
                {(proj.solution || []).map((s, i) => (
                  <li key={i} className="text-white/90 leading-relaxed">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Results</h2>
            <div className="grid gap-4">
              {(proj.results || []).map((r, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-white/10 bg-white/5"
                >
                  <div className="text-sm text-white/70">{r.label}</div>
                  <div className="text-2xl font-bold text-blue-400">
                    {r.value}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* Gallery */}
        {Array.isArray(proj.gallery) && proj.gallery.length > 1 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-3">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {proj.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${proj.title} ${i + 1}`}
                  className="w-full h-64 object-cover rounded-lg border border-white/10 shadow"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default ProjectCaseStudy;
