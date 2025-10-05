"use client";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="section container_width">
            <div className="relative lg:mx-10 min-h-screen bg-gradient-to-b from-white from-25% to-amber-100 to-100% flex flex-col justify-center lg:flex-row gap-25 lg:gap-25 lg:justify-start lg:items-center sm:gap-22 py-15 pt-15 lg:pt-12">
                <div className="px-3 lg:px-10 relative z-20 flex flex-col gap-2 sm:gap-5 justify-center items-center text-center lg:text-left lg:items-start sm:!w-[470px] mx-auto lg:mx-0 lg:!w-1/2">
                    <div className="flex flex-col gap-2 items-center lg:items-start w-[85%] sm:!w-[70%] lg:!w-full max-w-[430px]">
                        <Image
                            src="/camp.svg"
                            alt="camp"
                            width={48}
                            height={48}
                        />
                        <h1 className="font-black text-4xl lg:text-5xl lg:leading-[3.5rem] text-black">Adventure Awaits With Us</h1>
                    </div>
                    <p className="text-gray-800 text-[16px]">Discover the world’s untouched beauty with ease. From hidden gems to breathtaking landmarks, our app makes every journey simple, inspiring, and unforgettable.</p>
                    <div className="mb-7 flex items-center gap-2">
                        <span className="flex">
                            {
                                Array(5).fill(0).map((_, i) => (
                                    <Image key={i} src="/star.svg" alt="rating" width={22} height={22} />
                                ))
                            }
                        </span>
                        <span className="flex items-end gap-2">
                            <p className="font-bold text-[16.5px] text-black">198k</p>
                            <p className="font-heading underline text-[16px]">Good Reviews</p>
                        </span>
                    </div>
                    <div className="px-5 sm:!px-15 lg:!px-0 w-full max-w-[300px] sm:max-w-[370px] lg:max-w-[fit-content] flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-2.5 sm:w-[370px] lg:w-[fit-content]">
                        <a href="#get_app" className="cursor-pointer">
                            <Button
                                type="button"
                                title="Download App"
                                variant="dark_green"
                            />
                        </a>
                        <div onClick={() => { alert("This is just a demo") }}>
                            <Button
                                type="button"
                                title="How we work"
                                variant="white_color"
                                icon="/play.svg"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="absolute z-10 top-0 left-0 bg-[url('/hero-bg.svg')] bg-cover bg-center bg-no-repeat w-full h-full"></div>
                    <div className="relative">
                        <Image src="/hero-bg.svg" alt="hero" width={30} height={30} className="sm:hidden absolute top-0 z-20 w-full" />
                        <div className="animate-[float_3s_ease-in-out_infinite] w-[fit-content] translate-x-10 sm:translate-x-[400px] lg:translate-x-0 relative z-20 rounded-2xl flex flex-col gap-2 px-4 py-6 pt-4 bg-gray-950">
                            <div className="flex justify-between items-start">
                                <span className="flex flex-col">
                                    <p className="text-gray-400 text-[12px] lg:text-[13px]">Location</p>
                                    <p className="text-gray-200 font-semibold text-[14px] lg:text-[15px] font-heading">Aguas Calientes</p>
                                </span>
                                <Image src="/close.svg" alt="close" width={20} height={20} />
                            </div>
                            <div className="flex gap-7">
                                <span className="flex flex-col">
                                    <p className="text-gray-400 text-[12px] lg:text-[13px]">Distance</p>
                                    <p className="text-gray-200 font-semibold text-[14px] lg:text-[15px] font-heading">173.28 mi</p>
                                </span>
                                <span className="flex flex-col">
                                    <p className="text-gray-400 text-[12px] lg:text-[13px]">Elevation</p>
                                    <p className="text-gray-200 font-semibold text-[14px] lg:text-[15px] font-heading">2.040 km</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero