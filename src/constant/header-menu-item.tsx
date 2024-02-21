import React from "react";
import { GoPeople } from "react-icons/go";
import { GiSelfLove } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";

export interface HeaderMenuItem {
  id: number;
  title: string;
  icons: React.ReactNode;
  onClick?: () => void;
}

// const [nav , setNav] = useState(false)

export const HEADER_MENU_ITEM: HeaderMenuItem[] = [
  {
    id: 1,
    title: "Sign In",
    icons: <GoPeople color="white" size={20} />,
  },
  {
    id: 2,
    title: "Favorites",
    icons: <GiSelfLove color="white" size={20} />,
  },
  {
    id: 3,
    title: "$ 0.00",
    icons: <FaOpencart color="white" size={20} />,
  },
] as const;
