import React from "react";
import FridgeItem from "../components/Fridge/FridgeItem.js";
import "../components/Fridge/Fridge.css";
// import MoreButton from "../components/Home/MoreButton.js";
import Shelf from "../components/Shelf";

class Fridge extends React.Component {
  // state = {
  // items = () => {
  //   return this.props.item.map(item => <FridgeItem item={item} /> )
  // }
  //   displayIndex: 0,
  // };

  // more = (event) => {
  //   let newDisplayIndex = this.state.displayIndex + 4;
  //   if (newDisplayIndex >= this.state.fridgeItemArray.length) {
  //     newDisplayIndex = 0;
  //   }

  //   this.setState({
  //     displayIndex: newDisplayIndex,
  //   });
  // };

<<<<<<< HEAD
  filterBakery = () => {
    let filteredBakery = this.props.item.filter(
      (item) => item.category === "Bread"
    );
    return filteredBakery.map((el) => <FridgeItem item={el} />);
  };

  filterProduce = () => {
    let filteredProduce = this.props.item.filter(
      (item) => item.category === "Produce"
    );
    return filteredProduce.map((el) => <FridgeItem item={el} />);
  };

  filterMeat = () => {
    let filteredMeat = this.props.item.filter(
      (item) => item.category === "Meat"
    );
    return filteredMeat.map((el) => <FridgeItem item={el} />);
  };

  filterSeafood = () => {
    let filteredSeafood = this.props.item.filter(
      (item) => item.category === "Seafood"
    );
    return filteredSeafood.map((el) => <FridgeItem item={el} />);
  };

  filterLiquors = () => {
    let filteredLiquors = this.props.item.filter(
      (item) => item.category === "Liquors"
    );
    return filteredLiquors.map((el) => <FridgeItem item={el} />);
  };

  filterPreparedFood = () => {
    let filteredPreparedFood = this.props.item.filter(
      (item) => item.category === "Prepared Food"
    );
    return filteredPreparedFood.map((el) => <FridgeItem item={el} />);
  };

  filterOther = () => {
    let filteredOther = this.props.item.filter(
      (item) => item.category === "Other Departments"
    );
    return filteredOther.map((el) => <FridgeItem item={el} />);
  };

  filterCheese = () => {
    let filteredCheese = this.props.item.filter(
      (item) => item.category === "Cheese"
    );
    return filteredCheese.map((el) => <FridgeItem item={el} />);
  };

  filter = (Category) => {
    let filteredBakery = this.props.item.filter(
      (item) => item.category === Category
    );
    return filteredBakery.map((el) => <FridgeItem item={el} />);
  };
=======
  filter = (Category) => {
    let filteredBakery = this.props.item.filter(item => item.category===Category)
    return filteredBakery.map(el => <FridgeItem item={el} />) 
  }

>>>>>>> 0cbccece8528de33b8e3fcc69e655b0d6c74efe4
  render() {
    const fridgeLeftArray = [
      { category: "Bakery", shelf: this.filterBakery() },
      { category: "Produce", shelf: this.filterProduce() },
      { category: "Meat", shelf: this.filterMeat() },
      { category: "Seafood", shelf: this.filterSeafood() },
    ];
    const fridgeRightArray = [
      // { category: "Liqours", shelf: this.filterLiqours() },
      { category: "PreparedFoods", shelf: this.filterPreparedFood() },
      { category: "Other", shelf: this.filterOther() },
      { category: "Cheese", shelf: this.filterCheese() },
    ];
    const fridgeLeft = fridgeLeftArray.map((category, shelf) => (
      <div className="fridge-shelf">
        <div className="fridge-category">{category}</div>
        <Shelf category={shelf} />
      </div>
    ));
    const fridgeright = fridgeRightArray.map((category, shelf) => (
      <div className="fridge-shelf">
        <div className="fridge-category">{category}</div>
        <Shelf category={shelf} />
      </div>
    ));
    return (
      <div className="fridge-container">
        <div className="fridge-container-left">

          <div className="fridge-shelf">
            <div className="fridge-category">Bakery</div>
<<<<<<< HEAD

            <Shelf category={this.filterBakery()} />
=======
            <div className="fridge-item-card">{this.filter("Bread")}</div> 
>>>>>>> 0cbccece8528de33b8e3fcc69e655b0d6c74efe4
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Produce</div>
<<<<<<< HEAD
            <div className="fridge-item-card">{this.filterProduce()}</div>
=======
            <div className="fridge-item-card">{this.filter("Produce")}</div> 
>>>>>>> 0cbccece8528de33b8e3fcc69e655b0d6c74efe4
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Meat</div>
<<<<<<< HEAD
            <div className="fridge-item-card">{this.filterMeat()}</div>
=======
            <div className="fridge-item-card">{this.filter("Meat")}</div> 
>>>>>>> 0cbccece8528de33b8e3fcc69e655b0d6c74efe4
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Seafood</div>
<<<<<<< HEAD
            <div className="fridge-item-card">{this.filterSeafood()}</div>
=======
            <div className="fridge-item-card">{this.filter("Seafood")}</div> 
>>>>>>> 0cbccece8528de33b8e3fcc69e655b0d6c74efe4
          </div>
        </div>

        <div className="fridge-blank"></div>

        <div className="fridge-container-right">
          <div className="fridge-shelf">
<<<<<<< HEAD
            <div className="fridge-category">Cheese</div>
            <div className="fridge-item-card">{this.filterCheese()}</div>
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Liquors</div>
            <div className="fridge-item-card">{this.filterLiquors()}</div>
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Prepared Food</div>
            <div className="fridge-item-card">{this.filterPreparedFood()}</div>
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Other</div>
            <div className="fridge-item-card">{this.filterOther()}</div>
          </div>
=======
              <div className="fridge-category">Cheese</div>
              <div className="fridge-item-card">{this.filter("Cheese")}</div> 
            </div>

            <div className="fridge-shelf">
              <div className="fridge-category">Liquors</div>
              <div className="fridge-item-card">{this.filter("Liquors")}</div> 
            </div>

            <div className="fridge-shelf">
              <div className="fridge-category">Prepared Food</div>
              <div className="fridge-item-card">{this.filter("PreparedFood")}</div> 
            </div>

            <div className="fridge-shelf">
              <div className="fridge-category">Other</div>
              <div className="fridge-item-card">{this.filter("Other")}</div> 
            </div>
>>>>>>> 0cbccece8528de33b8e3fcc69e655b0d6c74efe4
        </div>
      </div>
    );
  }
}

export default Fridge;
