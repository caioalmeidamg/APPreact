import React from "react";
import Header from "./Header";

import { useParams, Link } from "react-router-dom";
import Seguinte from "./Seguinte";

function seguinte() {
    return (<Link to={Seguinte}>botão</Link>)
}

const Home = () => {

    const parametros = useParams();
    console.log(parametros);

        return (
            <>
                <Header headerColor= {parametros.cor} headerHeight="20vh"/>
                <Link to={"/Seguinte"} style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: 'grey',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s',
                    border: 'none',
                    cursor: 'pointer'
                }}>botão legal</Link>
            </>
        );
  
};
 export default Home;

