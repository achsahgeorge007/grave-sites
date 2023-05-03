import { FiGrid, FiDollarSign, FiFileText, FiSettings } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
export const navbar = [
  {
    id: 0,
    name: "Maintain",
    link: "",
    icon: FiGrid,
  },
  {
    id: 1,
    name: "Payments",
    link: "",
    icon: FiDollarSign,
    child: null,
  },
  {
    id: 2,
    name: "Reports",
    link: "",
    icon: FiFileText,
    child: null,
  },
];
export const iconMenu = [
  {
    id: 0,
    link: "",
    icon: BiSearch,
  },
  {
    id: 1,
    link: "",
    icon: FiSettings,
  },
  {
    id: 2,
    link: "",
    icon: HiOutlineQuestionMarkCircle,
  },
];
