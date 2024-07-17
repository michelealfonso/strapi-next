"use client";

import Image from "next/image";

import Header from "../atoms/header";
import Button from "../atoms/button";
import Photo from "../moleculus/photo";

export default function BlogDetails() {
    return (
        <>
            <Header title="Headless Blog" />
            <div className="w-auto h-full flex flex-col justinfy-center items-center overflow-hidden gap-[20px]">
                {/* <div className="w-auto h-full flex flex-col lg:flex-row gap-[30px]">
                    <Image className="w-[400px] h-[400px] lg:w-[500px] lg:h-[400px]" src={'/images/headphone.jpg'} width={500} height={400} alt="" />

                    <div className="w-auto h-auto flex flex-col justify-cemter items-start gap-[15px] p-[20px] leading-normal">
                        <p className="text-[20px] text-yellow-500 font-bold"> Product Reviews </p>
                        <h1 className="text-[30px] font-bold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora tenetur doloremque? Itaque eos, nemo provident quaerat sint accusamus adipisci?</h1>
                        <p className="text-[20px] font-bold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aut velit fugit odit, neque voluptatum voluptatem sed suscipit iusto sit.</p>
                        
                        <Button description={'Read More'}/>
                    </div>

                </div>
                <div className="w-auto h-auto flex justify-center items-center gap-[15px]">
                    <Photo />
                </div> */}
 
                <h2 className="text-[40px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>

                <Image className="w-auto h-[500px] lg:w-full" src={'/images/headphone.jpg'} width={500} height={500} alt="" />

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quibusdam eos delectus quaerat praesentium enim tempore ea corporis, dicta possimus? Consequatur quaerat nihil aliquam. Deleniti esse adipisci tenetur natus reiciendis!
                Ducimus iste, optio animi dolor inventore earum quae. Atque, harum temporibus. Aliquam nesciunt quo unde tenetur illo, dicta veritatis suscipit ipsum, optio qui exercitationem, quia odio fugit illum doloribus nihil.
                Veniam veritatis sequi molestiae aspernatur maxime, similique distinctio voluptas eum deleniti? Et, incidunt, laudantium sapiente omnis corporis, aliquam libero quis deleniti iusto consequatur fugiat tempora. Quibusdam, et ut. Ducimus, dolor.
                Dicta deserunt at architecto rerum sequi harum, minus officiis cumque eos voluptatem sed, soluta commodi facilis et natus consequuntur explicabo corrupti quam quia? Laudantium quo quod quia corporis delectus eum?
                Facere quod dignissimos assumenda ut ipsum labore tenetur modi? Reiciendis repellendus, adipisci similique quae iure architecto eius odit quam ipsa? Sunt tenetur quidem sed laudantium in quisquam porro eligendi quos?
                Perspiciatis amet earum facere. Tempora soluta non pariatur illum ipsam, exercitationem, cumque sit architecto suscipit laborum harum maxime unde eligendi? Sunt aliquam eaque laudantium provident et ipsum fugiat velit. Amet?
                Voluptatibus sapiente, maxime alias consequatur veniam iure sit nam necessitatibus amet aut? Iure quas eum ipsa iste. Voluptatum incidunt quo aliquid molestiae suscipit, voluptatibus consequuntur impedit vero officia? Consectetur, sapiente?
                Provident odio, voluptatum eos reiciendis temporibus quam maiores soluta ratione aperiam autem, animi laboriosam nemo odit nulla libero veritatis. Reprehenderit odio repellendus at ea laudantium fuga recusandae illum, temporibus aliquid.
                Atque dicta iusto nostrum debitis nobis facere provident, quasi sint, accusantium enim molestiae quod? Nulla, rerum, natus soluta, eveniet officia amet sapiente tempore delectus minus quo sed corporis facere nobis?
                Mollitia animi perferendis doloremque dolores quibusdam, suscipit sunt nam provident repudiandae eveniet velit molestiae architecto maxime vel deleniti in ducimus temporibus expedita reprehenderit reiciendis quis totam officiis. Sequi, aperiam! Rem.
                Laudantium eius ducimus dolores et quos dolorem libero, nam adipisci obcaecati voluptates sequi blanditiis non, recusandae accusantium, fugiat ratione iusto nemo similique nulla rem eveniet nostrum voluptatum reiciendis! Voluptatibus, consectetur.
                Nihil fuga ex assumenda facere cum eum, eaque voluptatem enim porro at perferendis praesentium aliquam quas officiis amet illo exercitationem nisi totam eos veritatis numquam magnam tempora incidunt odit. Nihil.
                Excepturi nihil nam molestias facere rem explicabo illo recusandae natus voluptatem consectetur, inventore porro id placeat laboriosam tenetur. Alias quas sed aut veniam nulla modi eos culpa perspiciatis id natus?
                Praesentium repellendus a quos odit blanditiis, nam est ipsam quo error dignissimos sed animi molestias! Rem asperiores nisi itaque ad consectetur consequatur ipsa vero? Nesciunt, odio? Earum iusto voluptatem ipsa!
                Dolorum voluptates, facere libero aperiam, repellat, animi officiis veritatis enim vero inventore similique! Quia minima aut iusto quasi praesentium aliquid voluptatibus quae alias rerum quidem, quibusdam assumenda sequi voluptatum sed!
                Illum totam fuga quam! Id ducimus voluptate placeat adipisci, ut nemo ex repellat libero cumque harum ea, tempore illo aliquid eos architecto eius enim asperiores, earum est. Mollitia, ipsum animi.
                Voluptate aperiam numquam harum neque iusto magni nostrum quisquam nihil quasi est provident, ratione error obcaecati sed soluta dignissimos? Quis et deserunt doloremque dolore. Placeat reiciendis dolore id laudantium laborum?
                Atque non nisi blanditiis veritatis placeat in et cum eius, quae iusto. Tenetur, hic impedit? Aperiam reiciendis illum architecto magnam unde eum corrupti? Illum necessitatibus voluptates odio maiores, sint ducimus.
                Earum voluptatum provident fugiat fuga eos, mollitia doloremque qui, suscipit perspiciatis quis totam optio. Id corporis magnam quae reprehenderit, unde, earum quam modi sunt ullam minus et aspernatur aliquid repudiandae?
                Enim, accusantium quibusdam eligendi assumenda ipsam architecto cupiditate voluptatibus in maxime eos at tempora est vel pariatur ullam illum esse amet, dicta incidunt ducimus debitis repudiandae. Reiciendis adipisci error alias.</p>

            </div>
        </>
    )
}