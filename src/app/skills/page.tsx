import React from "react";
import { Progress } from "@/components/ui/progress"; // Progress is from ShadCN UI
import Image from "next/image";
import Icon1 from "@/app/images/product-chain 1.png";
import Icon2 from "@/app/images/tag 1.png";
import Icon3 from "@/app/images/feather-pen 1.png";
import Icon4 from "@/app/images/html-tag 1.png";

const Skills = () => {
  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <section className="mt-20 max-h-max">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-10">My Skills</h1>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto py-8 px-4 text-zinc-500">
        <h2 className="text-xl md:text-2xl text-center mb-12">
          Proficiency in Various Languages
        </h2>

        <div className="space-y-6 text-violet-600">
          {/* HTML5*/}
          <div>
            <p className="text-lg md:text-lg mb-2 ">HTML</p>
            <Progress value={70} className="w-full md:w-2/3 mx-auto" />
          </div>

          {/*Javascript & TypeScript*/}
          <div>
            <p className="text-lg md:text-lg mb-2">Javascript / TypeScript</p>
            <Progress value={80} className="w-full md:w-2/3 mx-auto" />
          </div>

          {/*CSS & Tailwind CSS*/}
          <div>
            <p className="text-lg md:text-lg mb-2">CSS / Tailwind CSS</p>
            <Progress value={75} className="w-full md:w-2/3 mx-auto" />
          </div>
          {/* Next.js*/}
          <div>
            <p className="text-lg md:text-lg mb-2">Next.js / React</p>
            <Progress value={80} className="w-full md:w-2/3 mx-auto" />
          </div>

          {/* Next.js using Figma */}
          <div>
            <p className="text-lg md:text-lg mb-2">Figma to Next.js</p>
            <Progress value={90} className="w-full md:w-2/3 mx-auto" />
          </div>
        </div>

      {/* Expertise */}
      </section>
      <section className="mt-20 max-h-max">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-10">My Expertise</h1>
      </section>

      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex flex-col justify-between m-1 p-6 rounded-lg bg-blue-50 w-64 sm:w-64 h-60">
          <div className="flex items-center space-x-2">
            <Image src={Icon1} alt="Icon" width={48} height={48} />
            <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left">
              Strategy & Direction
            </h2>
          </div>
          <div className="mt-3 text-sm font-thin text-justify sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            praesentium dolore provident numquam optio, ipsa, animi explicabo
            enim repellendus vel eos.
          </div>
        </div>

        <div className="flex flex-col justify-between m-1 p-6 rounded-lg bg-blue-50 w-64 sm:w-64 h-60">
          <div className="flex items-center space-x-2">
            <Image src={Icon2} alt="Icon" width={48} height={48} />
            <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left">
              Website & Application
            </h2>
          </div>
          <div className="mt-3 text-sm font-thin text-justify sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            praesentium dolore provident numquam optio, ipsa, animi explicabo
            enim repellendus vel eos.
          </div>
        </div>

        <div className="flex flex-col justify-between m-1 p-6 rounded-lg bg-blue-50 w-64 sm:w-64 h-60">
          <div className="flex items-center space-x-2">
            <Image src={Icon3} alt="Icon" width={48} height={48} />
            <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left">
              UI & UX Design
            </h2>
          </div>
          <div className="mt-3 text-sm font-thin text-justify sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            praesentium dolore provident numquam optio, ipsa, animi explicabo
            enim repellendus vel eos.
          </div>
        </div>

        <div className="flex flex-col justify-between m-1 p-6 rounded-lg bg-blue-50 w-64 sm:w-64 h-60">
          <div className="flex items-center space-x-2">
            <Image src={Icon4} alt="Icon" width={48} height={48} />
            <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left">
              Webflow Development
            </h2>
          </div>
          <div className="mt-3 text-sm font-thin text-justify sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            praesentium dolore provident numquam optio, ipsa, animi explicabo
            enim repellendus vel eos.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
