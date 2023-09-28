import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  first: boolean;
  last: boolean;
};

const ListItemComponent = ({ children, first, last }: Props) => {
  return (
    <div
      className={
        "flex px-4 py-2 border-b border-gray-200 w-full" +
        (first ? " rounded-t-lg" : "") +
        (last ? " rounded-b-lg" : "")
      }
    >
      {children}
    </div>
  );
};

export default ListItemComponent;
