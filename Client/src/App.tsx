import { Route } from "react-router";
import { Routes,BrowserRouter,Outlet } from "react-router-dom";
import RouteGuard from "./components/RouteGuard";
import Dashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/Login";
import Landing from "./pages/Landing";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Choose Between The Admin App, Student app And The Teacher App */}
        <Route path="/" element={<Landing />} />
        {/* Auth  Required */}
        <Route element={<RouteGuard isAllowed={true} />}>
          <Route path="admin">
            <Route index element={<Dashboard />}></Route>
            <Route path="login" element={<AdminLogin />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
