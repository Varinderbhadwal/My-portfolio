import Form from 'react-bootstrap/Form';
function FooterNav(){
    return(
        <div className="container-fluid" id="foot">
            <div className="row" id="footernav">
            <div className="col-4">
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone</li>
                    <li>Email</li>
                    <li>WhatsApp</li>
                </ul>
            </div>
            <div className="col-4">
            <h3>Connect</h3>
                <ul>
                    <li>LinkedIn</li>
                    <li>Github</li>
                    <li>Codepen</li>
                </ul>
            </div>
            <div className="col-4">
                <h4>Contact Form</h4>
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

        <div className="row">
            <div className="col-12">
                <footer>Copyright 2024 &copy; Varinder Pal Singh</footer>
            </div>
        </div>
        </div>
    )
}

export default FooterNav;