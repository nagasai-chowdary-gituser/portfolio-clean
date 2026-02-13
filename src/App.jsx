import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

// Lazy-load sub-pages for faster initial paint
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const TechPage = lazy(() => import("./pages/TechPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

/**
 * Minimal loading fallback — maintains layout height during lazy load
 */
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* Home loads eagerly for fastest initial paint */}
            <Route path="/" element={<HomePage />} />

            {/* Sub-pages lazy-loaded */}
            <Route path="/about" element={
              <Suspense fallback={<PageFallback />}><AboutPage /></Suspense>
            } />
            <Route path="/projects" element={
              <Suspense fallback={<PageFallback />}><ProjectsPage /></Suspense>
            } />
            <Route path="/tech" element={
              <Suspense fallback={<PageFallback />}><TechPage /></Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<PageFallback />}><ContactPage /></Suspense>
            } />

            {/* 404 */}
            <Route path="*" element={
              <Suspense fallback={<PageFallback />}><NotFoundPage /></Suspense>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
