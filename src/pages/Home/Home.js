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
                    <h2>You need a DJ for your next party</h2>
                    <br></br>
                    <h4>Find the DJ that suits you in one week. <br></br>Bars, Clubs, Weddings, Private Parties, Brithday Parties ...</h4>

                    <div className="buttons">
                    <Button className ="button" variant="info"><Link to="/djs">Find your DJ</Link></Button>
                   <Link className="adj" to="/gigs">I'm a DJ</Link>
                    </div>
                </header>

            </div>
        );
    }
}


export default Home;
