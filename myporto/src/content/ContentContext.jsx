import React, { createContext, useContext, useEffect, useState } from "react";

const ContentContext = createContext({ content: null, loading: true, error: null });
export const useContent = () => useContext(ContentContext);

// set to true to prevent showing the app without JSON
const REQUIRE_CONTENT = true;

export const ContentProvider = ({ children }) => {
  const CONTENT_URL = process.env.REACT_APP_CONTENT_URL || "/data.json";
  const [content, setContent]   = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${CONTENT_URL}?v=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to fetch content: ${res.status}`);
        const json = await res.json();
        if (!cancelled) setContent(json);
      } catch (e) {
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [CONTENT_URL]);

  // Block the UI if JSON is required and missing
  if (REQUIRE_CONTENT && (loading || !content)) {
    return (
      <ContentContext.Provider value={{ content, loading, error }}>
        <div className="min-h-screen flex items-center justify-center text-white/80">
          {loading ? "Loading content..." : "No content available."}
        </div>
      </ContentContext.Provider>
    );
  }

  return (
    <ContentContext.Provider value={{ content, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
};
