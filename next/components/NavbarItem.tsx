import Link from "next/link";
import NavbarArrow from "./NavbarArrow";

export enum Arrow {
  None,
  Left,
  Right,
}

type Props = {
  index: number;
  arrow?: Arrow;
  current?: boolean;
};

const NavbarItem = ({ index, arrow = Arrow.None, current = false }: Props) => {
  const atagClassName = () => {
    switch (arrow) {
      case Arrow.Left:
        return "block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
      case Arrow.Right:
        return "block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
      default:
        return current
          ? "py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300  dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
    }
  };

  return (
    <li>
      {index ? (
        <Link href={`/pokemon/${index}`} className={atagClassName()}>
          {arrow ? <NavbarArrow direction={arrow} /> : index}
        </Link>
      ) : (
        <></>
      )}
    </li>
  );
};

export default NavbarItem;
