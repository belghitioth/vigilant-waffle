import React,{Component} from "react";
import HeadNavbar from "../../components/Navbar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Modal from 'react-bootstrap/Modal'

import * as firebase from 'firebase/app';
import 'firebase/database';

import "./Gigs.css";

class Gigs extends Component {

    constructor(  ) {
        super();
        this.state= {
            number_of_bars: 10,
            bars: [],
        };
    }

    componentDidMount() {
        let rootRef = firebase.database().ref();

        let barsRef= rootRef.child('bars');

        barsRef.on('value',snap =>{
            let bars =snap.val();
            let newState = [];
            for (let bar in bars) {
                newState.push({
                    name: bars[bar].name,
                    description: bars[bar].description,
                    image: bars[bar].image,
                });
            }
            this.setState({
                bars: newState
            });
        })
    };





    render() {

        // const [show, setShow] = React.useState(false);
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
        //

        return (
            <div className="Gigs">
                <HeadNavbar></HeadNavbar>
                <div className="Cards">
                    {this.state.bars.map(( bar ) => (
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia
                                    className="media"
                                    image={bar.image}
                                    title={bar.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {bar.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {bar.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Find a gig
                                </Button>
                                {/*<Modal show={show} onHide={handleClose}>*/}
                                {/*    <Modal.Header closeButton>*/}
                                {/*        <Modal.Title>Modal heading</Modal.Title>*/}
                                {/*    </Modal.Header>*/}
                                {/*    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>*/}
                                {/*    <Modal.Footer>*/}
                                {/*        <Button variant="secondary" onClick={handleClose}>*/}
                                {/*            Close*/}
                                {/*        </Button>*/}
                                {/*        <Button variant="primary" onClick={handleClose}>*/}
                                {/*            Save Changes*/}
                                {/*        </Button>*/}
                                {/*    </Modal.Footer>*/}
                                {/*</Modal>*/}
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>

        );
    }
}

export default Gigs;
