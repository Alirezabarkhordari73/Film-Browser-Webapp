import {
  HomeIcon,
  UserIcon,
  SearchIcon,
  CollectionIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <h1 className="text-green-500 text-4xl tracking-widest font-bold mb-5 ml-5">
        Movie
      </h1>
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
    </header>
  );
}

export default Header;
