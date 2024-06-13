import Image from "next/image"
import {
  HistoryIcon,
  PhysicalInProgressIcon,
  DifferentialDiagnosisIcon,
  DifferentialEvaluationIcon,
  SpeechIcon,
  ChatIcon,
  CheckIcon
} from "./SVGs/svgs"
import Timer from "./Timer"
import Clipboard from "./Clipboard"

type Props = {
  idx: number;
}

export default function Sidebar({ idx }: Props) {

  return (
    <>
      <div className="fixed top-0 right-5 h-screen flex flex-col gap-8 justify-end items-center pb-10">
        <div className="w-20 py-5 min-h-[36rem] relative bg-white rounded-lg flex flex-col gap-6 justify-start items-center">
          <Image
            src="/sidebar_logo.svg"
            alt=""
            width={40}
            height={43}
          />

          <HistoryIcon className={idx === 0 ? "bg-slate-100" : ""} />
          <PhysicalInProgressIcon className={idx === 1 ? "bg-slate-100" : ""}  />
          <DifferentialDiagnosisIcon className={idx === 2 ? "bg-slate-100" : ""}  />
          <DifferentialEvaluationIcon className={idx === 3 ? "bg-slate-100" : ""}  />
          <SpeechIcon className={idx === 4 ? "bg-slate-100" : ""}  />
          <ChatIcon className={idx === 5 ? "bg-slate-100" : ""}  />
          <CheckIcon className={idx === 6 ? "bg-slate-100" : ""}  />

          <Timer />

        </div>

        <Clipboard />
      </div>
    </>
  )
}
