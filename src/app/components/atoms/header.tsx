"use client";

 export default function Header({ title }: any) {
    return (
        <div className="w-auto h-auto lg:w-full flex flex-col justify-center items-start py-[20px] gap-[16px]">
            <h1 className="w-auto text-[38px] lg:text-[48px] md:text-[48px] text-black font-bold leading-[64px]">
                {title}
            </h1>
        </div>
    )
}