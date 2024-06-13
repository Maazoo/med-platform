type Props = {
  examName: string;
}

export default function ExamDisplay({ examName }: Props) {

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <p>This is where the {examName.toLowerCase()} is displayed.</p>
        </div>
      </div>
    </>
  )
}
