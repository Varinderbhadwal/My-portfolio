import Form from 'react-bootstrap/Form';

function Contact(){
    return(
        <div className='container-fluid'>
            <div className='row '>
                <div className='col-8 offset-2 contactme'>
                    <h1>Hire Me</h1>
                    <ul>
                        <li>
                            Location: Jammu
                        </li>
                        <li>
                            Phone: 987653210
                        </li>
                        <li>
                            Email: 
                        </li>
                        <li>
                            WhatsApp: 
                        </li>
                    </ul>

                    <h2>Personal Information</h2>
                    <ul>
                        <li>Offical Name: Varinder Pal Singh</li>
                        <li></li>
                        <li>
                            Hometown: Jammu
                        </li>
                        <li>
                            Current Status: Open to work
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row ">
                <div className="col-8 offset-2 contactme">
                    <h2>Connect With Me</h2>
                    <ul>
                        <li>LinkedIn: </li>
                        <li>Github: </li>
                        <li>CodePen</li>
                    </ul>
                </div>
            </div>

            <div className="row ">
                <div className="col-8 offset-2 contactme">
                    
                    <div className="row">
                        <div className="col-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d214904.03024763643!2d74.8716032!3d32.6893568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728293472937!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>


                        {/* contact form */}
                        <div className="col-6">
                        <h3>Contact Form</h3>
                        <form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder='Enter your message'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="submit" placeholder="Enter your email" />
                </Form.Group>

                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Contact;