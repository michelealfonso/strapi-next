"use server";

import Image from "next/image";

import Header from "../atoms/header";
import Button from "../atoms/button";

import config from "@/config";
import Photo from "../moleculus/photo";



const fetchBlogs = async (params: any) => {
    const reqOptions: any =  {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    };

    const request = await fetch(`${config.api}/api/blogs=populate=*${params}`, reqOptions);
    const response = await request.json();

    return response;
}

export default async function Hero() {

    const [featuredBlogs, blogs] = await Promise.all([
        await fetchBlogs('&filters[IsFeatured][$eq]=true'),
        await fetchBlogs('&filters[IsFeatured][$eq]=false')
    ]);

    console.log('featuredBlogs.data', featuredBlogs.data)
    return (
        <>
            <Header title="Headless Blog" />
            <div className="w-auto h-full flex flex-col overflow-hidden rounded-md shadow-xl">
                {
                    featuredBlogs.data?.map((featuredBlogs: any) => (
                        <div  
                        key={featuredBlogs.attributes.id} 
                        className="w-auto h-full flex flex-col lg:flex-row gap-[30px]">
                            <Image className="w-[400px] h-[400px] lg:w-[500px] lg:h-[400px]" src={'/images/headphone.jpg'} width={500} height={400} alt="" />
        
                            <div className="w-auto h-auto flex flex-col justify-cemter items-start gap-[15px] p-[20px] leading-normal">
                                <p className="text-[20px] text-yellow-500 font-bold"> {featuredBlogs.attributes.Category} </p>
                                <h1 className="text-[30px] font-bold"> {featuredBlogs.attributes.Title} </h1>
                                <p className="text-[20px] font-bold"> {featuredBlogs.attributes.Summary} </p>
                                
                                <Button description={'Read More'}/>
                            </div>
    
                    </div>
                    ))
                }
                <div className="w-auto h-auto flex justify-center items-center gap-[15px]">

                    <Photo/>
                </div>
            </div>
        </>
    )
}
