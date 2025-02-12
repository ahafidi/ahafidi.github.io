import Image from "next/image";

export default function Description() {
  return (
    <section className="text-center">
      <div className="flex justify-center mb-12">
        <Image
          className="inline-block rounded-full h-80 w-80 ring-2 ring-white"
          src="/assets/profile.png"
          alt="Profile picture"
          width={2048}
          height={1664}
        />
      </div>
      <h6 className="block mb-8 text-lg font-medium text-black lg:hidden md:text-2xl dark:text-white">
        Abdelhafid HAFIDI / <span className="arabic">عبدالحفيظ حفيظي</span>
      </h6>
      <h1 className="mb-8 text-4xl font-normal leading-none text-gray-900 md:text-4xl dark:text-white">
        Software Engineer
      </h1>
      <p className="mx-5 font-normal text-gray-600 md:mb-16 md:mx-28 text-md md:text-xl dark:text-gray-300">
        Driven by a profound passion for software and AI, I specialize in
        developing innovative solutions that prioritize user experience and data
        security. With a focus on simplifying processes and fostering
        empowerment, my work resonates at the intersection of technology and
        human-centric design in the digital era.
      </p>
      <div className="flex flex-wrap justify-center my-20 gap-y-5 gap-x-7">
        <Image
          className="inline-block w-20 h-20 rounded-md grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/js.svg"
          alt="Javascript"
          title="Javascript"
        />
        <Image
          className="inline-block w-20 h-20 grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/ts.svg"
          alt="Typescript"
          title="Typescript"
        />
        <Image
          className="inline-block w-20 h-20 grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/react.svg"
          alt="React"
          title="React"
        />
        <Image
          className="inline-block w-20 h-20 grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/tailwind.svg"
          alt="Tailwind"
          title="Tailwind"
        />
        <Image
          className="inline-block w-20 h-20 grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/nextjs.svg"
          alt="Next.js"
          title="Next.js"
        />
        <Image
          className="inline-block w-20 h-20 grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/nodejs.svg"
          alt="Node.js"
          title="node.js"
        />
        <Image
          className="inline-block w-20 h-20 grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/supabase.svg"
          alt="Supabase"
          title="Supabase"
        />
        <Image
          className="inline-block w-20 h-20 grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/git.svg"
          alt="Git"
          title="Git"
        />
        <Image
          className="inline-block w-20 h-20 grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/cyberark.svg"
          alt="CyberArk"
          title="CyberArk"
        />
        <Image
          className="inline-block w-20 h-20 grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/python.svg"
          alt="Python"
          title="Python"
        />
        <Image
          className="inline-block w-20 h-20 grayscale hover:grayscale-0"
          width={80}
          height={80}
          src="/assets/pytorch.svg"
          alt="PyTorch"
          title="PyTorch"
        />
      </div>
    </section>
  );
}
