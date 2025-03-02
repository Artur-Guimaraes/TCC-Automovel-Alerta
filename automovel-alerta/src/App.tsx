import { BrowserRouter, Routes, Route } from "react-router"
import { Home } from "./pages/home";
import { AuthLayout } from "./pages/auth/auth-layout";
import { SignUp } from "./pages/auth/sign-up";
import { SignIn } from "./pages/auth/sign-in";
import { MyVehicles } from "./pages/my-vehicles";
import { Maintenance } from "./pages/maintenance";

export function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="vehicles" element={<MyVehicles />} />
          <Route path="maintenance" element={<Maintenance />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>    
  )
}
