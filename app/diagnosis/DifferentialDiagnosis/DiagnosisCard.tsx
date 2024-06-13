import {
  Card,
  CardTitle,
  CardHeader,
  CardContent
} from "@/components/ui/card";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

type Props = {
  idx: number;
}

export default function DiagnosisCard({ idx }: Props) {
  const [diagnosis, setDiagnosis] = useState<string>("");


  return (
    <>
      <Card className="rounded-lg h-96">
        <CardHeader>
          <CardTitle className="flex items-center text-lg gap-2 font-normal">
            <span className="h-8 w-8 font-normal text-sm flex justify-center items-center rounded-full bg-violet-200 text-violet-600">{idx}</span>
            {diagnosis || "Differential Diagnosis"}
          </CardTitle>
        </CardHeader>
        <CardContent>

          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="py-1">Select Diagnosis</p>
              <Select>
                <SelectTrigger className="bg-slate-50">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.75 14.75L10.25 10.25M11.75 6.5C11.75 7.18944 11.6142 7.87213 11.3504 8.50909C11.0865 9.14605 10.6998 9.7248 10.2123 10.2123C9.7248 10.6998 9.14605 11.0865 8.50909 11.3504C7.87213 11.6142 7.18944 11.75 6.5 11.75C5.81056 11.75 5.12787 11.6142 4.49091 11.3504C3.85395 11.0865 3.2752 10.6998 2.78769 10.2123C2.30018 9.7248 1.91347 9.14605 1.64963 8.50909C1.3858 7.87213 1.25 7.18944 1.25 6.5C1.25 5.10761 1.80312 3.77226 2.78769 2.78769C3.77226 1.80312 5.10761 1.25 6.5 1.25C7.89239 1.25 9.22774 1.80312 10.2123 2.78769C11.1969 3.77226 11.75 5.10761 11.75 6.5Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="text-slate-500">Search</span>
                  </div>
                </SelectTrigger>
                <SelectContent></SelectContent>
              </Select>
            </div>

            <div>
              <p className="py-1">Rationale</p>
              <p className="text-xs font-light text-slate-500 mb-2">
                Be sure to reference specific information from the clinical presentation, patient history,
                and physical exam findings.
              </p>
              <Textarea placeholder="Write text here ..." />
            </div>
          </div>

        </CardContent>
      </Card>
    </>
  )
}
