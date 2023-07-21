// import React from 'react'
// import { NavLink,Outlet } from 'react-router-dom'

// const HostVansDetailsLayout = () => {

//   const activeStyles={
//     fontWeight: 'bold',
//     textDecoration: 'underline',
//     color: '#161616'
//   }

//   return (
//     <>
//       <div className="host-links-container">
//         <NavLink 
//           to="/host/vans/:id/details"
//           style={({isActive}) => isActive ? activeStyles : null}
//         > 
//           Details
//         </NavLink>

//         <NavLink 
//           to="/host/vans/:id/pricing"
//           style={({isActive}) => isActive ? activeStyles : null}
//         > 
//           Pricing
//         </NavLink>

//         <NavLink 
//           to="/host/vans/:id/photos"
//           style={({isActive}) => isActive ? activeStyles : null}
//         > 
//           Photos
//         </NavLink>
//       </div>
//       <Outlet />
//     </>
//   )
// }

// export default HostVansDetailsLayout