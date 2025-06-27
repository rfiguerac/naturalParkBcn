import { Card } from "react-bootstrap"

interface Prop{
    image: string,
    title: string,
    description: string[]
}

export const Articulo = ({image, title, description}:Prop) => {
  return (
   <>
    <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
           <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>

    </>
  )
}
