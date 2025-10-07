import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureProps {
    icon: string,
    title: string,
    description: string,
    icon_alt: string
};

const Features_Comp = ({ icon, title, description, icon_alt }: FeatureProps) => {
    return (
        <motion.div
            className="text-center sm:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="sm:flex sm:items-center sm:gap-2 lg:block">
                <div className="w-[fit-content] bg-gradient-to-b from-gray-400 from-25% to-gray-700 to-100% p-2.5 rounded-full m-auto sm:m-0">
                    <Image
                        src={icon}
                        alt={icon_alt}
                        width={19}
                        height={19}
                    />
                </div>
                <h3 className="font-bold sm:max-w-[470px] mx-auto text-[21px] my-1 text-gray-800 px-8 sm:px-0 sm:pr-10">{title}</h3>
            </div>
            <p className="text-[16.5px] sm:max-w-[470px] mx-auto text-gray-700">{description}</p>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section className="relative container_width h-[fit-content] py-15 lg:py-20">
            <div className="lg:mx-10">
                <div className="absolute h-full">
                    <Image
                        src="/feature-bg.png"
                        alt="features"
                        width={1080}
                        height={800}
                        className="h-full"
                    />
                </div>

                <div className=" px-3 lg:px-0 lg:flex lg:justify-between lg:gap-10 lg:items-center">
                    <motion.div
                        className="bg-[#19aa5516] relative z-20 hidden lg:block rounded-3xl"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/phone.png"
                            alt="camp"
                            width={350}
                            height={200}
                            className="rotate-10 bg-[#f2995134] rounded-3xl"
                        />
                    </motion.div>
                    <div>
                        <motion.div
                            className="relative z-20 px-3 lg:px-0 mb-7 sm:mb-10 lg:mb-8 sm:max-w-[400px] mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-center lg:text-left text-[#EC5815]">Our Features</h2>
                        </motion.div>
                        <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-6 px-5 sm:px-8 lg:px-0">
                            <Features_Comp
                                icon="/map.svg"
                                icon_alt="map"
                                title="Real Maps Can Be Offline"
                                description="We provide a solution for you to be able to use our application when climbing. Yes, offline maps you can use any time there is no signal at the location."
                            />
                            <Features_Comp
                                icon="/calendar.svg"
                                icon_alt="calendar"
                                title="Set an Adventure Schedule"
                                description="Schedule an adventure with friends. On holidays, there are many interesting offers from Travel for you to select your choicest and live the experience."
                            />
                            <Features_Comp
                                icon="/tech.svg"
                                icon_alt="tech"
                                title="Techonology Using Augmented Reality"
                                description="Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection."
                            />
                            <Features_Comp
                                icon="/location.svg"
                                icon_alt="location"
                                title="Many New Locations Every Month"
                                description="Lots of new locations every month because we have a community of climbers who share their best experiences with climbing"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features