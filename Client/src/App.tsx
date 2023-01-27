import { Navigate, Route } from "react-router";
import { Routes,BrowserRouter,Outlet } from "react-router-dom";
import RouteGuard from "./components/RouteGuard";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="_/login" element={<Login />}></Route>
        <Route path="/">
          {/* The School Website */}
        </Route>
        <Route element={<RouteGuard isAllowed={true} />}>
          <Route path="_/">
            <Route index element={<Dashboard />}></Route>
          </Route>
          {/* the The Student And teacher dashboard */}
          <Route element={<RouteGuard isAllowed={false} />}>
            <Route path="/student">
                {/* Student dashboard */}
            </Route>
            <Route path="/teacher">
                {/* Teacher dashboard */}
            </Route>
              
          </Route>
        
        </Route>
        <Route path="*" element={<Navigate to="/" replace /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
