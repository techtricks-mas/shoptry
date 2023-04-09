import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Componenets/RootLayout";
import Home from "./Componenets/Pages/Home";
import Shop from "./Componenets/Pages/Shop";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
