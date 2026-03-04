interface Props {
  text: string;
}

export const ScheduleTitle = ({ text }: Props) => {
  return (
    //  TODO: Chakraを削除したら!を外す
    <div className="inline-block border-b! border-[#83B833]! mb-4">
      <p className="text-light text-[22px]">{text}</p>
    </div>
  );
};
