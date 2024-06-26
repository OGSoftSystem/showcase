import Wrapper from "@/components/shared/Wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import BurnForm from "../_components/BurnForm";
import { findBurnValue } from "@/lib/actions/burn.actions";
import PageHeading from "@/components/shared/PageHeading";

const BurnAddressPage = async () => {
  const burnValue: { _id: string; value: string }[] = await findBurnValue();

  const value = burnValue[0];
  const currentId = burnValue[0]._id as string;

  return (
    <section>
      <Wrapper className="flex flex-col items-center justify-center paddingY">
        <PageHeading
          pageTitle="Burn Percentage"
          pageSubtitle="Create and Update Burn percentage for Address xx369."
        />
        <Card className="mt-20">
          <CardHeader>
            <CardTitle>Update xx369</CardTitle>
            <CardDescription>Input current percentage value</CardDescription>
          </CardHeader>
          <CardContent>
            <BurnForm currentValue={value} currentId={currentId} />
          </CardContent>
        </Card>
      </Wrapper>
    </section>
  );
};

export default BurnAddressPage;
