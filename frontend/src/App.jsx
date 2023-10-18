import Layout from "./components/Layout"
import Properties from "./pages/Properties"
import Website from "./pages/Website"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Property from "./pages/Property"
import { useState } from "react"
import UserDetailsContext from "../context/UserDetailsContext"
function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Website />} />
              <Route path="/properties">
                <Route index element={<Properties />} />
                <Route path=":propertyID" element={<Property />} />
              </Route>
            </Route>
          </Routes>
          <ToastContainer />
        </BrowserRouter >
      </QueryClientProvider>
    </UserDetailsContext.Provider>
  )
}

export default App
