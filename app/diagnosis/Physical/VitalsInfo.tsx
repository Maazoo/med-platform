
export default function VitalsInfo() {

  return (
    <>
      <div className="flex justify-between gap-2 px-6 py-3">
        <div className="basis-7/12">
          <h2 className="text-xl">Information</h2>
          <div className="border-2 h-64 mt-5 rounded-lg"></div>
        </div>

        <div className="basis-5/12">
          <h2 className="text-xl">Vitals</h2>
          <div className="flex flex-col h-64 mt-5 justify-between">
            <div className="flex justify-between items-end">
              <p className="font-medium">Heart Rate</p>
              <p className="text-purple text-sm">78 BPM</p>
            </div>

            <div className="flex justify-between items-end">
              <p className="font-medium">BP (Standing)</p>
              <p className="text-purple text-sm">110/70 mmHg</p>
            </div>

            <div className="flex justify-between items-end">
              <p className="font-medium">BP (Supine)</p>
              <p className="text-purple text-sm">112/72 mmHg</p>
            </div>

            <div className="flex justify-between items-end">
              <p className="font-medium">Respiratory Rate</p>
              <p className="text-purple text-sm">16 breaths/min</p>
            </div>

            <div className="flex justify-between items-end">
              <p className="font-medium">Oxygen Saturation</p>
              <p className="text-purple text-sm">98%</p>
            </div>

            <div className="flex justify-between items-end">
              <p className="font-medium">Temperature</p>
              <p className="text-purple text-sm">36.8&deg;C (98.2&deg;F)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
