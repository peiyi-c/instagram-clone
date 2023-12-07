import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
