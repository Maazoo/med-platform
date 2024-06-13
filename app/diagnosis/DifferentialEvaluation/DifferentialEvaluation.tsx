import HospitalDirectory from "./HospitalDirectory"

type Props = {
  handleStepChange: (idx: number) => void;
}

export default function DifferentialEvaluation({ handleStepChange }: Props) {

  return (
    <>
      <div className="relative z-10">

        <div className="">
          <div className="w-full flex flex-col justify-between gap-2">
            <p className="text-slate-500">Step 4 of 6</p>
            <div className="h-1 bg-purple w-4/6"></div>
            <h1 className="text-3xl font-semibold text-black">Differential Evaluation</h1>
          </div>
        </div>

        <div className="w-11/12 mt-10">
          <div className="mx-3 grid grid-cols-4 gap-1 h-[42rem]">
              <HospitalDirectory />
            <div className="bg-white rounded-lg border-2 col-span-2"></div>
            <div className="bg-white rounded-lg border-2"></div>
          </div>
        </div>

      </div>
    </>
  )
}
