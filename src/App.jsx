import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route element={<PrivateRoutes />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route element={<PublicRoutes />}>
              <Route path="auth" element={<AuthPage />} />
            </Route>
            <Route path="/:username" element={<ProfilePage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
