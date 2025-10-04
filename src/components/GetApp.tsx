import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
    return (
        <section id="get_app" className="relative z-20 container_width bg-[url('/pattern.png')] bg-center bg-cover flex flex-col sm:flex-row items-center lg:justify-between gap-17 pt-15 pb-11 lg:max-h-[550px] overflow-hidden lg:rounded-3xl">
            <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left px-2.5 lg:px-10 sm:pl-10 sm:min-w-[370px] lg:min-w-[500px]">
                <h2 className="text-gray-50 font-bold text-3xl lg:text-4xl sm:w-[85%]">Get For Free Now!</h2>
                <p className="text-[15.5px] text-gray-200">Available on ios and android, download now!</p>
                <div className="flex flex-col lg:flex-row gap-2 mt-5 w-full max-w-[270px] sm:max-w-[240px] lg:max-w-[fit-content] sm:mt-7 lg:mt-9 sm:w-[240px] lg:w-[fit-content]">
                    <Button
                        icon="/apple.svg"
                        title="Download App"
                        variant="apple"
                        type="button"
                    />
                    <Button
                        icon="/android.svg"
                        title="Download App"
                        variant="android"
                        type="button"
                    />
                </div>
            </div>

            <div className="sm:pr-10">
                <Image
                src="/phones.png"
                alt="get app"
                width={550}
                height={870}
                />
            </div>
        </section>
    );
};

export default GetApp;