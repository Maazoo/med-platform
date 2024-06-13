"use client"
import Sidebar from "@/app/Components/Sidebar";
import History from "./History/History";
import Physical from "./Physical/Physical";
import DifferentialDiagnosis from "./DifferentialDiagnosis/DifferentialDiagnosis";
import DifferentialEvaluation from "./DifferentialEvaluation/DifferentialEvaluation";
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(0);

  const handleStepChange = (idx: number) => {
    setStep(idx);
  }

  return (
    <>
      <div className="bg-diagnosis-background w-full max-h-screen overflow-y-scroll pt-10 px-5">
        {step === 0 && <History handleStepChange={handleStepChange} />}
        {step === 1 && <Physical handleStepChange={handleStepChange} />}
        {step === 2 && <DifferentialDiagnosis handleStepChange={handleStepChange} />}
        {step === 3 && <DifferentialEvaluation handleStepChange={handleStepChange} />}
      </div>

      <Sidebar idx={step} />
    </>
  );
}
