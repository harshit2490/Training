import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function IndividualIntervalsExample() {
    return (
        <div>
            <Card>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={require('./images/carousel-1.png')}
                            alt="First slide"
                            height="550px"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={require('./images/carousel-2.jpg')}
                            alt="Second slide"
                            height="550px"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={require('./images/carousel-3.jpg')}
                            alt="Third slide"
                            height="550px"
                        />
                    </Carousel.Item>
                </Carousel>
            </Card>
        </div>
    );
}

export default IndividualIntervalsExample;