// import React from "react";
// import { useContent } from "../content/ContentContext";
// import { FaDownload } from "react-icons/fa";

// const DownloadCenter = () => {
//   const { content } = useContent();
//   const items = Array.isArray(content?.downloads) ? content.downloads : [];
//   if (items.length === 0) return null;

//   return (
//     <section
//       id="downloads"
//       // ⬇️ Increased vertical offset so it sits lower on the page
//       className="section !h-auto !min-h-0 pt-8 md:pt-10 mt-24 md:mt-28 clear-both relative z-10 scroll-mt-24"
//     >
//       <div className="container mx-auto">
//         <h2 className="h2 text-accent mb-6 md:mb-7" style={{ color: "#3498db" }}>
//           DOWNLOAD CENTER
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
//           {items.map((d, i) => (
//             <a
//               key={i}
//               href={d.href}
//               download
//               className="group p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-between"
//               title={d.label}
//             >
//               <span className="text-sm">{d.label}</span>
//               <FaDownload className="opacity-70 group-hover:opacity-100" />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DownloadCenter;
