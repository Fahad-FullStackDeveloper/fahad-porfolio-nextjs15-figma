"use client";
import React from "react";
import Portfolio from "./portfolio/page";
import Skills from "./skills/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-4">
        <Portfolio />
      </section>

      <section className="py-4">
        <Skills />
      </section>

      <section className="py-4">
        <About />
      </section>

      <section className="py-4">
        <Projects />
      </section>

      <section className="py-4">
        <Contact />
      </section>

      <footer >
        <Footer />
      </footer>
    </div>
  );
}
