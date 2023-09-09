import { Alert, CarouselItem, Container, Spinner, Carousel, Row } from "react-bootstrap";
import image from "./Netflix-assets/assets/media/media1.jpg";
import { Component } from "react";

class MyCarousel extends Component {
  state = {
    loading: true,
    error: false,
    alert: true,
    status: 200,
  };
  close = () => {
    this.setState({ alert: false });
  };
  request = async () => {
    try {
      const request = await fetch(`https://www.omdbapi.com/?apikey=20548f09&s=${this.props.search}`);
      console.log(request);
      if (request.ok) {
        const data = await request.json();
        this.setState(data);
        this.setState({ loading: false });
      } else {
        this.setState({ error: true });
        this.setState({ status: request.status });
        this.setState({ loading: false });
      }
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = () => {
    this.request();
  };
  render() {
    return (
      <Container className="mt-5">
        {this.state.error && this.state.alert && (
          <Alert variant="danger" dismissible onClose={() => this.close()}>
            <Alert.Heading>oggi si guarda il muro!</Alert.Heading>
            <p>qualcosa è andato storto durante il caricamento dei film! status code : {this.state.status}</p>
          </Alert>
        )}
        {this.state.loading && <Spinner animation="grow" variant="info" />}
        <h2 className="text-light fs-4 mb-3">{this.props.title}</h2>
        <Row className="gx-1">
          <Carousel>
            <Carousel.Item className="gx-0">
              {this.state.Search &&
                this.state.Search.slice(0, 6).map((film, index) => (
                  <img src={film.Poster} alt={film.Title} key={`film-${index}`} width={"16%"} height={"200px"} />
                ))}
            </Carousel.Item>
            <Carousel.Item className="gx-0">
              {this.state.Search &&
                this.state.Search.slice(6, 13).map((film, index) => (
                  <img src={film.Poster} alt={film.Title} key={`film-${index}`} width={"16%"} height={"200px"} />
                ))}
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    );
  }
}

export default MyCarousel;
