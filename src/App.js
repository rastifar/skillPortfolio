import Login from "./pages/Login";
import Dashbord from "./pages/Dashbord";
import { Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import { BrowserRouter } from "react-router-dom";
import RequiredAuth from "./components/RequiredAuth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashbord"
            element={
              <RequiredAuth>
                <Dashbord />
              </RequiredAuth>
            }
          />
          <Route path="/" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
