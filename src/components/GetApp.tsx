import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

const GetApp = () => {
    return (
        <section id="get_app" className="container_width">
            <div className="lg:mx-10 lg:px-10 relative z-20 bg-[url('/pattern.png')] bg-center bg-cover pt-15 pb-11 lg:max-h-[550px] overflow-hidden lg:rounded-3xl flex flex-col sm:flex-row items-center lg:justify-between gap-17">
                <motion.div
                    className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left px-2.5 lg:px-10 sm:pl-10 sm:min-w-[370px] lg:min-w-[500px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-gray-50 font-bold text-3xl lg:text-4xl sm:w-[85%]">Get For Free Now!</h2>
                    <motion.p
                        className="text-[16.5px] text-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Available on ios and android, download now!
                    </motion.p>
                    <motion.div
                        className="flex flex-col lg:flex-row gap-2 mt-5 w-full max-w-[270px] sm:max-w-[240px] lg:max-w-[fit-content] sm:mt-7 lg:mt-9 sm:w-[240px] lg:w-[fit-content]"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <Button
                                icon="/apple.svg"
                                title="Download App"
                                variant="apple"
                                type="button"
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        >
                            <Button
                                icon="/android.svg"
                                title="Download App"
                                variant="android"
                                type="button"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="sm:pr-10"
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image
                        src="/phones.png"
                        alt="get app"
                        width={550}
                        height={870}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default GetApp;