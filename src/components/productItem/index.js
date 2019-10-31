import React, { Component } from "react";
import "./index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import boot from "../../media/images/snowboard_boots.jpg";
import glove from "../../media/images/snowboard_gloves.jpg";
import mitten from "../../media/images/snowboard_mittens.jpg";
import pants from "../../media/images/snowboard_pants.jpg";
import jacket from "../../media/images/snowboard-jacket1.jpg";
import snowboard from "../../media/images/snowboard-snowboard1.jpg";

class ProductItem extends Component {
  render() {
    return (
      <div className=" shop-container">
        <div className="col-md-12 shop-grid">
          {this.props.products &&
            this.props.products.map(product => (
              <Card className="col-md-4 inLine hov" id={product.product_id}>
                <Card.Body>
                  {product.genre === "boots" && (
                    <Card.Img variant="top" src={boot} />
                  )}
                  {product.genre === "snowboard" && (
                    <Card.Img variant="top" src={snowboard} />
                  )}
                  {product.genre === "jacket" && (
                    <Card.Img variant="top" src={jacket} />
                  )}
                  {product.genre === "pants" && (
                    <Card.Img variant="top" src={pants} />
                  )}
                  {product.genre === "gloves" && (
                    <Card.Img variant="top" src={glove} />
                  )}
                  {product.genre === "mittens" && (
                    <Card.Img variant="top" src={mitten} />
                  )}
                  <Card.Header className="" as="h5">
                    {product.name}
                  </Card.Header>
                  <Card.Subtitle className="mb-2 text-muted">
                    ${product.price}
                  </Card.Subtitle>
                  <Card.Text className="">{product.desc}</Card.Text>
                  <select
                    className="card-select"
                    id={"sizes" + product.product_id}
                  >
                    {product.sizes.map(size => (
                      <option key={"size-" + product.product_id + "-" + size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <Button
                    className=""
                    variant="primary"
                    onClick={() => this.props.addItem(product.product_id)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>{" "}
                {/* ends card */}
              </Card>
            ))}
        </div>
      </div>
    );
  }
}

export default ProductItem;
// <Card.Img variant="top" src="https://via.placeholder.com/100x60.png" />

// className="col-md-4 inLine"
// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>;
