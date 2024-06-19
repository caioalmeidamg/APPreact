import React from "react";
import Header from "./Header";

import { useParams, Link } from "react-router-dom";


const Home = () => {

    const parametros = useParams();
    console.log(parametros);

        return (
            <div style={{textAlign: "center"}}>
                <Link to="/Seguinte" className="homeButton" >Botão legal</Link>
            </div>
        );
  
};
 export default Home;

