import Addtask from "./pages/Addtask";
import Home from "./components/Home";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateTask from "./pages/UpdateTask";
import ViewList from "./pages/ViewList";
export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            iconTheme: {
              primary: 'green',
              secondary: 'yellow',
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtask" element={<Addtask />} />
          <Route path="/updatetask" element={<UpdateTask />} />
          <Route path="/viewlist" element={<ViewList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}