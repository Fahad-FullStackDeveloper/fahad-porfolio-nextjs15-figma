// import React from "react";
// import Image from "next/image";
// import Project1 from "@/app/images/projects/Static Resume.png";
// import Project2 from "@/app/images/projects/Dynamic Resume.png";
// import Project3 from "@/app/images/projects/IdCard.png";

// export default function Projects() {
//   return (
//     <div>
//       <header className="mt-20 h-20 flex items-center justify-start text-yellow-600">
//         <h1 className="pl-10 text-6xl">My Projects</h1>
//       </header>
//       <div className="rounded-2xl flex justify-center mt-5 text-2xl font-bold text-center ">
//         <a href="https://hackathons-milestone1.vercel.app/"> Vercel Link: Static Resume <Image src={Project1} alt="Project1: Stactic Resume" className="rounded-3xl w-80 m-10 hover:scale-105 shadow-2xl hover:shadow-purple-800"/></a>
//         <a href="https://hackathons-milestone3.vercel.app/"> Vercel Link: Dynamic Resume <Image src={Project2} alt="Project1: Dynamic Resume" className="rounded-3xl w-96 m-10 hover:scale-105 shadow-2xl hover:shadow-purple-800"/></a>
//         <a href="https://class-student-id-card.vercel.app/">Vercel Link: GIAIC ID Card<Image src={Project3} alt="Project1: Student ID Card" className="rounded-3xl w-80 m-10 hover:scale-105 shadow-2xl hover:shadow-purple-800"/></a>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Project1 from "@/app/images/projects/Static Resume.png";
import Project2 from "@/app/images/projects/Dynamic Resume.png";
import Project3 from "@/app/images/projects/Id Card.png";
import Project4 from "@/app/images/projects/Portfolio Website.png";

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="mt-20 max-h-max">
        <h1 className="text-3xl md:text-5xl font-bold text-black mt-20 mb-10">My Projects</h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* Project Card 1 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
          <Link href="https://hackathons-milestone1.vercel.app/">
            <Image
              src={Project1}
              alt="Static Resume Project"
              className="rounded-lg shadow-md"
              width={320}
              height={400}
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              Static Resume
            </h2>
            <p className="text-purple-600 mt-2">Vercel Link</p>
          </Link>
        </div>

        {/* Project Card 2 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
          <Link href="https://hackathons-milestone3.vercel.app/">
            <Image
              src={Project2}
              alt="Dynamic Resume Project"
              className="rounded-lg shadow-md"
              width={320}
              height={400}
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              Dynamic Resume
            </h2>
            <p className="text-purple-600 mt-2">Vercel Link</p>
          </Link>
        </div>

        {/* Project Card 3 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
          <Link href="https://class-student-id-card.vercel.app/">
            <Image
              src={Project3}
              alt="GIAIC ID Card Project"
              className="rounded-lg shadow-md"
              width={320}
              height={400}
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              GIAIC ID Card
            </h2>
            <p className="text-purple-600 mt-2">Vercel Link</p>
          </Link>
        </div>

        {/* Project Card 4 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
          <Link href="https://fahad-portfolio-nextjs-basic.vercel.app/">
            <Image
              src={Project4}
              alt="Portfolio Project"
              className="rounded-lg shadow-md"
              width={320}
              height={400}
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              First Porfolio
            </h2>
            <p className="text-purple-600 mt-2">Vercel Link</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
