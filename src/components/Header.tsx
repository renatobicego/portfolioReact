import { Backdrop, Drawer } from "@mui/material";
import AboutMe from "./AboutMe";
import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };
  useEffect(() => {
    if (openDrawer && open) {
      setOpenDrawer(false);
    }
  }, [openDrawer, open]);
  return (
    <header
      className="flex fixed top-0 right-0 justify-end items-start lg:items-center 
                text-base 3xl:text-lg lg:pr-16 lg:h-auto lg:max-xl:text-sm lg:pt-[7.5vh] z-10"
    >
      <nav className="gap-x-8 list-none hidden lg:flex relative backdrop-blur-sm">
        <li>
          <button onClick={handleOpen}>ABOUT ME</button>
        </li>
        <li>
          <a href="#DesignAndDev">DESIGN & DEV</a>
        </li>
        <li>
          <a href="#Photography">PHOTOS</a>
        </li>
        <li>
          <a href="#Contact">CONTACT</a>
        </li>
      </nav>
      <div className="lg:hidden relative z-10">
        <button
          onClick={toggleDrawer(true)}
          className="mt-8 mr-7 md:mt-12 md:mr-10"
        >
          <img className="w-8 md:w-10 " src="img/icons/menu-50.svg" alt="" />
        </button>
        <Drawer
          anchor={"right"}
          open={openDrawer}
          onClose={toggleDrawer(false)}
        >
          <div className="z-20 vertical-header w-20 md:w-32 h-screen overflow-x-hidden flex items-center gap-8 pt-8 md:pt-12">
            <button onClick={toggleDrawer(false)}>
              <img className="w-6 md:w-8 " src="img/icons/close.svg" alt="" />
            </button>
            <nav className="w-full flex items-center gap-x-8 list-none text-white text-sm">
              <li onClick={handleOpen}>
                ABOUT ME
              </li>
              <li>
                <a onClick={toggleDrawer(false)} href="#DesignAndDev">
                  DESIGN & DEV
                </a>
              </li>
              <li>
                <a onClick={toggleDrawer(false)} href="#Photography">
                  PHOTOS
                </a>
              </li>
              <li>
                <a onClick={toggleDrawer(false)} href="#Contact">
                  CONTACT
                </a>
              </li>
            </nav>
          </div>
        </Drawer>
      </div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme: { zIndex: { drawer: number } }) =>
            theme.zIndex.drawer + 1,
          backdropFilter: "blur(3px)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
        open={open}
      >
        <AboutMe handleClose={handleClose} />
      </Backdrop>
    </header>
  );
};

export default Header;
