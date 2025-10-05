"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface CampSiteProps {
    image: string,
    title: string,
    subtitle: string,
    people_joined: string
};

const people = ["/person-1.png", "/person-2.png", "/person-3.png", "/person-4.png"];

const CampSite = ({ image, title, subtitle, people_joined }: CampSiteProps) => {
    return (
        <div className="relative text-gray-50 min-w-full lg:min-w-[700px] snap-start">
            <Image src={image} alt="camp site" width={1800} height={1200} className="w-full min-h-[240px] rounded-2xl object-cover" />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2">
                <span className="rounded-full p-2.5 dark_green w-[fit-content] h-[fit-content]">
                    <Image src="/folded-map.svg" alt="map" width={17} height={17} />
                </span>
                <span>
                    <strong className="text-[15px] leading-[1rem]">{title}</strong>
                    <p className="text-gray-200 text-[13px] leading-[1rem] font-heading">{subtitle}</p>
                </span>
            </div>
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex gap-3 items-center">
                <div className="flex -space-x-2.5">
                    {
                        people.map((person, i) => (
                            <Image key={i} src={person} alt="people" width={25} height={25} />
                        ))
                    }
                </div>
                <strong className="text-[13.5px] font-heading">{people_joined}+ Joined</strong>
            </div>
        </div>
    );
};

const Camp = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [touch_start, set_touch_start] = useState<number | null>(null);

    // Button Control
    const scroll = (dir: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;
        const child = container.children[0] as HTMLElement | undefined
        if (!child) return;

        const item_width = child.offsetWidth + 12;
        const new_scroll = dir === "right"
            ? container.scrollLeft + item_width
            : container.scrollLeft - item_width;

        container.scrollTo({ left: new_scroll, behavior: "smooth" });
    };

    // Touch Handlers For Swipe
    const handle_touch_start = (e: React.TouchEvent) => {
        set_touch_start(e.touches[0].clientX);
    };

    const handle_touch_end = (e: React.TouchEvent) => {
        if (touch_start === null) return;
        const touch_end = e.changedTouches[0].clientX;
        const diff = touch_start - touch_end;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                scroll("right");
            } else {
                scroll("left");
            }
        };
        set_touch_start(null);
    };

    return (
        <section className="section container_width py-14 sm:py-17">
            <div className="lg:mx-10">
                <div className="relative">
                    <div className="flex gap-1 justify-end mb-1 px-1 sm:px-3">
                        <button onClick={() => { scroll("left") }} type="button" className="control_btn flex_center">
                            {'<'}
                        </button>
                        <button onClick={() => { scroll("right") }} type="button" className="control_btn flex_center">
                            {'>'}
                        </button>
                    </div>

                    <div className="relative overflow-x-hidden">
                        <div
                            ref={scrollRef}
                            onTouchStart={handle_touch_start}
                            onTouchEnd={handle_touch_end}
                            className="overflow-x-hidden flex gap-3 snap-x snap-mandatory"
                        >
                            <CampSite
                                image="/img-1.png"
                                title="Pima Turf Camp"
                                subtitle="Aris, Panama"
                                people_joined="50"
                            />
                            <CampSite
                                image="/img-2.png"
                                title="Sufa Tora Camp"
                                subtitle="Mentis, Ariel"
                                people_joined="47"
                            />
                            <CampSite
                                image="/img-1.png"
                                title="Coma Rapus Camp"
                                subtitle="Fonda, Costa"
                                people_joined="58"
                            />
                        </div>
                    </div>

                    <article className="relative z-20 mt-4 sm:mt-10 lg:mt-[-70px] px-5 text-center lg:text-left">
                        <div className="sm:w-[480px] lg:w-[670px] mx-auto lg:mr-2 dark_green px-5 sm:px-6 py-7 sm:py-9 rounded-3xl shadow-lg flex flex-col gap-2">
                            <h2 className="text-2xl sm:text-3xl sm:px-5 lg:px-0"><strong>Feeling Lost</strong> And Not Knowing The Way?</h2>
                            <p className="text-[15.5px] text-gray-200">With our app, you’ll always know where to go - discover routes, camps, and hidden spots with confidence. Explore freely, guided by maps and insights built for travelers like you.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Camp;