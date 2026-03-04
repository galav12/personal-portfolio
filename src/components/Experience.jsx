import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const experience = [
    {
        title: "Software Engineering Intern",
        company: "KPIT Technologies Inc.",
        logo: "kpit.png",
        dates: "Jun 2025 - Aug 2025",
        description: [
            "Developed a scalable, Python-based validation pipeline on AWS (EC2, S3) supporting diverse end-to-end autonomous driving stacks built on AI and neural networks, enabling consistent, efficient, and automated large-scale testing.",
            "Automated end-to-end and component level evaluations using KPI-driven metrics, visual diagnostics, and RMSE-based pass/fail logic.",
            "Delivered production-ready system reducing manual effort by 30%, enhancing reliability, consistency, and debuggability of testing workflows.",

        ],
    },
    {
        title: "Software Engineering Intern",
        company: "KPIT Technologies Inc.",
        logo: "kpit.png",
        dates: "Jun 2024 - Aug 2024",
        description: [
            "Reverse engineered AD stack’s LiDAR detection code to develop a 3D object detection model, enhancing point cloud data accuracy.",
            "Optimized object detection model to improve accuracy to over 80% through extensive testing and performance evaluation.",
            "Integrated object detection model with Carla Simulator, implementing 2D and 3D bounding box visualization, creating an advanced simulation environment with enhanced object detection capabilities.",
        ]
    },
    {
        title: "Software Intern",
        company: "Peppermint Robotics",
        logo: "peppermint.png",
        dates: "Jul 2023 - Oct 2023",
        description: [
            "Built a mobile application for the Peppermint Services platform, using Flutter with teleoperational functionality to enable remote control of a robot over Wi-Fi in a distributed system.",
            "Implemented real-time communication using WebSockets and ROS2 Rosbridge for secure transmission of control and sensor data.",
            "Developed a Dart frontend focused on reliability and low-latency interaction.",
        ]
    },
    {
        title: "Software Intern",
        company: "Carimus",
        logo: "carimus.png",
        dates: "Dec 2021 - Jan 2022",
        description: [
            "Delivered a detailed report on data-driven recommendations to improve the functionality and performance of JouleBug Enterprise and JouleBug based on comprehensive market research and analysis.",
            "Conducted research related to automation workflows of engagement, referral, and analysis of social sharing.",
            "Contributed to the development of gamification features using React JS, enhancing the application's user experience.",
        ]
    },
];

export const Experience = () => {
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);
    const sectionInView = useInView(sectionRef, { amount: 0.2 });

    useEffect(() => {
        if (!sectionInView && scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [sectionInView]);

    return (
        <section ref={sectionRef} className="container pt-25 pb-10 overflow-y-hidden mx-auto px-4 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Work Experience</h2>

            <div ref={scrollRef} className="flex flex-col overflow-y-auto overflow-x-hidden hide-scrollbar border-l-2 border-primary mx-auto max-w-[90%] gap-12">
                {experience.map((item, index) => {
                    const isLeft = index % 2 === 1;
                    const ref = useRef(null);
                    const fullyInView = useInView(ref, { amount: 0.4 });

                    return (
                        <motion.div
                            ref={ref}
                            key={index}
                            className={`flex flex-col justify-between items-center px-5 w-full ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            animate={{
                                opacity: fullyInView ? 1 : 0,
                                x: fullyInView ? 0 : isLeft ? -50 : 50,
                            }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        // viewport={{once: true}}
                        >
                            <div className="flex md:hidden m-10 z-10 items-center justify-center overflow-hidden bg-primary border-4 border-background rounded-full w-16 h-16 shadow-lg">
                                <img
                                    src={item.logo}
                                    alt={`${item.company} logo`}

                                    className="w-14 h-14 object-contain"
                                />
                            </div>

                            <div
                                className={`bg-card p-6 rounded-md shadow-lg md:max-w-[90%] relative text-left ${isLeft ? "md:mr-8" : "md:ml-8"
                                    }`}
                            >
                                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                                <h4 className="text-primary font-semibold mb-2">{item.company}</h4>
                                <p className="text-primary font-mono mb-4">{item.dates}</p>
                                <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                                    {item.description.map((item, idx) => (
                                        <li key={idx}><span>{item}</span></li>
                                    ))}
                                </ul>

                                <div
                                    className={`hidden md:flex absolute top-6 w-4 h-4 bg-card rotate-45 ${isLeft ? "-right-2" : "-left-2"
                                        }`}
                                    style={{ boxShadow: "1px 1px 3px rgba(0,0,0,0.1)" }}
                                />
                            </div>

                            <div className="flex-shrink-0 hidden md:flex m-10 z-10 items-center justify-center overflow-hidden bg-primary border-4 border-background rounded-full w-16 h-16 shadow-lg">
                                <img
                                    src={item.logo}
                                    alt={`${item.company} logo`}

                                    className="w-14 h-14 object-contain"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
