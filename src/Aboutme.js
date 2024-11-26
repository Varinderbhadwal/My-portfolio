import Image from 'react-bootstrap/Image';
import myimg from './Assets/me.jpeg';

function Aboutme(){
    return(
        <div className="container-fluid my-5" id="about">
            <div className="row text-center">
                <div className="col-8 offset-2">
                    <h1 className='my-5'>About Varinder Singh</h1>
                    <Image className='my-5' src={myimg} id='myimg'></Image>

                    <p>Varinder is a motivated and hardworking beginner Full Stack Developer currently learning the MERN stack (MongoDB, Express.js, React.js, Node.js). With a strong commitment to growth and a passion for web development, Varinder enjoys building simple yet effective applica</p>
                    <p>
                    Although still in the early stages of their journey, Varinder is eager to take on new challenges, constantly improving their skills and working towards writing clean and efficient code.
                    </p>
                </div>
            </div>
        </div>
    )

}


export default Aboutme;