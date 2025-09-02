// import React from "react";
// import { useContent } from "../content/ContentContext";

// const MicroBars = ({ history = [] }) => {
//   if (!history.length) return null;
//   const max = Math.max(...history);
//   return (
//     <div className="flex items-end gap-1 h-10 mt-2">
//       {history.map((v, i) => (
//         <div
//           key={i}
//           className="w-2 bg-blue-500/70 rounded-sm"
//           style={{ height: `${Math.max(8, (v / (max || 1)) * 100)}%` }}
//           title={`${v}`}
//         />
//       ))}
//     </div>
//   );
// };

// const SocialProof = () => {
//   const { content } = useContent();
//   const metrics = content?.socialProof?.metrics || [];
//   if (metrics.length === 0) return null;

//   return (
//     <section id="proof" className="section">
//       <div className="container mx-auto">
//         <h2 className="h2 text-accent mb-6" style={{ color: "#3498db" }}>
//           Social Proof
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//           {metrics.map((m, i) => (
//             <div key={i} className="p-5 rounded-xl border border-white/10 bg-white/5">
//               <div className="text-sm text-white/70">{m.label}</div>
//               <div className="text-3xl font-bold">
//                 {m.value}{m.unit ? m.unit : ""}
//               </div>
//               <MicroBars history={m.history} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialProof;
