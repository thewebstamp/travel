import Image from "next/image";

type ButtonProps = {
    type: "button" | "submit",
    icon?: string,
    title: string,
    variant: string
};

const Button = ({ type, icon, title, variant }: ButtonProps) => {
    return (
        <button type={type} className={`w-full lg:w-[fit-content] cursor-pointer rounded-full shadow-lg flex_center gap-2 lg:gap-3 px-6 py-[11px] ${variant}`}>
            {icon && <Image src={icon} alt={title} width={20} height={20} />}
            <label className="tracking-[0.4px] font-bold text-[15.5px] cursor-pointer">{title}</label>
        </button>
    );
};

export default Button;