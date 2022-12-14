
import React from "react";
import {Row,Col,Image,Button, Card} from "react-bootstrap";

function About(){
    return(
        <div>
            <section className="py-2 bg-primary">

            </section>
            <section className="section  border-bottm">
                <container>
                    <Row className="px-4 my-5">
                        <Col sm={2}>
                            <Image src="https://img.etimg.com/thumb/msid-77365878,width-300,imgsize-51451,,resizemode-4,quality-100/dev.jpg" fluid />
                        </Col>
                        <Col sm={5}>
                            <h1 class="font-weigh-light">Dr. Pandey</h1>
                            <p class="mt-4">
                                MS- General Surgery, MBBS<br/>
                                General Surgeon, Laparsocpic Surgeon, Diabetic Foot Surgeon<br></br>
                                12 Years Experience Overall <br/>
                                <br></br>
                                <h6>fulfilled By</h6>
                                practo care<br/>
                                <br/>
                                
                                Dr. Pandey is a Sr. Consultant Surgeon ( General, Laparoscopic & Minimal Access Surgery and Coloprology) with MBBS, AFIH, DNB , FMAS, Dip. MAS with 21years of Total Experience out of which 17years in General Surgery.
                                <br/><br/>
                                Apollo Clinic, Bengaluru<br/>  Mon-Sat
                            </p>
                            <hr/>
                           
                        </Col>
                        <Col sm={5}>
                        <h1 class="font-weigh-light">Pick a Time slot</h1>
                        <hr/>

                                <Row>
                                    <Col md={4}>Clinic Appointment</Col>
                                    <Col md={{ span: 4, offset: 4 }}>{`Rs 99 fee`}</Col>
                                </Row>
                                <br/>
                                {/* <Row>
                                    <Col md={4}>Today</Col>
                                    <Col md={{ span: 4, offset: 4 }}>{`Tommorrw`}</Col>
                                </Row> */}
                                <Row>
                                    <Col><Button variant="outline-primary"> Today</Button></Col>
                                    <Col xs={6}><Button variant="outline-primary"> Tomorrow</Button></Col>
                                    {/* <Col>3 of 3</Col> */}
                                </Row>



                        </Col>
                    </Row>
                    <Row className="px-4 my-5">
                        <Col sm={2}>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XV6GtVsWdxLF2x-NSpFj_0HmCJVQg3Qxn6FHzZilYSO5bzjE5bNWO41jpaAOmhAc4kE&usqp=CAU" fluid />
                        </Col>
                        <Col sm={5}>
                            <h1 class="font-weigh-light">Dr. Rohit sinha</h1>
                            <p class="mt-4">
                                MBBS, General Surgery<br/>
                                General Surgeon, Laparsocpic Surgeon<br></br>
                                10 Years Experience Overall <br/>
                                <br></br>
                                <h6>fulfilled By</h6>
                                practo care<br/>
                                <br/>
                                
                                Dr. Rohit sinha is a He is a member of ASCI and International Association of Geosynthetic Installers. Some of the services provided by the doctor are: Fistula Treatment,Gastroscopy,keloid/scar treatment,Bariatric (Gastric Bypass) Surgery and Hernia Repair Surgery etc. .
                                <br/><br/>
                                Apollo Clinic, Hyderabad<br/>  Mon-Sat
                            </p>
                            <hr/>
                            {/* <Button variant="outline-primary"> Know more</Button> */}
                        </Col>
                        <Col sm={5}>
                        <h1 class="font-weigh-light">Pick a Time slot</h1>
                        <hr/>
                        
                                <Row>
                                    <Col md={4}>Clinic Appointment</Col>
                                    <Col md={{ span: 4, offset: 4 }}>{`Rs 99 fee`}</Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col><Button variant="outline-primary"> Today</Button></Col>
                                    <Col xs={6}><Button variant="outline-primary"> Tomorrow</Button></Col>
                                    {/* <Col>3 of 3</Col> */}
                                </Row>


                        </Col>
                    </Row>

                    {/* <Row>
                        <Card className="text-center bg-secondary text-white my-4 py-0">
                            <Card.Body>Your home for health</Card.Body>
                        </Card>
                    </Row> */}


                    <Row className="px-4 my-5">
                        <Col sm={2}>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XV6GtVsWdxLF2x-NSpFj_0HmCJVQg3Qxn6FHzZilYSO5bzjE5bNWO41jpaAOmhAc4kE&usqp=CAU" fluid />
                        </Col>
                        <Col sm={5}>
                            <h1 class="font-weigh-light">Dr. Rohit sinha</h1>
                            <p class="mt-4">
                                MBBS, General Surgery<br/>
                                General Surgeon, Laparsocpic Surgeon<br></br>
                                10 Years Experience Overall <br/>
                                <br></br>
                                <h6>fulfilled By</h6>
                                practo care<br/>
                                <br/>
                                
                                Dr. Rohit sinha is a He is a member of ASCI and International Association of Geosynthetic Installers. Some of the services provided by the doctor are: Fistula Treatment,Gastroscopy,keloid/scar treatment,Bariatric (Gastric Bypass) Surgery and Hernia Repair Surgery etc. .
                                <br/><br/>
                                Apollo Clinic, Hyderabad<br/>  Mon-Sat
                            </p>
                            <hr/>
                            {/* <Button variant="outline-primary"> Know more</Button> */}
                        </Col>
                        <Col sm={5}>
                        <h1 class="font-weigh-light">Pick a Time slot</h1>
                        <hr/>
                        
                                <Row>
                                    <Col md={4}>Clinic Appointment</Col>
                                    <Col md={{ span: 4, offset: 4 }}>{`Rs 99 fee`}</Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col><Button variant="outline-primary"> Today</Button></Col>
                                    <Col xs={6}><Button variant="outline-primary"> Tomorrow</Button></Col>
                                    {/* <Col>3 of 3</Col> */}
                                </Row>


                        </Col>
                    </Row>

                    <Row>
                        <Card className="text-center bg-secondary text-white my-4 py-0">
                            <Card.Body>Your home for health</Card.Body>
                        </Card>
                    </Row>
                
                
                </container>
            </section>
        </div>
    )
}

export default About;
