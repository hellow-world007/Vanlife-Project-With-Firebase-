import './App.css'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  Route,
  redirect } from 'react-router-dom'

import Home from './page/Home'
import About from './page/About'
import NotFound from './page/NotFound'
import Login from './page/Login'
import Error from './components/Error'

import Layout from './components/Layout'
import HostLayout from './components/HostLayout'

import Dashboard from './page/Host/Dashboard'
import Reviews from './page/Host/Reviews'
import Income from './page/Host/Income'

import Vans, { loader as vansLoader } from './page/Vans/Vans'
import VansDetails, { loader as vanDetailsLoader} from './page/Vans/VansDetails'
import './server.js'
// import { requireAuth } from './Utils'
import HostVans, { loader as hostVansLoader } from './page/Host/HostVans'
import HostVansDetails, { loader as hostVanDetailsLoader } from './page/Host/HostVansDetails'

// import HostVansDetailsLayout from './page/Host/HostVansDetailsLayout'
import HostVansDetailsInfo from './page/Host/HostVansDetailsInfo' 
import HostVansDetailsPricing from './page/Host/HostVansDetailsPricing'
import HostVansDetailsPhotos from './page/Host/HostVansDetailsPhotos'
import AuthRequired from "./AuthRequired"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
      />
      <Route 
        path="vans" 
        element={<Vans />} 
        errorElement={<Error />} 
        loader={vansLoader} 
      />
      <Route 
        path="vans/:id" 
        element={<VansDetails />}
        loader={vanDetailsLoader} 
      />
      <Route element={<AuthRequired />}>
        
        <Route path="host" element={<HostLayout />} >
          <Route 
            index 
            element={<Dashboard />}
            // loader = {async () => {
            //   return null
            // }}
            // loader={async () => await requireAuth()}  
          />
          <Route 
            path="income" 
            element={<Income />}
            // loader = {async () => {
            //   return null
            // }}  
          />
          <Route 
            path="reviews" 
            element={<Reviews />}
            // loader = {async () => {
            //   return null
            // }}  
          />
          <Route 
            path="vans" 
            element={<HostVans />}
            loader = {hostVansLoader}  
          />
          {/* <Route path="vans/:id" element={<HostVansDetailsLayout />} > */}
            <Route 
              path="vans/:id" 
              element={<HostVansDetails />}
              loader = {hostVanDetailsLoader}  
            >
              <Route 
                index 
                element={<HostVansDetailsInfo />}
                // loader = {async () => {
                //   return null
                // }}  
              />
              <Route 
                path="pricing" 
                element={<HostVansDetailsPricing />}
                // loader = {async () => {
                //   return null
                // }}  
              />
              <Route 
                path="photos" 
                element={<HostVansDetailsPhotos />}
                // loader = {async () => {
                //   return null
                // }}  
              />
            </Route>
          {/* </Route> */}
        </Route>

      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
