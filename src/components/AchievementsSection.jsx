import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon Finalist",
    description:
      "As a team lead, I guided my team to become finalists in the Smart India Hackathon (SIH). Our project focused on an AI-based career counseling platform, where I contributed to the website's frontend development",
    date: "December 2023",
    certUrl:
      "https://drive.google.com/file/d/10loGBA0b-0sb7QAhL0exoeWFrnNZwRtf/view?usp=sharing",
  },
  {
    id: 2,
    title: "NPTEL Java Certification",
    description:
      "I successfully completed the 'Programming in Java' course on the Swayam NPTEL platform, earning a certification that validates my proficiency in Java development.",
    date: "Jan 2024",
    certUrl:
      "https://drive.google.com/file/d/1Vv8HKOAcnw5I-cTX_6BKg2pUHtG5OnJs/view?usp=sharing",
  },
  {
    id: 3,
    title: "Digital Fabrication Lab (Fab Lab)",
    description:
      "As a member of the Fab Lab, I gained hands-on experience with various technologies. I worked on diverse modules including web designing, 3D printing, laser cutting, and PCB designing",
    date: "june 2024",
    certUrl: "https://example.com/certificate3.pdf",
  },
];

export const AchievementsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".timeline-item");
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-24 px-4 relative" ref={sectionRef}>
      <div className="relative z-10 container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          My{" "}
          <span className="text-purple-400">
            Achievements and Certificatons
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          A timeline of my milestones, awards, and certifications.
        </p>

        {/* --- Corrected Timeline with Hover Effects --- */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-700/50 hidden md:block"></div>

          {achievements.map((achievement, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={achievement.id} className="relative mb-12">
                {/* Dot on the Center Line */}
                <span className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-lg border-2 border-[#0a0a1a]"></span>

                {/* Card Container */}
                <div
                  className={`timeline-item w-full md:w-[calc(50%-2rem)] transition-all duration-700 ease-out opacity-0 transform translate-y-8
 ${isLeft ? "md:mr-auto" : "md:ml-auto"}
 `}
                >
                  {/* Card with Hover Effects */}
                  <div className="bg-[#11111f]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-purple-500">
                    <h3 className="text-xl font-semibold text-white">
                      {achievement.title}
                    </h3>
                    <span className="text-xs text-gray-400 block mb-3">
                      {achievement.date}
                    </span>
                    <p className="text-gray-300 text-sm mb-4">
                      {achievement.description}
                    </p>
                    <a
                      href={achievement.certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:underline"
                    >
                      View Certificate <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
