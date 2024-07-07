import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dropoff from "./pages/dropoff";
import Pickup from "./pages/pickup";
import Schedule from "./pages/schedule";
import Transactions from "./pages/transactions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="mx-auto overflow-hidden flex flex-col min-h-screen font-satoshi">
            <Header />
            <ToastContainer />
            <div className="px-[5%] text-sm">
              <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/dropOff" element={<Dropoff />}></Route>
                <Route path="/pickup" element={<Pickup />}></Route>
                <Route path="/schedule" element={<Schedule />}></Route>
                <Route path="/transactions" element={<Transactions />}></Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
