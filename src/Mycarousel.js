import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from './Assets/Image1.png';
import img2 from './Assets/Image2.png';
import img3 from './Assets/Image3.png';

function Mycarousel() {
  return (
    <div className='row'>
      <div className='col-12'>
      <Carousel>
      <Carousel.Item>
        <Image src={img3} fluid></Image>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img2} fluid></Image>
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img1} fluid></Image>
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  );
}

export default Mycarousel;