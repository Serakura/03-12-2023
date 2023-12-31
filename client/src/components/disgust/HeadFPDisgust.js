import { Container, Row, Col } from "react-bootstrap";
import './Disgust.css';
import Disgust from "../home/icon-mood/Icon-Disgust.svg";


const HeadFPDisgust = () => {
    return(
        <>
       <h1 className="line-disgust"></h1>
        <Container fluid className="mood__box-disgust">
            <Row>
                <Col md={10} xs={8}>
                    <h2 className="disgust">Recomended Foods Disgust</h2>
                    <p className='sub-title'>Here are your personalised menu recommendation based on your emotion!</p>
                    <a href='camera'>
                        <p className='link-disgust'>Not feeling disgust? Scan again!</p>
                    </a>
                </Col>

                <Col md={2} xs={4}>
                    <img src={Disgust} width={"100px"} height={"100px"} className="emote float-end" alt=" your-mood" />
                </Col>
            </Row>

            <Row>
                <Col md={10} className='offset-md-1'>
                    <p className="attention">ALL PRICES ARE IN THOUSANDS OF RUPIAH AND INCLUSIVE OF GOVERNMENT TAX PRICES ARE PER GLASS/BOTTLE/TEAPOT</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default HeadFPDisgust;