import React, { useMemo, useState } from 'react';
import { useContent } from '../content/ContentContext';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Services = () => {
  const { content } = useContent();

  // JSON-only data
  const skills   = useMemo(() => Array.isArray(content?.skills) ? content.skills : [], [content]);
  const services = useMemo(() => Array.isArray(content?.services) ? content.services : [], [content]);

  /* ---------- Skills pager: exactly 9 (3×3) per page ---------- */
  const SKILLS_PAGE = 9;
  const [skillsPage, setSkillsPage] = useState(0);
  const skillsPages = Math.max(1, Math.ceil(skills.length / SKILLS_PAGE));
  const skillsSlice = useMemo(() => {
    const from = skillsPage * SKILLS_PAGE;
    return skills.slice(from, from + SKILLS_PAGE);
  }, [skills, skillsPage]);
  const skillsNext = () => setSkillsPage(p => (p + 1) % skillsPages);
  const skillsPrev = () => setSkillsPage(p => (p - 1 + skillsPages) % skillsPages);

  /* ---------- Services pager: 3 per page ---------- */
  const SRV_PAGE = 3;
  const [srvPage, setSrvPage] = useState(0);
  const srvPages = Math.max(1, Math.ceil(services.length / SRV_PAGE));
  const servicesSlice = useMemo(() => {
    const from = srvPage * SRV_PAGE;
    return services.slice(from, from + SRV_PAGE);
  }, [services, srvPage]);
  const srvNext = () => setSrvPage(p => (p + 1) % srvPages);
  const srvPrev = () => setSrvPage(p => (p - 1 + srvPages) % srvPages);

  /* ---------- Learn More toggle (per absolute index) ---------- */
  const [expandedIdx, setExpandedIdx] = useState(null);
  const toggle = (absIdx) => setExpandedIdx(prev => (prev === absIdx ? null : absIdx));

  return (
    <section className="section  !h-auto !min-h-0 !py-16 mt-20 md:mt-22" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT: Skills */}
          <div
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
            style={{ marginRight: '20px' }}
          >
            <h2 className="h2 text-accent mb-6" style={{ color: '#3498db' }}>
              What I Do
            </h2>

            {/* 3×3 grid */}
            <div className="w-full grid grid-cols-3 gap-4 text-center py-8 px-5">
              {skillsSlice.length === 0 && (
                <p className="col-span-3 text-white/70">No skills configured.</p>
              )}
              {skillsSlice.map(({ title, icon, style = '' }, idx) => (
                <div
                  key={`${title}-${idx}-${skillsPage}`}
                  className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
                >
                  {icon && <img src={icon} alt={title} className="w-12 mx-auto" />}
                  <p className="mt-3 text-sm md:text-base">{title}</p>
                </div>
              ))}
            </div>

            {/* Skills pager BELOW */}
            {skillsPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-2">
                <button
                  type="button"
                  aria-label="Previous skills"
                  onClick={skillsPrev}
                  className="w-9 h-9 rounded-full bg-blue-500/70 text-white grid place-items-center hover:bg-blue-500 transition"
                >
                  <FiChevronLeft />
                </button>
                <span className="text-xs text-white/70">{skillsPage + 1}/{skillsPages}</span>
                <button
                  type="button"
                  aria-label="Next skills"
                  onClick={skillsNext}
                  className="w-9 h-9 rounded-full bg-blue-500/70 text-white grid place-items-center hover:bg-blue-500 transition"
                >
                  <FiChevronRight />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: Services (3 per page) with Learn More */}
          <div className="flex-1" style={{ marginLeft: '20px' }}>
            {servicesSlice.length === 0 && (
              <p className="text-white/70">No services configured.</p>
            )}

            {servicesSlice.map((svc, localIdx) => {
              const absoluteIdx = srvPage * SRV_PAGE + localIdx;
              const isOpen = expandedIdx === absoluteIdx;
              return (
                <div
                  key={absoluteIdx}
                  className={`border-b border-white/20 mb-[38px] ${isOpen ? 'pb-4' : ''}`}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-3">
                      {svc.name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {svc.description}
                      {isOpen && Array.isArray(svc.additionalInfo) && svc.additionalInfo.length > 0 && (
                        <ul className="list-disc ml-6 mt-2">
                          {svc.additionalInfo.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </p>
                  </div>

                  <div className="flex flex-col flex-1 items-end mt-2">
                    <button
                      type="button"
                      onClick={() => toggle(absoluteIdx)}
                      className="px-0 py-0 text-left"
                      style={{
                        color: isOpen ? '#2980b9' : '#3498db',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {isOpen ? 'Show Less' : 'Learn More'}
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Services pager BELOW */}
            {srvPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-2">
                <button
                  type="button"
                  aria-label="Previous services"
                  onClick={srvPrev}
                  className="w-9 h-9 rounded-full bg-blue-500/70 text-white grid place-items-center hover:bg-blue-500 transition"
                >
                  <FiChevronLeft />
                </button>
                <span className="text-xs text-white/70">{srvPage + 1}/{srvPages}</span>
                <button
                  type="button"
                  aria-label="Next services"
                  onClick={srvNext}
                  className="w-9 h-9 rounded-full bg-blue-500/70 text-white grid place-items-center hover:bg-blue-500 transition"
                >
                  <FiChevronRight />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
