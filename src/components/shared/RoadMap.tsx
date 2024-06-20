import { timelineElements } from "@/constants";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

export default function RoadMap({ defaultColor }: { defaultColor: string }) {
  return (
    <div>
      {timelineElements.map((element) => {
        const colors = [
          "bg-red-500",
          "bg-blue-500",
          "bg-yellow-500",
          "bg-purple-500",
          "bg-orange-500",
        ];

        const hiddenMarker = [
          "CoinGecko Listing",
          "Dex Listings",
          "95-99% Supply Burn",
          "Peggening",
        ];

        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div
            key={element.title}
            className="flex items-center m-4 relative group"
          >
            {/* <div
              className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
            ></div>
            <div
              className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
            ></div> */}

            <div className="items-start w-44 pt-0.5 relative sm:flex cursor-pointer">
              {/* <div className="w-4/5 text-sm md:text-xl hover:text-grad-3 text-accent-foreground font-light">
                {element.date}
              </div> */}
              <div
                className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
              />

              <div
                className={cn(
                  "size-[40px] rounded-full md:flex items-center justify-center relative overflow-hidden",
                  color
                )}
              >
                <Image
                  src={
                    element.icon === "school"
                      ? "/assets/icons/check.svg"
                      : "/assets/icons/work.svg"
                  }
                  fill
                  alt="icon"
                  className={cn(
                    `size-6 z-20 text-white`,

                    hiddenMarker.find((i) => i === element.title) && "hidden"
                  )}
                />
              </div>

              <div className={`${color} h-px w-8 translate-y-5 opacity-30`} />
            </div>

            <Card className="p-4 w-full z-10 sm:w-80 group-hover:bg-grad-1/10 group-hover:translate-x-2 ease-in duration-300 transition-all cursor-pointer border-[0.5px]">
              <CardHeader>
                <CardTitle className="text-sm md:text-xl lg:text-2xl text-muted-foreground font-hind font-light hover:text-white">
                  {element.title}
                </CardTitle>
                {/* <div className="text-muted-foreground mb-6 sm:mb-8 sm:text-xs">
                  {element.location}
                  <span className="sm:hidden">| {element.date}</span>
                </div> */}
              </CardHeader>
              {/* <CardContent>
                <div className="mb-4 p-text">
                  {element.description}
                </div>
                <Image
                  src={
                    element.icon === "school"
                      ? "/assets/icons/check.svg"
                      : "/assets/icons/work.svg"
                  }
                  width={100}
                  height={100}
                  alt="icon"
                  className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden `}
                />
              </CardContent> */}
            </Card>
          </div>
        );
      })}
    </div>
  );
}
