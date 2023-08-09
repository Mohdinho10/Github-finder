import { BrowserRouter, Route, Routes } from "react-router-dom";
import Naviagiton from "./components/Layout/Naviagiton";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Alert from "./components/Layout/Alert";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./Context/GithubContext";
import { AlertProvider } from "./Context/AlertContext";
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen">
            <Naviagiton />
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Home /> <Alert />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
