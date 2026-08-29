import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiGithub,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-500" />,
    description:
      "Semantic and accessible structure for modern web applications.",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    description:
      "Responsive layouts, modern styling, and polished user interfaces.",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    description:
      "Modern JavaScript for interactive interfaces and application logic.",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400" />,
    description:
      "Building reusable components and dynamic frontend applications.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    description:
      "Creating responsive and scalable user interfaces efficiently.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    description:
      "Building scalable backend services and server-side applications.",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-white" />,
    description:
      "Developing RESTful APIs and backend application architecture.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    description: "Designing and managing flexible NoSQL databases.",
  },
  {
    name: "Mongoose",
    icon: <SiMongoose className="text-red-500" />,
    description: "Modeling MongoDB data and managing database relationships.",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-400" />,
    description: "Working with relational databases and structured data.",
  },
  {
    name: "REST APIs",
    icon: <FaNodeJs className="text-green-400" />,
    description:
      "Designing and consuming APIs for frontend and backend communication.",
  },
  {
    name: "JWT Authentication",
    icon: <SiJsonwebtokens className="text-pink-400" />,
    description:
      "Implementing secure authentication and protected application routes.",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
    description: "Version control and organized development workflows.",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white" />,
    description:
      "Managing repositories, collaboration, and project development.",
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-400" />,
    description: "Testing and debugging REST APIs during backend development.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern full-stack web
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{skill.icon}</div>

                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
