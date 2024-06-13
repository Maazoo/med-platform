import Image from "next/image"
import Examinations from "./Examinations"
import { useState } from "react"

type Props = {
  handleExamChange: (idx: number) => void;
}

export default function PerformPhysical({ handleExamChange }: Props) {
  const [selectedView, setSelectedView] = useState<string>("front")

  const handleViewChange = (view: string) => {
    setSelectedView(view)
  }

  return (
    <>
      <div className="flex rounded-lg jusitfy-center items-center py-3 bg-white">
        <div className="basis-2/3 flex flex-col justify-between gap-6 items-center">
          <h2 className="text-xl">Perform Physical</h2>
          <Image
            src="/lines.webp"
            alt="body contour"
            width={315}
            height={600}
            className="px-4"
          />
          <div className="flex">
            <button
              className={`text-center  rounded-l-lg px-8 py-3
            ${selectedView === "front" ?
                  "bg-button-color-active text-button-color-inactive transtiion-all duration-300 ease-in-out"
                  : "bg-button-color-inactive text-button-color-active"}
            `}
              onClick={() => handleViewChange("front")}
            >
              Front
            </button>
            <button
              className={`text-center  rounded-r-lg px-8 py-3
              ${selectedView === "back" ?
                  "bg-button-color-active text-button-color-inactive transtiion-all duration-300 ease-in-out"
                  : "bg-button-color-inactive text-button-color-active"}
              `}
              onClick={() => handleViewChange("back")}
            >
              Back
            </button>
          </div>
        </div>
        <div className="basis-1/3">
          <Examinations handleExamChange={handleExamChange} />
        </div>
      </div>
    </>
  )
}
