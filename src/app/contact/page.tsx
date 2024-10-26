import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Title */}
      <div className="w-full flex justify-center mt-20 h-20">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-0">
          Contact Me
        </h1>
      </div>

      {/* Subtitle */}
      <div className="flex justify-center h-20 text-zinc-600 mb-4">
        <h2 className="text-center text-lg px-4">
          Please feel free to contact me if you have any questions
        </h2>
      </div>

      {/* Form Fields */}
      <div className="w-full max-w-xl flex flex-wrap gap-4 justify-center md:justify-between">
        <Input
          className="w-full md:w-[48%] text-md text-lime-600"
          type="text"
          placeholder="First name"
        />
        <Input
          className="w-full md:w-[48%] text-md text-lime-600"
          type="text"
          placeholder="Last name"
        />
        <Input
          className="w-full md:w-[48%] text-md text-blue-600"
          type="email"
          placeholder="Email"
        />
        <Input
          className="w-full md:w-[48%] text-md text-lime-600"
          type="number"
          placeholder="Contact #"
        />
        <Textarea
          className="w-full text-md text-zinc-500"
          inputMode="text"
          placeholder="Please write your requirements and feedback..."
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <Button className="rounded-lg h-12 px-8 text-lg bg-blue-600 hover:bg-green-500">
          Submit
        </Button>
      </div>
    </div>
  );
}
