import React from "react";
import RajPhoto from "../assets/RajPhoto.jpeg";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Hey there, I'm Raj
          </h2>
          <p className="mb-4">
            I am a passionate Frontend Developer with a strong background in
            creating user-friendly web applications. With almost a year of
            professional experience, I have honed my skills in HTML, CSS,
            JavaScript, ReactJS, and several other web technologies. My work
            primarily focuses on designing and optimizing user interfaces that
            provide seamless and enjoyable user experiences.
          </p>
          <h3 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">
            Let’s Connect!
          </h3>
          <p>
            I’m always open to new opportunities and collaborations. If you’re
            interested in working together or if you have any questions, feel
            free to reach out to me through my{" "}
            <a
              href="http://www.linkedin.com/in/raj-shinde21"
              className="text-[#FF3F01]"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={RajPhoto}
            title="That's me"
            alt="Raj Photo"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            title="Honestly, a random photo"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
