interface Props {
  text: string;
}

export const ScheduleTitle = ({ text }: Props) => {
  return (
    <div className="inline-block border-b! border-[#83B833]! mb-4">
      <p className="text-light text-[22px]">{text}</p>
    </div>
  );
};
