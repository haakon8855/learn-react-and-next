import { Card } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const InfoCard = ({ children }: Props) => {
  return <Card style={{ backgroundColor: "#f8f8f8" }}>{children}</Card>;
};

export default InfoCard;
