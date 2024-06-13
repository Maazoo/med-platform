import { Button } from "@/components/ui/button"
import Image from "next/image"
import Webcam from "react-webcam"

type Props = {
  handleStepChange: (idx: number) => void;
}

export default function History({ handleStepChange }: Props) {

  return (
    <>
      <div className="relative z-10">

        <div className="flex gap-5 items-center justify-between">
          <div className="w-full flex flex-col justify-between gap-2">
            <p className="text-slate-500">Step 1 of 6</p>
            <div className="h-1 bg-purple w-1/6"></div>
            <h1 className="text-3xl font-semibold text-black">History In Progress</h1>
          </div>
          <div>
            <Button className="w-28 h-12 bg-purple" onClick={() => handleStepChange(1)}>Next</Button>
          </div>
        </div>

        <div className="w-11/12 mt-10">
          <div className="mx-5 rounded-lg bg-diagnosis-mid px-10 py-5">
            <p className="text-center text-lg">
              <span className="text-purple">Patient Information Panel: </span>
              You are evaluating Michael Green, a 17-year-old male in the neurology clinic who has
              had two recent unprovoked seizure episodes. Take a history, perform a neurological examination and
              discuss further diagnostic workup including EEG, and management strategies for epilepsy.
            </p>
          </div>

          <Image
            src="/visualizer.webp"
            alt="Audio Visualizer"
            width={150}
            height={126}
            className="mx-auto"
          />

          <Webcam
            width={570}
            className="rounded-lg mx-auto"
          />

        </div>


      </div>
    </>
  )
}
