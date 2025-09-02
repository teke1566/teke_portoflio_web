import React from "react";
import { useContent } from "../content/ContentContext";

const Certifications = () => {
  const { content } = useContent();

  // Only keep certifications that are not explicitly disabled
  const items = Array.isArray(content?.certifications)
    ? content.certifications.filter((c) => c.active !== false)
    : [];

  return (
    <section
      id="certs"
      className="section !h-auto !min-h-0 !py-20 mt-20 md:mt-24"
    >
      <div className="container mx-auto">
        <h2
          className="h2 text-accent mb-6 md:mb-8"
          style={{ color: "#3498db" }}
        >
          Certifications & Badges
        </h2>

        {items.length === 0 ? (
          <div className="p-8 text-center rounded-xl border border-white/10 bg-white/5 text-white/70">
            🚀 No certifications yet — coming soon!
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((c, i) => (
              <a
                key={i}
                href={c.url || "#"}
                target={c.url ? "_blank" : undefined}
                rel={c.url ? "noreferrer" : undefined}
                className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-4 min-h-[140px]"
                title={c.name}
              >
                {c.logo && (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="w-16 h-16 object-contain rounded"
                    loading="lazy"
                  />
                )}
                <div className="min-w-0">
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-white/70">
                    {c.issuer}
                    {c.year ? ` • ${c.year}` : ""}
                  </div>
                  {c.url && (
                    <div className="text-[11px] text-blue-300 group-hover:underline">
                      Verify →
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
