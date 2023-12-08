import { Flex, Box, Spinner } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function PageLayout() {
  const { pathname } = useLocation();
  const { user, loading } = useContext(AuthContext);
  const renderSidebar = pathname !== "/auth" && user;
  const renderNavbar = pathname !== "/auth" && !user && !loading;
  const renderSpinner = !user && loading;

  if (renderSpinner) return <PageLayoutSpinner />;

  return (
    <Flex direction={renderNavbar ? "column" : "row"}>
      {/* Sidebar */}
      {renderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* Navbar */}
      {renderNavbar ? <Navbar /> : null}
      <Box
        flex={1}
        w={
          renderSidebar
            ? { base: "calc(100% - 70px)", md: "calc(100% - 240px)" }
            : "full"
        }
      >
        <Outlet />
      </Box>
    </Flex>
  );
}

export default PageLayout;

function PageLayoutSpinner() {
  return (
    <Flex
      direction={"column"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size={"xl"} />
    </Flex>
  );
}
