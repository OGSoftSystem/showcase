import { timelineElements } from "@/constants";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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

        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div key={element.title} className="flex m-4 relative group">
            {/* <div
              className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
            ></div>
            <div
              className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
            ></div> */}

            <div className="hidden items-start w-44 pt-0.5 relative sm:flex cursor-pointer">
              <div className="w-4/5 text-accent-foreground">{element.date}</div>
              <div
                className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
              ></div>
              <Image
                src={
                  element.icon === "school"
                    ? "/assets/icons/check.svg"
                    : "/assets/icons/work.svg"
                }
                width={100}
                height={100}
                alt="icon"
                className={`${color} w-10 p-1 rounded-lg z-20`}
              />

              <div
                className={`${color} h-px w-8 translate-y-5 opacity-30`}
              ></div>
            </div>

            <Card className="px-8 py-4 w-full z-10 sm:w-96 group-hover:bg-ring/50 group-hover:rotate-[360deg] ease-in duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl text-muted-foreground font-medium">
                  {element.title}
                </CardTitle>
                <div className="text-muted-foreground mb-6 sm:mb-8 sm:text-xs">
                  {element.location}
                  <span className="sm:hidden">| {element.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-muted-foreground">
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
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
