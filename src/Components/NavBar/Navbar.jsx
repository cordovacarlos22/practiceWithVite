
import {
  createBrowserRouter,
} from "react-router-dom";
const Navbar = () => {

  const listArray = createBrowserRouter([
    {
      name: 'Home',
      path: "/",
      element: <Home/>,
    },
    {
      name: 'Citas',
      path: "/citas",
      element: <Home/>,
    },
    {
      name: 'Servicios',
      path: "/servicios",
      element: <Home/>,
    },
    {
      name: 'Contactanos',
      path: "/contactanos",
      element: <Home/>,
    },
  ]);

  

  return (
    <div className="w-100 d-flex flex-row">
     {listArray && listArray.map(e =>(
      <ul key ={e.name + 1}>
        
      </ul>
     ))}
    </div>
  )
}

export default Navbar
