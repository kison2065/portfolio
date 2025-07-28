import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Aama ko achar",
    description: "Best place to buy achar.",
    image: "/public/aama-ko-achar.png",
    url: "https://www.aamakoachar.com/",
  },
  {
    id: 2,
    title: "Masta kala",
    description: "Best place to buy gift.",
    image: "/public/masta-kala.png",
    url: "https://mastakala.com/",
  },
  {
    id: 3,
    title: "Trendy corner",
    description: "Best place to buy trendy clothes.",
    image: "/public/trendy-clothes.png",
    url: "https://trendycornerbd.com/",
  },
  {
    id: 4,
    title: "Moosto",
    description: "Best place to buy home items.",
    image: "/public/moosto.png",
    url: "https://moosto.com/",
  },
  {
    id: 5,
    title: "SmartDoko",
    description: "Best place to buy items.",
    image: "/public/smartDoko.png",
    url: "https://smartdoko.com/",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const copyEmail = () => {
    navigator.clipboard.writeText("kkison23@gmail.com").then(() => {
      alert("Email copied to clipboard: kkison23@gmail.com");
    });
  };

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable cursor on mobile
    const moveCursor = (e) => {
      const cursor = document.querySelector("#custom-cursor");
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Cursor */}
      <div
        id="custom-cursor"
        className="hidden md:block fixed w-5 h-5 bg-black rounded-full z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Background Animation */}
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-cyan-200 via-pink-100 to-yellow-200"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow px-4 py-4 flex flex-wrap justify-center gap-4 sm:gap-8 font-semibold text-base w-full">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans text-gray-900">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 tracking-wide">
            Kison's Personal Website
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            Frontend Developer & React Enthusiast
          </p>
        </motion.header>

        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 bg-white p-6 sm:p-8 rounded-xl shadow-xl text-base sm:text-lg leading-relaxed"
        >
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>
            Hi, I'm Kison! I enjoy creating beautiful and interactive web
            applications using React. I am passionate about learning new
            technologies, improving my skills, and building projects that solve
            real problems.
          </p>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(({ id, title, description, url, image }) => (
              <motion.a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="block bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition duration-300"
              >
                {image && (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>{description}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg mb-4">Feel free to reach out via email or LinkedIn!</p>
          <div className="flex justify-center flex-wrap gap-4">
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Copy Email
            </motion.button>
            <motion.a
              href="https://www.linkedin.com/in/kisonkhadka/"
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-16 pb-6">
          © 2025 Kison. All rights reserved.
        </footer>
      </div>
    </>
  );
}
