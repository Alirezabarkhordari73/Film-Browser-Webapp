import request from "../utils/requests";
import { useRouter } from "next/router";

function Navbar() {
  const Router = useRouter();

  return (
    <nav className="relative">
      <div className="flex whitespace-nowrap px-10 sm:px-20 text-2xl space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            onClick={() => {
              Router.push(`/?genre=${key}`);
            }}
            className="last:pr-20 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-500"
            key={key}>
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#091511] h-10 w-1/12" />
    </nav>
  );
}

export default Navbar;
