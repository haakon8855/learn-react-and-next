import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ListComponent = ({ children }: Props) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-md shadow-md border border-gray-200 w-48 text-gray-900 text-sm font-medium">
        {children}
      </div>
    </div>
  );
};

export default ListComponent;
