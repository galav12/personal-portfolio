import { ArrowBigDown } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section>
            
            <div className="container max-w-xl mx-auto text-center z-10">
                <div className="absolute flex left-1/2 -translate-1/2 w-[75%] max-h-[80%] md:h-[60%]">

                    <motion.div className="flex md: flex-col md:flex-row w-[100%] h-[100%] rounded-2xl border-2 border-foreground"
                        initial={{ scaleY: 0, transformOrigin: "center" }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ type: "spring", duration: 2, delay: 0.3 }}
                    // viewport={{once: true}}
                    >
                        <div className="flex flex-col w-[60%] space-y-6 text-left py-6 px-6 md:px-15 mx-auto my-auto">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                <motion.span initial={{ opacity: 0, translateY: "20px" }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7, delay: 1 }}>Hi,</motion.span>
                            </h1>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                                <motion.span className="text-glow" initial={{ opacity: 0, translateY: "20px" }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7, delay: 1.2 }}>I'm </motion.span>
                                <motion.span className="text-glow text-primary" initial={{ opacity: 0, translateY: "20px" }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7, delay: 1.2 }}>Galav Sharma</motion.span>
                            </h1>

                            <p className="text-md md:text-xl text-muted-foreground max-w-2xl mt-3 md:mt-15 mx-auto">
                                <motion.span className="text-glow" initial={{ opacity: 0, translateY: "20px" }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7, delay: 1.8 }}>I build technology that makes life easier, turning ambitious ideas into solutions using AI, robotics, and full-stack technologies.</motion.span>
                            </p>

                        </div>
                        <motion.div className="flex space-y-6 mx-auto my-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 2 }}
                        >
                            <div>
                                <img
                                    src="me.png"
                                    alt="Galav Sharma"
                                    className="rounded-md mt-4 object-contain h-[55vh] max-md:h-[30vh]"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-1/2 flex flex-col items-center animate-bounce">
                    <ArrowBigDown className="h-5 w-5 text-primary" />
                </div>
            </div>
        </section>
    )
};
