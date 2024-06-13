import { Button } from "@/components/ui/button";
import DiagnosisCard from "./DiagnosisCard";
import { useState } from "react";

type Props = {
  handleStepChange: (idx: number) => void;
}

export default function DifferentialDiagnosis({ handleStepChange }: Props) {
  const [diagnoses, setDiagnoses] = useState<string[]>([]);

  return (
    <>
      <div className="relative z-10">

        <div className="flex gap-5 items-center justify-between">
          <div className="w-full flex flex-col justify-between gap-2">
            <p className="text-slate-500">Step 3 of 6</p>
            <div className="h-1 bg-purple w-3/6"></div>
            <h1 className="text-3xl font-semibold text-black">Differential Diagnosis In Progress</h1>
          </div>
          <div>
            <Button className="w-28 h-12 bg-purple" onClick={() => handleStepChange(3)}>Next</Button>
          </div>
        </div>

        <div className="w-11/12 mt-10">
          <div className="mx-5 grid grid-cols-2 gap-2">
          <DiagnosisCard idx={1} />
          <DiagnosisCard idx={2} />
          <DiagnosisCard idx={3} />
          <DiagnosisCard idx={4} />
          <DiagnosisCard idx={5} />
          </div>
        </div>

      </div>
    </>
  )
}
