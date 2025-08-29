import { motion } from "framer-motion";

export const About = () => {

    const skills = [
        {
            title: "Programming & Development",
            skills: ["Java", "Python", "C++", "JavaScript", "ReactJS", "AngularJS", "Flutter", "Dart", "Arduino"],
        },
        {
            title: "Tools & Frameworks",
            skills: ["Git", "Docker", "SQL", "REST APIs", "ROS2 Rosbridge", "Automated Testing & Validation", "Carla Simulator", "Websockets", "Bazel"],
        },
        {
            title: "Specialized Expertise",
            skills: ["Artificial Intelligence", "Machine Learning", "Robotics", "AD/ADAS Systems", "Simulation Integration", "2D/3D Visualization"],
        },
    ];

    const education = [
        {
            degree: "Master's of Computer Science",
            school: "North Carolina State University",
            logo: "ncsu.png",
            img_sm: "ncsu-long-sm.png",
            img_lg: "ncsu-long-lg.png",
            duration: "August 2025 - May 2026",
            description: " ",
        },
        {
            degree: "Bachelor's of Computer Science, Artificial Intelligence Concentration",
            school: "North Carolina State University",
            logo: "ncsu.png",
            img_sm: "ncsu-long-sm.png",
            img_lg: "ncsu-long-lg.png",
            duration: "August 2021 - May 2025",
            description: "•	Graduated Suma Cum Laude in Computer Science: Artificial Intelligence Concentration with 3.98 GPA. Mentioned in Dean’s List.",
        },
    ];

    return (
        <section className="h-[80%] flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center shrink-0">
                About Me
            </h2>
            <div className="flex-1 overflow-y-auto hide-scrollbar">
                <div className="container mx-auto max-w-[85%]">
                    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-start pr-2">
                        <div className="h-auto space-y-6">
                            <h3 className="text-primary text-2xl font-semibold text-left">
                                <motion.span initial={{ opacity: 0, translateY: "20px" }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>Building intelligent, scalable, and impactful technology across AI, robotics, and software engineering</motion.span>
                            </h3>
                            <p className="text-muted-foreground text-left">
                                <motion.span initial={{ opacity: 0, translateY: "20px" }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>I am a software engineer with a background spanning AI, robotics, full-stack development, and research. I thrive at the intersection of innovation and practicality, turning ambitious ideas into scalable solutions that solve real-world problems. With curiosity, adaptability, and a passion for building technology that makes a difference, I bring both technical depth and creative problem-solving to every project I take on.</motion.span>
                            </p>
                            <h3 className="text-3xl font-semibold mt-5">
                                <motion.span initial={{ opacity: 0, translateY: "20px" }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>Education</motion.span>
                            </h3>
                            <div className="flex lg:hidden flex-col gap-y-6">
                                {education.map((edu, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="gradient-border p-6 rounded-2xl card-hover border-1 border-foreground/20"
                                        initial={{ opacity: 0.5, scale: 0.8, y: 10 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                    >
                                        <div className="flex flex-row justify-center mb-5">
                                            {/* <div className="flex-shrink-0 flex mr-2 z-10 items-center justify-center overflow-hidden bg-white border-1 border-foreground/30 rounded-full w-10 h-10 shadow-lg">
                                                <img
                                                    src={edu.logo}
                                                    alt={`${edu.school} logo`}
                                                    className="w-10 h-10 object-contain"
                                                />
                                            </div>
                                            <h4 className="text-lg md:text-2xl font-semibold mb-3">{edu.school}</h4> */}
                                            <div className="flex md:hidden z-10 items-center justify-center overflow-hidden bg-white rounded-xl px-5 py-1 shadow-lg">
                                                <img
                                                    src={edu.img_sm}
                                                    alt={`${edu.school} logo`}
                                                    className="h-15 object-contain"
                                                />
                                            </div>
                                            <div className="hidden md:flex z-10 items-center justify-center overflow-hidden bg-white rounded-xl px-5 py-1 shadow-lg">
                                                <img
                                                    src={edu.img_lg}
                                                    alt={`${edu.school} logo`}
                                                    className="h-15 object-contain"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-row justify-between">
                                            <p className="text-primary text-sm md:text-base mb-3 items-center">{edu.degree}</p>
                                            <p className="text-muted-foreground text-xs md:text-base  mb-3 items-center">{edu.duration}</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground text-left">
                                            {edu.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="hidden lg:flex flex-col gap-6">
                                {education.map((edu, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="gradient-border p-6 rounded-2xl card-hover border-1 border-foreground/20"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.2 }}
                                    >
                                        <div className="flex flex-row justify-center ">
                                            <div className="flex-shrink-0 hidden md:flex mr-5 z-10 items-center justify-center overflow-hidden bg-white border-1 border-foreground/30 rounded-full w-10 h-10 shadow-lg">
                                                <img
                                                    src={edu.logo}
                                                    alt={`${edu.school} logo`}

                                                    className="w-10 h-10 object-contain"
                                                />
                                            </div>
                                            <h4 className="text-lg md:text-2xl font-semibold mb-3">{edu.school}</h4>
                                        </div>
                                        
                                        <div className="flex flex-row justify-between">
                                            <p className="text-primary text-sm md:text-base mb-3 items-center">{edu.degree}</p>
                                            <p className="text-muted-foreground text-xs md:text-base  mb-3 items-center">{edu.duration}</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground text-left">
                                            {edu.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <h3 className="text-3xl font-semibold">
                                <motion.span initial={{ opacity: 0, translateY: "20px" }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>Skills</motion.span>
                            </h3>
                            <div className="hidden lg:flex flex-col space-y-6">
                                {skills.map((section, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="border-1 border-foreground/20 gradient-border p-3 rounded-2xl card-hover"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.2 }}
                                    >
                                        <h4 className="text-md font-semibold mb-4">{section.title}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {section.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="border-1 border-foreground/20 text-primary text-sm px-3 py-1 rounded-full hover:scale-110"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex flex-col lg:hidden space-y-6">
                                {skills.map((section, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="border-1 border-foreground/20 gradient-border p-3 rounded-2xl card-hover"
                                        initial={{ opacity: 0.5, scale: 0.8, y: 10 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                    >
                                        <h4 className="text-md font-semibold mb-4">{section.title}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {section.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="border-1 border-foreground/20 text-primary text-sm px-3 py-1 rounded-full hover:scale-110"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
