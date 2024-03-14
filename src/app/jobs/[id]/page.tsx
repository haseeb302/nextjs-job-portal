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
import { Button } from "@/components/ui/button";
import { fetchJobById } from "@/lib/data";

export default function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  const job = fetchJobById(id);

  return (
    <>
      <main className="px-40">
        <div className="relative h-[75px]">
          <Card className="flex items-center justify-between border-none w-[740px] max-w-[740px] max-h-[230px] absolute right-0 left-0 m-auto -top-12">
            <div className="flex">
              <div
                className="p-2"
                style={{ background: `${job?.logoBackground}` }}
              >
                <Image
                  src={job?.logo || ""}
                  alt={"company-logo"}
                  width={140}
                  height={140}
                  className={`bg-[(${job?.logoBackground})]`}
                />
              </div>
              <CardHeader className="mt-5">
                <CardTitle>{job?.position}</CardTitle>
                <CardDescription>{job?.website}</CardDescription>
              </CardHeader>
            </div>
            <CardContent>
              <Button>Company Site</Button>
            </CardContent>
          </Card>
        </div>
        <div className="my-14" />
        <div className="flex justify-center">
          <Card className="border-none w-[740px] max-w-[740px] relative">
            <CardHeader className="flex flex-row justify-between">
              <div className="space-y-2">
                <CardDescription>
                  {job?.postedAt} . {job?.contract}
                </CardDescription>
                <CardTitle className="text-3xl">{job?.position}</CardTitle>
                <CardDescription>{job?.location}</CardDescription>
              </div>
              <div className="">
                <Button>Apply Now</Button>
              </div>
            </CardHeader>
            <CardContent>
              {job?.description}
              <p className="font-bold my-8">Requirement</p>
              <p>{job?.requirements.content}</p>
              <ul className="list-disc list-inside leading-loose">
                {job?.requirements.items.map((item, index) => (
                  <li key={index}>
                    <span className="pl-5">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-bold my-8">What You Will Do</p>
              <p>{job?.role.content}</p>
              <ul className="list-decimal list-inside leading-loose">
                {job?.role.items.map((item, index) => (
                  <li key={index}>
                    <span className="pl-5">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="my-10" />
      </main>
      <footer className="px-40 py-8 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">{job?.position}</h3>
            <p className="text-muted-foreground">{job?.company}</p>
          </div>
          <div className="">
            <Button>Apply Now</Button>
          </div>
        </div>
      </footer>
    </>
  );
}
