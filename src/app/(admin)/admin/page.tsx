import PageHeading from "@/components/shared/PageHeading";
import Wrapper from "@/components/shared/Wrapper";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DASHBOARD_LINKS } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


const AdminPage = () => {
  return (
    <section className="pt-20">
      <PageHeading pageTitle="Dashboard" pageSubtitle="Perform Admin Functions" />
      <Wrapper>
        <div className="size-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-6 my-10 ">
          {DASHBOARD_LINKS.map((link) => {
            return (
              <Card key={link.title}>
                <CardHeader>
                  <CardTitle className="text-2xl text-white font-bold">
                    {link.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {link.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <link.Icon size={80} className="text-grad-3" />
                </CardContent>
                <CardFooter>
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                      className: "rounded-2xl text-grad-1",
                    })}
                    href={link.href}
                  >
                    View{" "}
                    <span>
                      <ArrowRight />
                    </span>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default AdminPage;
