import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class CarouselsGeneratorComponent extends Component {
    state = {
        carousels: [{
            image: "https://w0.peakpx.com/wallpaper/512/761/HD-wallpaper-royal-challengers-bangalore-escn-ipl2020-rcb-thumbnail.jpg",
            title: "Royal Challengers Bengaluru"
        }, {
            image: "https://logowik.com/content/uploads/images/chennai-super-kings3461.jpg",
            title: "Chennai Super Kings"
        }, {
            image: "https://w0.peakpx.com/wallpaper/818/862/HD-wallpaper-mumbaiindiansblue-ambani-blue-cricket-csk-hardik-pandey-indian-premier-league-ipl-mi-mumbai-indians-rohit-sharma-thumbnail.jpg",
            title: "Mumbai Indians"
        }],
        newCarousel: {
            image: "https://wallpapercave.com/dwp1x/wp4128423.jpg",
            title: "Sunrisers Hyderabad"
        }
    }

    addNewCarousel = () => {
        this.setState({
            carousels: [...this.state.carousels, this.state.newCarousel]
        });
    }

    render() {
        return (
            <>
                <Carousel data-bs-theme="dark">
                    {
                        this.state.carousels.map((eachImage, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <center>
                                        <img src={eachImage.image} alt="" width={500} height={500} />
                                    </center>
                                    <Carousel.Caption>
                                        <h3>{eachImage.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            );
                        })
                    }
                </Carousel>
                <button onClick={this.addNewCarousel}>Add New Carousel</button>
            </>
        )
    }
}

export default CarouselsGeneratorComponent;
