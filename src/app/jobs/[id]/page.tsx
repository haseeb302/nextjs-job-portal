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

export default function Page() {
  return (
    <>
      <main className="px-40">
        <div className="relative h-[75px]">
          <Card className="flex items-center justify-between border-none w-[740px] max-w-[740px] max-h-[230px] absolute right-0 left-0 m-auto -top-12">
            <div className="flex">
              <div className="rounded-xl">
                <Image
                  src={"/assets/logos/pod.svg"}
                  alt={"company-logo"}
                  width={140}
                  height={140}
                />
              </div>
              <CardHeader className="mt-5">
                <CardTitle>Scoot</CardTitle>
                <CardDescription>Scoot.com</CardDescription>
              </CardHeader>
            </div>
            <CardContent>
              <Button>Company Site</Button>
            </CardContent>
          </Card>
        </div>
        <div className="my-10" />
        <div className="flex justify-center">
          <Card className="border-none w-[740px] max-w-[740px] relative">
            <CardHeader className="flex flex-row justify-between">
              <div className="space-y-2">
                <CardDescription>1w ago . Full Time</CardDescription>
                <CardTitle className="text-3xl">
                  Senior Full Stack Developer
                </CardTitle>
                <CardDescription>United Kingdom</CardDescription>
              </div>
              <div className="">
                <Button>Apply Now</Button>
              </div>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
              <p className="font-bold my-8">Requirement</p>
              <p>
                Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
                felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
                Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc
                tellus ante, mattis eget, gravida vitae, ultricies ac, leo.
                Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
              </p>
              <ul className="list-disc list-inside leading-loose">
                <li>
                  <span className="pl-5">
                    Morbi interdum mollis sapien. Sed
                  </span>
                </li>
                <li>
                  <span className="pl-5">
                    Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                    pulvinar risus
                  </span>
                </li>
                <li>
                  <span className="pl-5">
                    Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                    vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris
                    ut lectus.
                  </span>
                </li>
                <li>
                  <span className="pl-5">
                    Morbi interdum mollis sapien. Sed
                  </span>
                </li>
              </ul>
              <p className="font-bold my-8">What You Will Do</p>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                elementum hendrerit tortor. Sed semper lorem at felis.
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna.
              </p>
              <ul className="list-decimal list-inside leading-loose">
                <li>
                  <span className="pl-5">
                    Morbi interdum mollis sapien. Sed
                  </span>
                </li>
                <li>
                  <span className="pl-5">
                    Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                    pulvinar risus
                  </span>
                </li>
                <li>
                  <span className="pl-5">
                    Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                    vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris
                    ut lectus.
                  </span>
                </li>
                <li>
                  <span className="pl-5">
                    Morbi interdum mollis sapien. Sed
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="my-10" />
      </main>
      <footer className="px-40 py-8 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Senior Full Stack Developer</h3>
            <p className="text-muted-foreground">Scoot Co.</p>
          </div>
          <div className="">
            <Button>Apply Now</Button>
          </div>
        </div>
      </footer>
    </>
  );
}
