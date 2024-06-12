import {RouterProvider, createBrowserRouter} from "react-router-dom";
import React from "react";
import  Home from "../componentes/Home";
import Seguinte from "../componentes/Seguinte";

//Básicamente o arquivo que será responsável por carregar todas as páginas da aplicação

//Componente carregada na App.js que executa as rotas necessárias
const Rotas = () => {
    
    const rotas = createBrowserRouter([
        {
            path: "", 
            element: <Home/>
        },
        {
            path: "/:cor", 
            element: <Home/>
        },
        {
            path: "/:cor/:altura", 
            element: <Home />
        },
        {
            path: "/seguinte",
            element: <Seguinte />
        }
    ])
    return (<RouterProvider router={rotas}/>)
    
};
export default Rotas;

