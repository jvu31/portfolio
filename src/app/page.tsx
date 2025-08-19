"use client";

import React, { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LazyAbout = React.lazy(() => import("../components/About"));
const LazyNavBar = React.lazy(() => import("../components/NavBar"));
const LazySkills = React.lazy(() => import("../components/Skills"));
const LazyProjects = React.lazy(() => import("../components/Projects"));
const LazyCats = React.lazy(() => import("../components/Cats"));



export default function Home() {
  const [page, setPage] = useState("about");

  const handlePageChange = (newPage: string) => {
    setPage(newPage);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Suspense fallback={<div>Loading Navigation...</div>}>
        <LazyNavBar setPage={handlePageChange} />
      </Suspense>

      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        <AnimatePresence mode="wait">
          {page === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Suspense fallback={<div>Loading About...</div>}>
                <LazyAbout />
              </Suspense>
            </motion.div>
          )}
          {page === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Suspense fallback={<div>Loading Skills...</div>}>
                <LazySkills />
              </Suspense>
            </motion.div>
          )}
          {/* Add LazyProjects here when ready */}
          {page === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Suspense fallback={<div>Loading Projects...</div>}>
                <LazyProjects />
              </Suspense>
            </motion.div>
          )}
          {page === "cats" && (
            <motion.div
              key="cats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Suspense fallback={<div>Loading Cats...</div>}>
                <LazyCats />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
