import Slider from "@/components/Slider";
import { videos } from "@/data";
import Image from "next/image";

import Link from "next/link";
import React from "react";

const principal = () => {
  return (
    <div>
      <div className="h-1/2 mb-4 md:w-full">
        <Slider className="relative md:h-200px" />
      </div>
      <div className="h-1/2 w-full pb-4 md:flex md:flex-row md:w-full md:gap-4">
        {videos.map((video) => (
          <Link href={video.url} key={video.id} className="w-full h-[50vh]">
            {video.img && (
              <div className="relative w-full h-[20vh]">
                <Image
                  src={video.img}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h1 className="text-center md:text-xl md:textarea-sm">
                {video.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default principal;
