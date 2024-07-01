"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ReactNode, useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const OnboardingPage = () => {
  const [step, setStep] = useState(1);
  const organizationHook = useOrganization();
  const router = useRouter();

  const organizationId = organizationHook?.organization?.id;

  if (organizationId) {
    router.push('/dashboard');
  }

  const steps: Record<number, (props: { setStep: (step: number) => void, step: number }) => ReactNode> = {
    1: (props) => <Step1 {...props} />,
    2: (props) => <Step2 {...props} />,
    3: (props) => <Step3 {...props} />,
  };

  const StepContent = steps[step];

  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      <div className="fixed -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#270c6e_100%)]"></div>
      <Card className="h-full w-full flex flex-col md:h-fit md:w-2/3">
        <CardHeader>
          <Progress value={step*100/3} />
          <h1 className="text-2xl font-bold !mt-5">Onboarding</h1>
        </CardHeader>
        <CardContent>
          {/* <ScrollArea className="h-4/6 w-full rounded-md border p-8"> */}
            <StepContent setStep={setStep} step={step} />
          {/* </ScrollArea> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default OnboardingPage;