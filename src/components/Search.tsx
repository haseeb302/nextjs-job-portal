import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Search as SearchIcon, MapPin } from "lucide-react";

export default function Search() {
  return (
    <div className="w-[1110px] bg-white rounded-lg absolute right-0 left-0 m-auto bottom-10">
      <div className="flex">
        <div className="flex-grow">
          <form className="border-r p-4">
            <div className="relative">
              <Image
                src={"/assets/desktop/icon-search.svg"}
                className="absolute left-2 top-2.5"
                width={24}
                height={24}
                alt="search icon"
              />
              <Input
                className="pl-10 border-none"
                placeholder="Search By Title"
              />
            </div>
          </form>
        </div>
        <div className="flex-1">
          <form className="border-r p-4">
            <div className="relative">
              <Image
                src={"/assets/desktop/icon-location.svg"}
                className="absolute left-2 top-2.5"
                width={17}
                height={24}
                alt="map pin icon"
              />
              <Input
                className="pl-10 border-none"
                placeholder="Search By Location"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center px-3 space-x-4">
          <input type="checkbox" className="w-6 h-6" name="fullTime" />
          <span className="text-sm font-bold">Full Time Only</span>
          <Button className="px-6 py-4">Search</Button>
        </div>
      </div>
    </div>
  );
}
