import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { PrincipalPage } from "../pages/PrincipalPage";
import { Collserola } from "../pages/Collserola";
import { DeltaLlobregat } from "../pages/DeltaLlobregat";
import { DeltaLlobregat2 } from "../pages/DeltaLlobregat2";
import { MontanaMontserrat } from "../pages/MontanaMontserrat";
import { PantanoVallvidrera } from "../pages/PantanoVallvidrera";
import { ParqueNaturalGarraf } from "../pages/ParqueNaturalGarraf";
import { Pedraforca } from "../pages/Pedraforca";
import { SanLorenzoMola } from "../pages/SanLorenzoMola";
import { Montseny } from "../pages/Montseny";
import { NotFoundPage } from "../pages/NotFoundPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <PrincipalPage /> },
      { path: "collserola", element: <Collserola /> },
      { path: "pantano-vallvidrera", element: <PantanoVallvidrera /> },
      { path: "parque-montseny", element:<Montseny/>}, 
      { path: "delta-llobregat", element: <DeltaLlobregat /> },
      { path: "montana-montserrat", element: <MontanaMontserrat /> },
      { path: "pedraforca", element: <Pedraforca /> },
      { path: "delta-llobregat-2", element: <DeltaLlobregat2 /> },
      { path: "parque-natural-garraf", element: <ParqueNaturalGarraf /> },
      { path: "san-lorenzo-mola", element: <SanLorenzoMola /> },
      { path: "*", element: <NotFoundPage /> },  // Ruta 404
    ],
  },
]);
