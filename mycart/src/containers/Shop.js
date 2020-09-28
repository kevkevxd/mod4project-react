import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../components/Shop/shop.css";
import ShopMain from "../components/Shop/ShopMain";
import ShopRight from "../components/Shop/ShopRight";
import { BreadCategory } from "../components/Shop/Subcategory-lists/Bread.js";
import { MeatCategory } from "../components/Shop/Subcategory-lists/Meat.js";
import { CheeseCategory } from "../components/Shop/Subcategory-lists/Cheese.js";
import { ProduceCategory } from "../components/Shop/Subcategory-lists/Produce.js";
import { SeafoodCategory } from "../components/Shop/Subcategory-lists/Seafood.js";
import { LiquorCategory } from "../components/Shop/Subcategory-lists/Liquor.js";
import { PreparedfoodCategory } from "../components/Shop/Subcategory-lists/Preparedfood.js";
import { OtherCategory } from "../components/Shop/Subcategory-lists/Other.js";

class Shop extends React.Component {
  state = {
    filteredItem: [],
  };

  subclickHandler = (e) => {
    let filteredArray = this.props.itemArray.filter(
      (item) => item.sub_category === e.target.textContent
    );
    this.setState(() => ({
      filteredItem: [...filteredArray],
      clicked: true,
    }));
  };

  render() {
    const ShopMapper = [
      { title: "Bread", category: BreadCategory },
      { title: "Meat", category: MeatCategory },
      { title: "Seafood", category: SeafoodCategory },
      { title: "Produce", category: ProduceCategory },
      { title: "Cheese", category: CheeseCategory },
      { title: "Liqour", category: LiquorCategory },
      { title: "PreparedFoods", category: PreparedfoodCategory },
      { title: "Other", category: OtherCategory },
    ];

    const ShopMap = ShopMapper.map(({ title, category }) => (
      <Accordion>
        <Card style={{ border: 0, marginBottom: "5px" }}>
          <Accordion.Toggle
            as={Button}
            variant="secondary"
            eventKey="0"
            style={{ textAlign: "left" }}
          >
            {title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ListGroup>
              {category.map((item) => (
                <ListGroup.Item key={item.id} onClick={this.subclickHandler}>
                  {item.subcategory}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    ));

    return (
      <div className="dd-wrapper" style={{ display: "flex" }}>
        <div style={{ width: "250px" }}>{ShopMap}</div>

        <ShopMain
          itemArray={this.props.itemArray}
          item={this.state.filteredItem}
          itemClickHandler={this.props.itemClickHandler}
          clicked={this.state.clicked}
        />
        <ShopRight
          moveToFridge={this.props.moveToFridge}
          itemClickedArray={this.props.clickedArray}
        />
      </div>
    );
  }
}

export default Shop;
