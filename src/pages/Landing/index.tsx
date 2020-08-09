import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logotipo from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

import './styles.css';

function Landing(){
    
    const [totalConnections, setTotalConnectios] = useState(0);

    useEffect(() =>{
        api.get('connections').then(response =>{
            const {total} = response.data;

            setTotalConnectios(total);
        })
    }, []);

    return (
        <div id="page-landing">
           <div id="page-landing-content" className="container">
               <div className="logo-container">
                <img src={logotipo} alt="Proffy" />
                <h2>Sua plataforma de estudo online.</h2>
               </div>

               <img 
                 src={landingImg} 
                 className="hero-image" 
                 alt="Plataforma de estudo" 
               />

                <div className="buttons-container">
                    <Link to="/study" className="study" >
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes" >
                        <img src={giveClassesIcon} alt="Estudar" />
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>

           </div>
        </div>
    )
}

export default Landing;