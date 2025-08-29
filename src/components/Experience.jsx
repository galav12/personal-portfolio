import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const experience = [
    {
        title: "Software Engineering Intern",
        company: "KPIT Technologies Inc.",
        logo: "kpit.png",
        dates: "Jun 2025 - Aug 2025",
        description: [
            "Developed a scalable, flexible validation pipeline supporting diverse end-to-end autonomous driving stacks and datasets, enabling consistent, efficient, and automated large-scale testing.",
            "Automated evaluation at both end-to-end and component levels using KPI-driven metrics, visual outputs, and RMSE-based pass/fail metrics.",
            "Delivered a production-ready system that reduced manual effort, enhanced reliability and provided actionable insights for data-driven debugging.",

        ],
    },
    {
        title: "Software Engineering Intern",
        company: "KPIT Technologies Inc.",
        logo: "kpit.png",
        dates: "Jun 2024 - Aug 2024",
        description: [
            "Reverse engineered AD stack's LiDAR detection code to develop a 3D object detection model, enhancing accuracy with point cloud data.",
            "Optimized object detection model to substantially improve accuracy and efficiency through extensive testing and performance evaluation.",
            "Integrated object detection model with Carla Simulator, implementing 2D and 3D bound box visualization, creating an advanced simulation environment with integrated object detection capabilities.",
        ]
    },
    {
        title: "Software Intern",
        company: "Peppermint Robotics",
        logo: "peppermint.png",
        dates: "Jul 2023 - Oct 2023",
        description: [
            "Designed and developed a mobile application for the Peppermint Services platform, using Flutter with Tele-Operational functionality to enable remote control of a robot over Wi-Fi.",
            "Developed a user-friendly Dart-based frontend and implemented WebSockets for real-time communication between the app and the robot.",
            "Utilized ROS2 Rosbridge to facilitate secure transmission of control commands and sensor data between the app and the robot.",
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

            <div ref={scrollRef} className="flex flex-col overflow-y-auto hide-scrollbar border-l-2 border-primary mx-auto max-w-[90%] gap-12">
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
