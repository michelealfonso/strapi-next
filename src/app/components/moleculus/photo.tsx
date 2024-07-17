"use server";

import Image from "next/image";
import Button from "../atoms/button";

const cards = [
    {
        id: '',
        title: 'Opinions',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, cum?',
        image: '/images/books.png'
    },
    {
        id: '',
        title: 'Product reviews',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, cum?',
        image: '/images/photocamera.jpg'
    },
    {
        id: '',
        title: 'Travel Guldes',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, cum?',
        image: '/images/volley.jpeg'
    }
]




export default async function Photo() {

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full flex flex-col lg:flex-row justify-between items-start py-[15px] gap-[15px]">
                {
                    cards.map((card, index) => (
                        <div className="w-full h-auto flex flex-col gap-5 rounded-md shadow-xl"
                            key={index}>
                            <Image className="w-full h-[250px]" src={card.image} width={300} height={200} alt={''} />
                            <div className="w-full h-auto flex justify-start items-center p-[20px]">
                                <div className="w-full h-auto flex flex-col gap-5">
                                    <p className={`
                                        text-[20px] 
                                        font-bold
                                        ${index === 1 || index === 2 || index === 3 ? 'text-green-600' : 'text-orange-600'}
                        `}
                                    >
                                        {card.title}
                                    </p>

                                    <h1 className="text-start text-[20px] font-bold"> {card.description} </h1>

                                    <Button description={'Read More'} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

