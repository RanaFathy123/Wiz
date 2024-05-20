import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../../assets/image/Logo.png";
import { TbWorld } from "react-icons/tb";
// import { TbWorld } from "react-icons/tb";
import megamenueimg1 from "../../../../../assets/image/mega-menu-img-1.png";
import megamenuimg2 from "../../../../../assets/image/mega-menu-img2.png";

const navListMenuItems = [
  {
    title: "تطوير المواقع",
    classTitle: "fa-solid fa-mobile text-red-200 ",
  },
  {
    title: "تصميم وتطوير التطبيقات",
    classTitle: "fa-solid fa-computer text-green-200",
  },
];
const navListMenuItems2 = [
  {
    title: "الاستضافة السحابية",
    classTitle: "fa-solid fa-mobile",
  },
  {
    title: "استضافة الويب",
    classTitle: "fa-solid fa-mobile",
  },
  {
    title: "الخادم الخاص",
    classTitle: "fa-solid fa-mobile",
  },
  {
    title: "ادارة السيرفرات",
    classTitle: "fa-solid fa-mobile",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(({ classTitle, title }, key) => (
    <Link to="/services" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg ">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          <i className={classTitle}></i>
        </div>
        <Typography
          as="div"
          color="blue-gray"
          className="flex items-center  font-bold text-[1.1em]"
        >
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ));
  const renderItems2 = navListMenuItems2.map(({ classTitle, title }, key) => (
    <Link to="/services" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg ">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          <i className={classTitle}></i>
        </div>

        <Typography
          as="div"
          color="blue-gray"
          className="flex items-center  font-bold text-[1.1em]"
        >
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 text-[1.1em]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              خدماتنا
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden overflow-auto w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden  max-w-full w-full px-3 rounded-lg lg:block ">
          <div className="text-[1.1em] font-extrabold m-3 text-black outline-none outline-0  container mx-auto !px-0 !py-3">
            التصميم والتطوير
          </div>
          <ul className="grid grid-cols-4 w-full gap-y-2 outline-none outline-0 container  mx-auto !px-0 !py-0">
            {renderItems}
          </ul>
          <div className="text-[1.1em] font-extrabold m-4 text-black outline-none outline-0 container mx-auto !px-0 !py-3">
            خدمات الإستضافة
          </div>
          <ul className="grid grid-cols-4 w-full gap-y-2 outline-none outline-0 container mx-auto !px-0 !py-0">
            {renderItems2}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden auto">
        <Collapse open={isMobileMenuOpen}>
          <div className="text-[1.1em] font-bold m-3 text-black outline-none outline-0 ">
            التصميم والتطوير
          </div>
          {renderItems}
          <div className="text-[1.1em] font-bold m-4 text-black outline-none outline-0 ">
            خدمات الإستضافة
          </div>
          {renderItems2}
        </Collapse>
      </div>
    </React.Fragment>
  );
}
function NavList() {
  return (
    <List className="mt-4 mb-6  lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 p-5">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-bold text-blue-900 !hover:bg-sky-700  text-[1.1em]">
          الرئيسية
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href=""
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/about"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-[1.1em]">
            من نحن
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 p-2 text-[1.1em]">
          العملاء
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href=""
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"blogs"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 p-2 text-[1.1em]">
            مدونات
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const [changeLanguage, setChangeLanguage] = useState(false);

  const handleChangeLanguage = () => {
    setChangeLanguage(!changeLanguage);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="max-w-full  lg:fixed z-50   top-0 ">
      <div className="flex items-center container mx-auto !px-0 !py-0 justify-between text-blue-gray-900 ">
        <Typography
          as="div"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <img src={Logo} alt="logo" className="w-[3.5em]" />
        </Typography>
        {/* ------------- */}
        <div className="over-flow-auto hidden lg:block ">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex items-center cursor-pointer ">
          <span onClick={handleChangeLanguage}>
            {changeLanguage ? "English" : "عربى"}
          </span>
          <TbWorld
            onClick={handleChangeLanguage}
            className="text-[2em] ml-3 text-[#121F4E]"
          />
          <button className="bg-[#121F4E] text-[0.7em]  text-white font-bold py-3 px-[2em] rounded-[100px]">
            تواصل معانا
          </button>
        </div>
        <div
          className="flex items-center justify-start ms-auto gap-2 lg:hidden cursor-pointer"
          onClick={handleChangeLanguage}
        >
          <span className="cursor-pointer">
            {changeLanguage ? "English" : "عربى"}
          </span>
          <TbWorld className="cursor-pointer text-[2em]  text-[#121F4E]" />
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <button className="bg-[#121F4E] text-[0.9em]   text-white font-bold py-3 px-[2em] rounded-[100px]">
            تواصل معانا
          </button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
