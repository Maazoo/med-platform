import { Button } from "@/components/ui/button"
import PerformPhysical from "./PerformPhysical"
import ExamDisplay from "./ExamDisplay"
import VitalsInfo from "./VitalsInfo"
import { useState } from "react"

type Props = {
  handleStepChange: (idx: number) => void;
}

const exams = ["percussion", "auscultation", "neurological examination", "visual examination"]

export default function Physical({ handleStepChange }: Props) {
  const [selectedExam, setSelectedExam] = useState<string>("percussion")

  const handleExamChange = (idx: number) => {
    setSelectedExam(exams[idx])
  }

  return (
    <>
      <div className="relative z-10">

        <div className="flex gap-5 items-center justify-between">
          <div className="w-full flex flex-col justify-between gap-2">
            <p className="text-slate-500">Step 2 of 6</p>
            <div className="h-1 bg-purple w-2/6"></div>
            <h1 className="text-3xl font-semibold text-black">Physical In Progress</h1>
          </div>
          <div>
            <Button className="w-28 h-12 bg-purple" onClick={() => handleStepChange(2)}>Next</Button>
          </div>
        </div>

        <div className="w-11/12 mt-10">
          <div className="mx-5 grid grid-cols-2 grid-rows-2 gap-2">

            <div className="rounded-lg row-span-2">
              <PerformPhysical handleExamChange={handleExamChange} />
            </div>

            <div className="bg-white rounded-lg ">
              <VitalsInfo />
            </div>

            <div className="bg-white rounded-lg flex flex-col justify-center">
              <ExamDisplay examName={selectedExam} />
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
