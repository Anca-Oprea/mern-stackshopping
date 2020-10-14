import React, { Component } from "react";
import { Carousel, CarouselItem, Col, Row, CarouselControl } from 'reactstrap'
import ButtonInternalLink from './buttonInternalLink'

const styles = {
  sliderContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white'
  }
}

const items = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzIsSL4DVqa2XWm0gAXZtCLOlheOWemlR3lawQVnRpPmwAqAoH&usqp=CAU',
    altText: 'Slide 1',
    caption: 'Slide 1',
    title: 'Fashion is cool',
    subtitle: 'Check our nice collection',
    btn: {
      content: 'Go to the collection',
      link: '/Men',
    }
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfWAdSPxeuhnUD0vy8B5RqH7Bh1rn0ZKkgZHIZ4dkEDXijlv--OglJ9jvz&usqp=CAU&ec=45673586',
    altText: 'Slide 2',
    caption: 'Slide 2',
    title: "Nice for couples",
    subtitle: 'Collection summer 2018',
    btn: {
      content: 'Cool collection',
      link: '/Women'
    }
  },
  {
    src: 'https://images.unsplash.com/photo-1485331129317-1717811a2b75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b713c86ebb20befc80029db6bc98dae&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
    altText: 'Slide 3',
    caption: 'Slide 3',
    title: 'Nice for everyone',
    subtitle: 'Amazing clothes!',
    btn: {
      content: 'Go to the collection',
      link: '/Men'
    }
  }
];

class CarouselHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map(x => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={x.src}
        >
          <Row style={{ backgroundColor: '#072a48' }}>
            <Col md="6">
              <img src={x.src} alt={x.altText} style={{ width: '100%', maxHeight: '500px' }} />
            </Col>
            <Col md="6" style={styles.sliderContent}>
              <h2>{x.title}</h2>
              <p>{x.subtitle}</p>
              <ButtonInternalLink
                link={x.btn.link}
                content={x.btn.content}
                sizeBtn='lg'
                lightOrDark={x.btn.lightOrDark}
              />
            </Col>
          </Row>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default CarouselHomepage;

