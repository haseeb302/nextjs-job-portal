import Search from "@/components/Search";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import data from "@/lib/data.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className=" px-40">
      <div className="relative h-[75px]">
        <Search />
      </div>
      <div className="my-10" />
      <div className="flex gap-x-4 gap-y-12 flex-wrap">
        {data.map((job) => (
          <Link href={`/jobs/${job.id}`}>
            <Card
              key={job.id}
              className="border-none w-[350px] max-w-[350px] min-h-[230px] relative"
            >
              <div className="absolute -top-6 left-5 my-auto">
                <Image
                  src={job?.logo}
                  alt={"company-logo"}
                  width={50}
                  height={50}
                />
              </div>
              <CardHeader className="mt-5">
                <CardDescription>
                  {job?.postedAt} . {job?.contract}
                </CardDescription>
                <CardTitle>{job?.position}</CardTitle>
                <CardDescription>{job?.company}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <p>{job?.location}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div className="my-10" />
      <div className="w-fit mx-auto">
        <Button>Load More</Button>
      </div>
      <div className="my-10" />
    </main>
  );
}
