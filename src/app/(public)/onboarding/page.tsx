"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ReactNode, useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { Restaurant } from "@/lib/mongo/types/Restaurant.type";

const OnboardingPage = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Partial<Restaurant>>({});

  const steps: Record<number, (props: { setStep: (step: number) => void, step: number }) => ReactNode> = {
    1: (props) => <Step1 {...props} setData={setData} />,
    2: (props) => <Step2 {...props} setData={setData} />,
    3: (props) => <Step3 {...props} setData={setData} data={data} />,
  };

  const StepContent = steps[step];

  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      <div className="fixed -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#270c6e_100%)]"></div>
      <Card className="h-full w-full flex flex-col md:h-fit md:w-2/3 max-w-[600px]">
        <CardHeader>
          <Progress value={step*100/3} />
          <h1 className="text-2xl font-bold !mt-5">Onboarding</h1>
        </CardHeader>
        <CardContent>
          <StepContent setStep={setStep} step={step} />
        </CardContent>
      </Card>
    </div>
  );
}

export default OnboardingPage;