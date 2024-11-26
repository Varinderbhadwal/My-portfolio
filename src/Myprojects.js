import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Myprojects(){
    return(
        <div className="row text-center my-5">
          <h1 className='my-5'>My Previous Work</h1>
            <div className="col-4">
            <Card>
            <Card.Img variant="top" src="https://raw.githubusercontent.com/Varinderbhadwal/StateCounter/refs/heads/main/Counter%20Project%20Screenshot.jpeg" />
                        <Card.Body>
                            <Card.Title>State Counter</Card.Title>
                            <Card.Text>
                            A simple project to demonstrate counter with useState
                            </Card.Text>
                            <a className='m-2' href='https://github.com/Varinderbhadwal/StateCounter' target='_blank'><Button variant="dark">Code</Button></a>
                            <a href='https://statecounter.onrender.com/' target='_blank'><Button variant="dark">Preview</Button></a>
                        </Card.Body>
    </Card>
     </div>

     <div className="col-4">
            <Card>
      <Card.Img variant="top" src="https://raw.githubusercontent.com/Varinderbhadwal/BlogCMS/refs/heads/main/BlogCMS_by_Varinder.jpeg" />
      <Card.Body>
      <Card.Title>Blog CMS</Card.Title>
                            <Card.Text>
                            A simple project to demonstrate a blog content management system, developed in MERN stack
                            </Card.Text>
                            <a className='m-2' href='https://github.com/Varinderbhadwal/BlogCMS' target='_blank'><Button variant="dark">Code</Button></a>
                            <a href='https://blogfront-9939.onrender.com/' target='_blank'><Button variant="dark">Preview</Button></a>
      </Card.Body>
    </Card>
     </div>

     <div className="col-4">
            <Card>
            <Card.Img variant="top" src="https://raw.githubusercontent.com/Varinderbhadwal/enfieldclone/refs/heads/main/enfieldclone.onrender.com_cut.png" />
      <Card.Body>
      <Card.Title>Royal enfield clone</Card.Title>
                            <Card.Text>
                          A local bike business website developed in reactjs  inpired from royal enfield official website
                            </Card.Text>
                            <a className='m-2' href='https://github.com/Varinderbhadwal/enfieldclone' target='_blank'><Button variant="dark">Code</Button></a>
                            <a href='https://enfieldclone.onrender.com/' target='_blank'><Button variant="dark">Preview</Button></a>
      </Card.Body>
    </Card>
     </div>

        </div>
    )
}
export default Myprojects;