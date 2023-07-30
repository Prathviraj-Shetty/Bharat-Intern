import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillEyeFill } from "react-icons/bs";

function CertificateCard(props) {

  return (
    < Card className = "project-card-view">
  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text className="text-justify">
      {props.description}
    </Card.Text>
    <Button variant="primary" href={props.ghLink} target="_blank" className="mx-auto">
      <BsFillEyeFill /> &nbsp;
      {props.isBlog ? "Blog" : "View"}
    </Button>
    {"\n"}
    {"\n"}
  </Card.Body>
</Card >

  );
}
export default CertificateCard;
