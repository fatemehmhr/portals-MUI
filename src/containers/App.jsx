import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useMediaQuery } from "@mui/material";
import { Sidebar } from "../components/sidebar";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import PagesContainer from "./PagesContainer";
import { Page } from "../components/pages";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { Home, About, Resume, Courses, Comments, Contact } from "../pages";


function App() {

  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };


  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews
            index={pageNumber}
            onChangeIndex={handlePageNumber}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle="وب سایت شخصی یونس قربانی" />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle="وب سایت شخصی | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle="وب سایت شخصی | رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Courses helmetTitle="وب سایت شخصی | دوره های من" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle="وب سایت شخصی | نظرات دانشجویان" />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitle="وب سایت شخصی | ارتباط با من" />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
