import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Route>
        <Route path="auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
