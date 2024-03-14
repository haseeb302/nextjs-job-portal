import Link from "next/link";
import { Switch } from "./ui/switch";

export default function Navbar() {
  return (
    <div className="flex justify-between pt-8 px-40 bg-hero-pattern bg-no-repeat h-[160px]">
      <div className="">
        <Link href={"/jobs"}>
          <h3 className="text-3xl text-white font-extrabold">devjobs</h3>
        </Link>
      </div>
      <div>
        <Switch />
      </div>
    </div>
  );
}
