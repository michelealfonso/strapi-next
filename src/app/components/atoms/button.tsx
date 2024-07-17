"use client";

import { FaArrowRight } from "react-icons/fa";

export default function Button({description}: any) {
    return (
        <button className="w-[150px] h-auto flex justify-center items-center text-[15px] gap-[10px] text-white font-semibold px-[20px] py-[10px] bg-blue-600 rounded-full">
            {description}
            <FaArrowRight/>
        </button>
    )
}