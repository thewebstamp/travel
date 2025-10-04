import Image from "next/image";
import Link from "next/link";

const learn_more = ["About Travel", "Press Releases", "Environment", "Jobs", "Privacy Policy", "Contact Us"];
const community = ["Climbing Lipapa", "Hiking Travel", "Travel Lipapa"];
const contact_us = [
    {
        title: "Admin Officer",
        value: "+ (012) - 345 - 6789"
    },
    {
        title: "Email Officer",
        value: "travel@response.com"
    }
];
const social = ["/facebook.svg", "/instagram.svg", "/twitter.svg", "/youtube.svg", "/wordpress.svg"];

const Footer = () => {
    return (
        <footer className="container_width text-center lg:text-left bg-gradient-to-b from-white from-40% to-amber-100 pt-10 sm:pt-15 lg:pt-20 flex flex-col gap-14 sm:gap-18 lg:gap-13">
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-y-8 sm:gap-y-15 lg:gap-x-15">
                <Link href="/" className="col-span-2 sm:col-span-1 sm:row-span-2 lg:row-span-1 flex sm:items-start justify-center lg:justify-start mb-3 sm:mb-0">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={80}
                        height={36}
                    />
                </Link>
                <div className="sm:col-span-2">
                    <h2 className="font-bold text-lg text-gray-900 mb-2.5 lg:mb-4">Learn More</h2>
                    <div>
                        <ul className="flex flex-col gap-2.5">
                            {
                                learn_more.map((learn, i) => (
                                    <li key={i} className="cursor-pointer text-sm text-gray-700">{learn}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <h2 className="font-bold text-lg text-gray-900 mb-2.5 lg:mb-4">Community</h2>
                    <div>
                        <ul className="flex flex-col gap-2.5">
                            {
                                community.map((community, i) => (
                                    <li key={i} className="cursor-pointer text-sm text-gray-700">{community}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-3 my-1 sm:my-0">
                    <h2 className="font-bold text-lg text-gray-900 mb-2.5 lg:mb-4">Contact Us</h2>
                    <div>
                        <ul className="flex flex-col gap-2.5">
                            {
                                contact_us.map((contact, i) => (
                                    <li key={i} className="text-sm text-gray-700">{`${contact.title}: `} <strong className="ml-2 cursor-pointer text-gray-900">{`${contact.value}`}</strong></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-2 flex flex-col items-center lg:items-start">
                    <h2 className="font-bold text-lg text-gray-900 mb-2.5 lg:mb-4">Social</h2>
                    <div className="flex items-center gap-3">
                        {
                            social.map((icon, i) => (
                                <Image
                                    key={i}
                                    src={icon}
                                    alt="social icon"
                                    width={20}
                                    height={20}
                                    className="cursor-pointer"
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div>
                <hr />
                <p className="py-5 lg:py-4 text-sm font-heading font-semibold text-gray-700 lg:text-right">{new Date().getFullYear()} Travel | All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;