import { FC } from "react";
import { cn } from "../../utils/cn";

interface Props {
  item: {
    label: string;
    width: number;
  };
}

const HeadItem: FC<Props> = ({ item }) => {
  return <div className={cn(`md:w-[${item.width}%]`)}>{item.label}</div>;
};

export default HeadItem;
