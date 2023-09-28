import NavbarItem, { Arrow } from "./NavbarItem";

type Props = {
  navIndexes: number[];
};

const Navbar = ({ navIndexes }: Props) => {
  return (
    <div className="flex mb-0 mt-auto">
      <div className="max-w-2xl mx-auto mb-0 mt-auto">
        <nav aria-label="Page navigation">
          <ul className="inline-flex items-center -space-x-px">
            <NavbarItem index={navIndexes[1]} arrow={Arrow.Left} />
            <NavbarItem index={navIndexes[0]} />
            <NavbarItem index={navIndexes[1]} />
            <NavbarItem index={navIndexes[2]} current />
            <NavbarItem index={navIndexes[3]} />
            <NavbarItem index={navIndexes[4]} />
            <NavbarItem index={navIndexes[3]} arrow={Arrow.Right} />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
