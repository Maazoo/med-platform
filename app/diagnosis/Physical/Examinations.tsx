import { useState } from "react";
import {
  PercussionSVG,
  AuscultationSVG,
  NeurologicalExamSVG,
  VisualInspectionSVG
} from "@/app/Components/SVGs/svgs";

const activeBg = "#BCF0DA"
const activeText = "#057A55"

const inactiveBg = "#F5F7FA"
const inactiveText = "#6B7280"

type Props = {
  handleExamChange: (idx: number) => void;
}

export default function Examinations({ handleExamChange }: Props) {
  const [selectedExamination, setSelectedExamination] = useState<number>(0);

  const handleExaminationChange = (examination: number) => {
    setSelectedExamination(examination);
    handleExamChange(examination);
  }

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center border-l-2">

        <button
          className={`flex flex-col rounded-lg justify-center items-center h-32 w-28
          ${selectedExamination === 0 ? `bg-[${activeBg}]` : `bg-slate-200`}
          `}
          onClick={() => handleExaminationChange(0)}
        >
          <PercussionSVG isActive={selectedExamination === 0} />
          <p className={`text-center ${selectedExamination === 0 ? `text-[${activeText}]` : `text-[${inactiveText}]`}`} >
            Percussion</p>
        </button>

        <button
          className={`flex flex-col rounded-lg justify-center items-center h-32 w-28
          ${selectedExamination === 1 ? `bg-[${activeBg}]` : `bg-slate-200`}
          `}
          onClick={() => handleExaminationChange(1)}
        >
          <AuscultationSVG isActive={selectedExamination === 1} />
          <p className={`text-center ${selectedExamination === 1 ? `text-[${activeText}]` : `text-[${inactiveText}]`}`} >
            Auscultation</p>
        </button>

        <button
          className={`flex flex-col rounded-lg justify-center items-center h-32 w-28
          ${selectedExamination === 2 ? `bg-[${activeBg}]` : `bg-slate-200`}
          `}
          onClick={() => handleExaminationChange(2)}
        >
          <NeurologicalExamSVG isActive={selectedExamination === 2} />
          <p className={`text-center ${selectedExamination === 2 ? `text-[${activeText}]` : `text-[${inactiveText}]`}`} >
            Neuroligical Examination</p>
        </button>

        <button
          className={`flex flex-col rounded-lg justify-center items-center h-32 w-28
          ${selectedExamination === 3 ? `bg-[${activeBg}]` : `bg-slate-200`}
          `}
          onClick={() => handleExaminationChange(3)}
        >
          <VisualInspectionSVG isActive={selectedExamination === 3} />
          <p className={`text-center ${selectedExamination === 3 ? `text-[${activeText}]` : `text-[${inactiveText}]`}`} >
            Visual Inspection</p>
        </button>


      </div>
    </>
  )
}
