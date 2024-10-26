import React from "react";
import Image from "next/image";
import Profile from "@/app/images/Group 11 1.png";
import { Button } from "@/components/ui/button";


export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center flex-grow px-4 md:px-16 lg:px-32 py-10 shadow-md bg-gradient-to-t from-indigo-50 via-white to-indigo-50 text-black">
        <div className="w-full md:w-3/5 text-left">
          <h1 className="text-2xl lg:text-3xl text-black mt-10 md:mt-20 mb-4">
            Hi, I am <span className="text-violet-600 font-bold">Fahad</span>{" "}
            Khakwani{" "}
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            I Create <span className="text-violet-600">Websites</span> for
            brands, <span className="text-violet-600">Applications</span> with
            optimization
          </h2>
          <h3 className="text-md md:text-lg lg:text-xl font-thin text-black mt-4 leading-relaxed">
            Web & App Developer. <br />
            UI / UX Developer. <br />I focus on: Building scalable and
            fast-loading web applications. Ensuring mobile-first, fully
            responsive designs across devices. Seamless integration of advanced
            UI frameworks for a smooth user experience. Leveraging Next.js for
            server-side rendering and SEO optimization to drive business
            results.
          </h3>
          <Button className="rounded-md bg-violet-600 hover:bg-violet-400 h-10 md:h-12 w-24 md:w-28 mt-8 md:mt-10 text-white">
            Get in Touch
          </Button>
        </div>

        <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-10 md:mt-0">
          <Image
            className="rounded-xl object-cover"
            src={Profile}
            alt="Portfolio Image"
            width={400}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}
