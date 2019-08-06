import HeadNavbar from "../../components/Navbar";
import React,{Component} from "react";

import "./Home.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class Home extends Component{

    render() {

        return (

            <div className="Home">
                <HeadNavbar/>

                <header className="App-header">
                    <h2>Tu as besoin d'un DJ pour ta prochaine soirée</h2>
                    <br></br>
                    <h4>Book le DJ qui te convient en 1 semaine.<br></br>Bars, Clubs, Mariages, Soirées Privées, Soirées d'entreprises, Anniversaires ...</h4>

                    <div className="buttons">
                    <Button className ="button" variant="info"><Link to="/djs">Book un DJ</Link></Button>
                   <Link className="adj" to="/gigs">Je suis DJ</Link>
                    </div>
                </header>

            </div>
        );
    }
}


export default Home;
