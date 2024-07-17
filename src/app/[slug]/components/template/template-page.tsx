"use client";

export default function PageTemplate({children}: any) {

    return (
        <div
          className="
          flex 
          flex-col 
          md:justify-center
          lg:justify-center
          xl:px-[150px]
          p-6
          h-auto
          overflow-hidden
          ">
            {children}
      </div>
    )
}