import { Navigate, Route } from "react-router";
import { Routes,BrowserRouter,Outlet } from "react-router-dom";
import RouteGuard from "./components/RouteGuard";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";

function App() {

  return (
    // Is Allowed means anything( Like Auth Or something ) 
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route element={<RouteGuard isAllowed={true} />}>
          <Route path="_/">
            <Route index element={<Dashboard />}></Route>
          </Route>
          {/* the The Student And teacher dashboard */}
          {/* Check First if the User Is Has the Correct Role */}
          <Route element={<RouteGuard isAllowed={true} />}> 
            <Route path="/student">
                {/* Student dashboard */}
              <Route path="*" element={<Navigate to="/student" replace /> } />
            </Route>
          </Route>

          
        
        </Route>

        <Route path="*" element={<Navigate to="/login" replace /> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
