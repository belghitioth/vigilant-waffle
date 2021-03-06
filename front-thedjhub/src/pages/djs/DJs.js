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

import "./DJs.css";

class DJs extends Component {

    constructor(  ) {
        super();
        this.state= {
            number_of_djs: 10,
            djs: [],
        };
    }

    componentDidMount() {
        let rootRef = firebase.database().ref();
        let artistsRef= rootRef.child('artists');

        artistsRef.on('value',snap =>{
            let djs =snap.val();
            let newState = [];
            for (let dj in djs) {
                newState.push({
                    name: djs[dj].name,
                    description: djs[dj].description,
                    price: djs[dj].price,
                    image: djs[dj].image,
                    genre: djs[dj].genre,
                });
            }
            this.setState({
                djs: newState
            });
        })
    };

    render() {

        return (
            <div className="Venues">
                <HeadNavbar></HeadNavbar>
                <div className="Cards">
                    {this.state.djs.map(( dj ) => (
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia
                                    className="media"
                                    image={dj.image}
                                    title={dj.name}
                                />
                                <CardContent className="horizontalDJ">
                                    <Typography gutterBottom variant="h4" component="h2">
                                        {dj.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" color="secondary" component="h2">
                                        {dj.genre}
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography variant="h6" color="textSecondary" component="p">
                                        A partir de {dj.price} € /hour
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Réserver
                                </Button>
                                <Button size="small" color="primary">
                                    En savoir plus
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
}

export default DJs;
