import React,{Component} from "react";
import HeadNavbar from "../../components/Navbar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import * as firebase from 'firebase/app';
import 'firebase/database';

import "./Events.css";

class Events extends Component {

    constructor(  ) {
        super();
        this.state= {
            number_of_events: 10,
            events: [],
        };
    }

    componentDidMount() {
        let rootRef = firebase.database().ref();

        let eventsRef= rootRef.child('events');

        eventsRef.on('value',snap =>{
            let events =snap.val();
            let newState = [];
            for (let event in events) {
                newState.push({
                    name: events[event].name,
                    description: events[event].description,
                    image: events[event].image,
                    date: events[event].date,
                    price: events[event].price,
                });
            }
            this.setState({
                events: newState
            });
        })
    };





    render() {

        // const [show, setShow] = React.useState(false);
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
        //

        return (
            <div className="Events">
                <HeadNavbar></HeadNavbar>
                <div className="Cards">
                    {this.state.events.map(( event ) => (
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia
                                    className="media"
                                    image={event.image}
                                    title={event.name}
                                />
                                <CardContent className="horizontal">
                                    <Typography gutterBottom variant="h5" color="secondary" component="h2">
                                        {event.date}
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary" component="p">
                                        A partir de {event.price} €
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                       {event.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Billeterie
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
                                    EN SAVOIR PLUS
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>

        );
    }
}

export default Events;
