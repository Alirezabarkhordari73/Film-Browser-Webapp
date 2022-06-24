import React, { forwardRef } from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Card = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <React.Fragment>
      <div
        ref={ref}
        className="group cursor-pointer p-3 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image
          src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
          height={1080}
          width={1920}
          alt={result.name}
        />
        <div className="p-2">
          <h1 className="text-green-500 text-2xl mt-1 transition-all duration-100 ease-in-out group-hover:font-bold">
            {result.name ||
              result.original_name ||
              result.title ||
              result.original_title}
          </h1>
          <p className="truncate max-w-md">{result.overview}</p>
          <p className="flex items-center opacity-0 group-hover:opacity-100 p-2">
            {result.media_type && `${result.media_type}`}{" "}
            {result.first_air_date || result.release_date}
            <ThumbUpIcon className="h-5 max-2" />
            {result.vote_count}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
});
Card.displayName = "Card";
export default Card;
