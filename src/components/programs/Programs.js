import React from 'react'
import { Row, Col, Tab, Nav, Container} from 'react-bootstrap'
import ModalImage from './ModalImage'
import 'bootstrap/dist/css/bootstrap.css'
import "./Programs.css"
import Mentorship from './Mentorship'

class Programs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMentorship1: false,
            showMentorship2: false,
            showTutoring: false
        }
    }

    render() {
        return (
            <div className="programs-body">
                <div className="quote-style-1 quote-bg">
                    <div className="d-flex justify-content-center">
                        <div className="quote-block" style={{ 'margin-left': '15%', 'margin-right': '15%' }}>
                            <br></br>
                            Get involved!<br></br> Participate in our <span className="highlight-text"><i><b>mentorship!</b></i></span>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div className="disclaimer-body">
                    <h3 className="disclaimer_header"><b>Disclaimer!</b></h3>
                    <span className="disclaimer"><b>1. You must be a member of ACM to participate in the mentorship!</b> If you are not a member,
                    <b><i><span className="highlight-text"> you will not be allowed in.</span></i></b></span><br></br>
                    <span className="disclaimer"><b>2. Deadline to apply for the mentorship program is <span className="highlight-text">
                        Tuesday, September 1, 2020 at 11:59pm.</span></b></span><br></br>
                </div>
                <br></br>
                <div className="card programs-card">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className="programs-nav-link anchor-white" eventKey="first">Fall 2020</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="programs-nav-link anchor-white" eventKey="second">Spring 2020</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="programs-nav-link anchor-white" eventKey="third">Fall 2019</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>
                                <Tab.Content className="programs-tab-content">
                                    <Tab.Pane eventKey="first">
                                        <Tab.Container defaultActiveKey="F2020mentorship">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link anchor-blue" eventKey="F2020mentorship">Mentorship</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="programs-tab-content">
                                                <Tab.Pane eventKey="F2020mentorship">
                                                    <Mentorship />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Tab.Container defaultActiveKey="S2020mentorship">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link anchor-blue" eventKey="S2020mentorship">Mentorship</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="programs-tab-content">

                                                <Tab.Pane eventKey="S2020mentorship">
                                                    <br></br>
                                                    <h2><span className="highlight-text">Program Description</span></h2>
                                                    Students in the mentorship program will gain professional and academic skills. They will learn to manage their time and tackle intimidating assignments. They will have opportunities to improve their public speaking skills, which will help them gain confidence.
                                                    They will be provided tips on internship hunting and resume/interview preparation. When students start earning money, they must manage their finances. As a result, it will be important for them to learn
                                                    about financial responsibility and investing tips.<br></br><br></br>
                                                    <img src={require("./pictures/spring2020-mentorship-flyer.png")} className="programs-poster" alt="mentorship flyer"></img>
                                                    {/* <Row>
                                                        <Col sm={4}>
                                                            <Image src={require("./pictures/spring2020-mentorship-flyer.png")} rounded />
                                                        </Col>
                                                    </Row><br></br><br></br> */}
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="third">
                                        <Tab.Container defaultActiveKey="F2019mentorship">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link anchor-blue" eventKey="F2019mentorship">Mentorship</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="programs-nav-link anchor-blue" eventKey="F2019tutoring">Tutoring</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="programs-tab-content">

                                                <Tab.Pane eventKey="F2019mentorship">
                                                    <br></br>
                                                    <h2><span className="highlight-text">Program Description</span></h2>
                                                    Students in the mentorship program will gain professional and academic skills. They will learn to manage their time,
                                                    stay organized, and tackle intimidating assignments. They will also gain confidence, stay motivated, and learn to give advice.<br></br><br></br>
                                                    <img src={require("./pictures/fall2019-mentorship-flyer.png")} className="img-fluid programs-poster" alt="mentorship flyer"></img>
                                                    {/* <Row>
                                                        <Col sm={4}>
                                                            <Image src={require("./pictures/fall2019-mentorship-flyer.png")} rounded />
                                                        </Col>
                                                    </Row> */}
                                                    <br></br>
                                                    <h2><span className="highlight-text">Mentors and Mentees &amp; Winners of Mentorship Competition</span></h2>

                                                    <Container>
                                                        <img src={require('./pictures/fall2019-mentors-mentees.jpg')} alt="Mentors and Mentees" onClick={() => this.setState({ showMentorship1: true })} className="img-fluid programs-images"></img>
                                                        <img src={require('./pictures/fall2019-best-mentors-mentees.jpg')} alt="Best Mentors and Mentees" onClick={() => this.setState({ showMentorship2: true })} className="img-fluid programs-images"></img>
                                                        <ModalImage image='./pictures/fall2019-mentors-mentees.jpg' show={this.state.showMentorship1} onHide={() => this.setState({ showMentorship1: false })} />
                                                        <ModalImage image='./pictures/fall2019-best-mentors-mentees.jpg' show={this.state.showMentorship2} onHide={() => this.setState({ showMentorship2: false })} />
                                                    </Container>

                                                </Tab.Pane>
                                            </Tab.Content>
                                            <Tab.Content className="programs-tab-content">

                                                <Tab.Pane eventKey="F2019tutoring">
                                                    <br></br>
                                                    <h2><span className="highlight-text">Program Description</span></h2>
                                                    Tutors assist students in their introductory computer science and math classes. We provide additional insight on concepts that students are learning in their classes and
                                                    helpful tips on assignments. Academic success is very important!<br></br><br></br>

                                                    <h2><span className="highlight-text">Tutoring</span></h2>

                                                    <Container>
                                                        <img src={require('./pictures/tutoring.jpg')} alt="tutoring 2018" onClick={() => this.setState({ showTutoring: true })} className="programs-images"></img>
                                                        <ModalImage image='./pictures/tutoring.jpg' show={this.state.showTutoring} onHide={() => this.setState({ showTutoring: false })} />
                                                    </Container>

                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container><br></br>
                </div>
            </div>
        );
    }
}

export default Programs;