import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Bookingpage from "./pages/Bookingpage";
import Homepage from "./pages/Homepage";
import Offerspage from "./pages/Offerspage";
import Packagespage from "./pages/Packagespage";
import Tripcostestimatorpage from "./pages/Tripcostestimatorpage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/bookingpage" element={<Bookingpage />} />
          <Route path="/offerspage" element={<Offerspage />} />
          <Route path="/packagespage" element={<Packagespage />} />
          <Route path="/tripcostestimatorpage" element={<Tripcostestimatorpage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
