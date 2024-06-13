import {
  Card,
  CardContent,
  CardTitle,
  CardHeader
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { doctors } from "./directory_temp";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function HospitalDirectory() {

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-normal text-lg">Hospital Directory</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="max-h-[38rem] overflow-y-auto">
          {doctors.map((doctor, index) => {
            return (
              <button className="flex items-start gap-4 w-full my-2 hover:bg-slate-100 transition-color duration-200 rounded-lg px-2 py-1" key={index}>
                <Avatar className="rounded-lg">
                  <AvatarFallback className="rounded-lg bg-avatar-color text-white">{doctor.initials}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start">
                  <p className="text-sm">{doctor.name}</p>
                  <p className="text-xs font-thin">Click to start live chat!</p>
                  <Badge className="bg-slate-200 text-slate-600 hover:bg-slate-200 text-xs">{doctor.specialty}</Badge>
                </div>

              </button>
            )
          })}
        </CardContent>
      </Card>
    </>
  )

}
