import React from "react";
import Header from "./Header";

import { useParams } from "react-router-dom";


const Seguinte = () => {

    const parametros = useParams();
    console.log(parametros);

        return (
            <>
                <Header headerColor= {"grey"} />
            </>
        );
  
};
 export default Seguinte;