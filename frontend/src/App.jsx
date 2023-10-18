import Layout from "./components/Layout"
import Properties from "./pages/Properties"
import Website from "./pages/Website"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Property from "./pages/Property"
function App() {
  const queryClient = new QueryClient();
  return (
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
  )
}

export default App
