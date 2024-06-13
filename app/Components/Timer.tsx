"use client"
import { useState, useEffect } from "react"

export default function Timer() {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const minutes = Math.floor(time / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <>
      <div className="flex justify-center items-center">
        <span className="text-indigo-600 font-medium">{minutes}:{seconds}</span>
      </div>
    </>
  )

}
