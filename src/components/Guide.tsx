import Image from "next/image";

const Guide = () => {
    return (
        <section className="bg-gradient-to-b from-white from-25% to-amber-100 to-100% container_width pb-15 lg:pb-20 lg:pt-10">
            <div className="lg:mx-10 flex flex-col gap-7">
                <div className="px-2 lg:px-10 text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-15 lg:justify-center lg:items-center lg:w-full">
                    <div className="flex flex-col items-center justify-center lg:justify-end lg:items-end">
                        <Image
                            src="/camp.svg"
                            alt="camp"
                            width={48}
                            height={48}
                        />
                        <label className="text-blue-950 text-[17.5px] my-[2px] font-bold">WE ARE HERE FOR YOU</label>
                        <h2 className="font-bold text-3xl mb-2.5">Guide to Easy Path</h2>
                    </div>
                    <p className="text-[15.5px] sm:max-w-[470px] m-auto lg:m-0">Only with the travel application, you will no longer get lost and get lost again, because we already support offline maps when there’s no internet connection in the field. Invite your friends and relatives to have fun in the wilderness, through the valley, and reach the top of the mountain</p>
                </div>

                <div className="relative">
                    <div>
                        <Image
                            src="/boat.png"
                            alt="guide"
                            width={1080}
                            height={800}
                            className="w-full sm:rounded-3xl min-h-[250px] max-h-[400px] object-cover object-center"
                        />
                    </div>
                    <div className="relative sm:absolute sm:m-0 sm:top-10 sm:left-17 z-20 w-[fit-content] mx-auto mt-[-70px] bg-gradient-to-b from-gray-50 to-gray-300 py-4 px-5 flex items-center rounded-2xl shadow-lg">
                        <Image
                            src="/meter.svg"
                            alt="map"
                            width={17}
                            height={17}
                            className="h-full"
                        />
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col">
                                <p className="flex gap-5 text-gray-500 text-sm font-bold">Destination <span className="text-green-600">48 mins</span></p>
                                <p className="font-heading text-[17px] font-bold">Fora Parientus</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500 text-sm font-bold">Start track</p>
                                <p className="font-heading text-[17px] font-bold">Curame Liana</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guide;