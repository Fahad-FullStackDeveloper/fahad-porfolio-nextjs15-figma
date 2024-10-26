import Image from "next/image";
import AboutMe from "@/app/images/About Me.png";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:p-10 lg:px-20 lg:py-10 space-y-6 md:space-y-0 md:space-x-6">
      {/* Image Section */}
      <div className="relative w-full md:w-2/5 lg:w-2/5 flex justify-center pt-20">
        <Image
          className="rounded-xl object-cover w-full h-auto"
          src={AboutMe}
          alt="Portfolio Image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left md:w-3/6 lg:w-3/6">
        <h1 className="text-3xl md:text-5xl font-bold text-black mt-36 mb-8">
          About Me
        </h1>
        <p className="text-base md:text-lg lg:text-lg font-thin text-black leading-relaxed">
          I am a dedicated web and app developer with extensive experience in
          <span className="text-violet-600 font-semibold underline">
            {" "}
            Next.js, Tailwind CSS, and modern UI
          </span>{" "}
          frameworks. I specialize in creating responsive, high-performance
          websites and applications that offer intuitive user experiences and
          cutting-edge design.
          <br />
          <br />
          My expertise allows me to efficiently handle the full development
          process—from conceptualization to deployment—ensuring that each
          project meets client goals and exceeds expectations.
          <br />
          <br />
          Leveraging the power of Next.js for server-side rendering and SEO
          optimization, combined with Tailwind CSS for streamlined styling, I
          focus on delivering fast and visually appealing projects. Whether you
          need a sleek portfolio, an e-commerce platform, or a fully functional
          app, I have the skills and experience to bring your vision to life.
          <br />
          <br />
          <span className="font-semibold">
            Feel free to share your project requirements, and let’s discuss how
            can I help you to achieve your goals!
          </span>
        </p>
      </div>
    </div>
  );
}
