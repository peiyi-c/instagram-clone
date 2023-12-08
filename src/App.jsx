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
            {/* only when user */}
            <Route element={<PrivateRoutes />}>
              <Route index element={<HomePage />} />
            </Route>
            {/* only when !user */}
            <Route element={<PublicRoutes />}>
              <Route path="auth" element={<AuthPage />} />
            </Route>
            {/* user || !user */}
            <Route path="/:username" element={<ProfilePage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
