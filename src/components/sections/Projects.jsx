import { RevealOnScroll } from "../RevealOnScroll";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 roundend-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-gray-400 mb-4">
                Scalable clud infrastructure management with real-time
                monitoring and automated scaling.
                Scalable clud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div>
                {["React", "Node.js", "SQL", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                     "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-10"
                >


                  View Project ➡️ <i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
            <div className="p-6 roundend-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Electronic Central Control
              </h3>
              <p className="text-gray-400 mb-4">
                A web-based platform that helps professors manage exams, control
                subjects, and organize schedules efficiently. It streamlines
                exam planning, subject assignments, and scheduling, making
                academic administration smoother and more organized.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Html", "Css", "JavaScript", "Php"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                     "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️<i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
            <div className="p-6 roundend-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">TaskFlow</h3>
              <p className="text-gray-400 mb-4">
                A simple and intuitive to-do list app designed to help users
                organize tasks, set priorities, and stay productive. With a
                clean interface and efficient task management, TaskFlow makes
                planning and tracking daily activities effortless.
              </p>
              <div>
                {["React", "Node.js", "SQL", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                     "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️ <i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
            <div className="p-6 roundend-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">SkyCast</h3>
              <p className="text-gray-400 mb-4">
                A sleek and accurate weather app that provides real-time
                forecasts, temperature updates, and weather alerts. SkyCast
                helps users stay prepared for any weather conditions with an
                intuitive and user-friendly interface.
              </p>
              <div>
                {["React", "Node.js", "SQL", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                     "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️<i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
