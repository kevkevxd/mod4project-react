import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import FormLabel from "react-bootstrap/FormLabel";

class FridgeForm extends React.Component {
  state = {
    name: "",
    category: "",
    sub_category: "Inputted Fridge Item",
    price: 1,
    quantity: 0,
    description: "Inputted Fridge Item",
    image: "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/master/pass/milk-bread.jpg",
    id: 10000,
    quantity_value: "",
    quantity_measurement: ""
  };

  fridgeSubmitHandler = (e) => {
    let quantity = this.state.quantity_value + " " + this.state.quantity_measurement
    e.preventDefault();
    this.props.fridgeSubmit(this.state, quantity);
    this.setState({
      name: "",
      category: "",
      id: this.state.id + 1
    });
    this.props.onHide()
  };

  categoryClick = (e) => {
    this.setState({ category: e.target.value });
  };

 fridgeFormHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={this.props.onHide}
        show={this.props.show}
      >
        <Modal.Header closeButton className="form-header">
          <svg
            width="25px"
            fill="white"
            viewBox="0 -1 511.99871 511"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "8px" }}
          >
            <path d="m380.589844 204.039062 30.082031-1.90625c.050781-.003906.105469-.007812.160156-.011718 21.4375-1.808594 40.679688-13.039063 52.796875-30.820313l23.78125-34.890625c20.699219-30.375 28.71875-67.0625 22.574219-103.300781-1.207031-7.117187-4.847656-13.675781-10.246094-18.460937-5.402343-4.789063-12.347656-7.617188-19.558593-7.960938-36.726563-1.757812-72.175782 10.605469-99.847657 34.796875l-31.789062 27.792969c-16.199219 14.160156-25.042969 34.609375-24.269531 56.113281.003906.050781.003906.105469.007812.160156l1.714844 30.089844c.667968 11.730469-3.632813 23.304687-11.777344 31.734375l-248.351562 255.132812c-6.648438 6.933594-10.082032 16.445313-9.664063 26.785157.460937 11.382812 5.683594 22.5625 13.972656 29.910156 7.488281 6.636719 17.78125 10.417969 28.070313 10.417969 1.101562 0 2.203125-.042969 3.300781-.132813 10.316406-.824219 19.351563-5.371093 25.46875-12.847656l223.464844-277.085937c7.410156-9.117188 18.386719-14.773438 30.109375-15.515626zm-42.039063 5.859376-223.445312 277.0625c-3.414063 4.171874-8.664063 6.742187-14.78125 7.230468-7.277344.582032-14.738281-1.839844-19.964844-6.472656-5.226563-4.636719-8.523437-11.753906-8.816406-19.046875-.25-6.128906 1.667969-11.648437 5.363281-15.5l248.332031-255.113281c11.132813-11.519532 16.992188-27.296875 16.085938-43.289063l-1.714844-30.011719c-.582031-16.832031 6.351563-32.835937 19.035156-43.925781l31.789063-27.792969c24.671875-21.566406 56.289062-32.578124 89.015625-31.023437 3.726562.179687 7.3125 1.640625 10.105469 4.117187 2.792968 2.472657 4.671874 5.863282 5.296874 9.539063 5.476563 32.308594-1.671874 65.011719-20.125 92.089844l-23.78125 34.894531c-9.488281 13.921875-24.546874 22.722656-41.328124 24.164062l-30 1.898438c-15.984376 1.015625-30.945313 8.726562-41.066407 21.179688zm0 0" />
            <path d="m497.820312 440.570312-166.519531-151.667968c-3.132812-2.855469-7.984375-2.628906-10.84375.503906-2.851562 3.132812-2.625 7.988281.507813 10.84375l166.476562 151.632812c3.960938 3.660157 6.207032 9.054688 6.328125 15.1875.144531 7.296876-2.71875 14.597657-7.660156 19.539063-4.9375 4.9375-12.226563 7.808594-19.539063 7.660156-6.132812-.121093-11.527343-2.367187-15.148437-6.285156l-148.382813-162.90625c-2.855468-3.136719-7.710937-3.359375-10.84375-.507813-3.132812 2.855469-3.359374 7.710938-.503906 10.84375l148.417969 162.945313c6.523437 7.054687 15.8125 11.054687 26.160156 11.257813.269531.003906.535157.007812.804688.007812 11.121093 0 22.242187-4.511719 29.886719-12.160156 7.835937-7.835938 12.378906-19.308594 12.152343-30.695313-.203125-10.347656-4.199219-19.636719-11.292969-26.199219zm0 0" />
            <path d="m92.609375 202.585938c12.703125 11.703124 29.207031 18.375 46.472656 18.789062.054688.003906.109375.003906.160157.003906l30.140624.09375c11.75.035156 23.042969 5.023438 30.96875 13.660156l13.277344 14.574219c1.515625 1.664063 3.589844 2.507813 5.675782 2.507813 1.84375 0 3.695312-.660156 5.164062-2 3.136719-2.855469 3.363281-7.710938.507812-10.84375l-13.296874-14.59375c-10.828126-11.804688-26.226563-18.601563-42.246094-18.65625l-30.058594-.09375c-13.355469-.339844-26.125-5.453125-36.019531-14.410156l-87.347657-103.835938c-.890624-1.0625-.824218-2.601562.15625-3.582031.671876-.675781 1.460938-.773438 1.871094-.773438s1.199219.097657 1.875.773438l79.507813 79.511719c7.859375 7.859374 20.648437 7.859374 28.507812-.003907l9.34375-9.339843v-.003907l16.589844-16.589843s.003906 0 .003906-.003907c0 0 .003907-.003906.003907-.003906l9.339843-9.339844c7.859375-7.859375 7.859375-20.648437 0-28.507812l-79.507812-79.507813c-1.03125-1.03125-1.03125-2.714844 0-3.746094.980469-.980468 2.519531-1.046874 3.582031-.15625l103.835938 87.351563c8.960937 9.890625 14.074218 22.664063 14.414062 36.015625l.089844 30.0625c.054687 16.015625 6.855468 31.414062 18.675781 42.265625l14.226563 12.957031c3.136718 2.855469 7.988281 2.628906 10.84375-.503906 2.851562-3.136719 2.625-7.988281-.507813-10.84375l-14.203125-12.9375c-8.660156-7.945312-13.644531-19.242188-13.683594-30.988281l-.09375-30.140625c0-.054688 0-.109375-.003906-.164063-.414062-17.265625-7.085938-33.769531-18.789062-46.472656-.21875-.238281-.453126-.464844-.703126-.675781l-104.222656-87.671875c-7.203125-6.0625-17.65625-5.609375-24.3125 1.046875-7.019531 7.019531-7.019531 18.4375 0 25.453125l79.507813 79.511719c1.875 1.875 1.875 4.925781 0 6.800781l-3.917969 3.914062-88.613281-88.609375c-2.996094-3-7.855469-3-10.851563 0-2.996094 2.996094-2.996094 7.855469 0 10.851563l88.613282 88.613281-5.742188 5.738281-88.613281-88.609375c-2.996094-2.996094-7.855469-2.996094-10.851563 0-3 2.996094-3 7.855469 0 10.851563l88.609375 88.613281-3.914062 3.917969c-1.875 1.875-4.925781 1.875-6.800781 0l-79.511719-79.507813c-3.398438-3.398437-7.917969-5.273437-12.726563-5.273437s-9.328125 1.875-12.726562 5.273437c-6.65625 6.65625-7.105469 17.109375-1.046875 24.316406l87.675781 104.21875c.207031.25.433594.484376.671875.703126zm0 0" />
          </svg>
          Add To Fridge
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.fridgeSubmitHandler}>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Ingredient Name"
              name="name"
              value={this.state.name}
              onChange={this.fridgeFormHandler}
              className="form-input"
            />
            <select
              onChange={this.categoryClick}
              value={this.state.category}
              className="form-header"
            >
              <option selected>Category</option>
              <option value="Produce">Produce</option>
              <option value="Seafood">Seafood</option>
              <option value="Cheese">Cheese</option>
              <option value="Meat">Meat</option>
              <option value="Liquor">Liquor</option>
              <option value="PreparedFoods">Prepared Foods</option>
              <option value="Bread">Bread</option>
              <option value="Other">Other</option>
            </select>
            
            <div className="add-form-quantity-container" style={{ display: "flex" }} >
  
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Quantity"
                  name="quantity_value"
                  value={this.state.quantity_value}
                  onChange={this.fridgeFormHandler}
                  className="form-input"
                />

                <select
                  onChange={this.measurementClick}
                  value={this.state.quantity_measurement}
                  className="form-header"
                >
                  <option selected>measurement</option>
                  <option value="blank"></option>
                  <option value="oz">oz</option>
                  <option value="lbs">lbs</option>
                  <option value="kg">kg</option>
                  <option value="teaspoon">teaspoon</option>
                  <option value="tablespoon">tablespoon</option>
                  <option value="pints">pint</option>
                  <option value="cup">cup</option>
                  <option value="gals">gal</option>
                  <option value="liter">liter</option>
                </select>

            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            name="submit"
            onClick={this.fridgeSubmitHandler}
            className="form-button"
          >
            <svg
              width="25px"
              fill="white"
              viewBox="0 -1 511.99871 511"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "8px" }}
            >
              <path d="m380.589844 204.039062 30.082031-1.90625c.050781-.003906.105469-.007812.160156-.011718 21.4375-1.808594 40.679688-13.039063 52.796875-30.820313l23.78125-34.890625c20.699219-30.375 28.71875-67.0625 22.574219-103.300781-1.207031-7.117187-4.847656-13.675781-10.246094-18.460937-5.402343-4.789063-12.347656-7.617188-19.558593-7.960938-36.726563-1.757812-72.175782 10.605469-99.847657 34.796875l-31.789062 27.792969c-16.199219 14.160156-25.042969 34.609375-24.269531 56.113281.003906.050781.003906.105469.007812.160156l1.714844 30.089844c.667968 11.730469-3.632813 23.304687-11.777344 31.734375l-248.351562 255.132812c-6.648438 6.933594-10.082032 16.445313-9.664063 26.785157.460937 11.382812 5.683594 22.5625 13.972656 29.910156 7.488281 6.636719 17.78125 10.417969 28.070313 10.417969 1.101562 0 2.203125-.042969 3.300781-.132813 10.316406-.824219 19.351563-5.371093 25.46875-12.847656l223.464844-277.085937c7.410156-9.117188 18.386719-14.773438 30.109375-15.515626zm-42.039063 5.859376-223.445312 277.0625c-3.414063 4.171874-8.664063 6.742187-14.78125 7.230468-7.277344.582032-14.738281-1.839844-19.964844-6.472656-5.226563-4.636719-8.523437-11.753906-8.816406-19.046875-.25-6.128906 1.667969-11.648437 5.363281-15.5l248.332031-255.113281c11.132813-11.519532 16.992188-27.296875 16.085938-43.289063l-1.714844-30.011719c-.582031-16.832031 6.351563-32.835937 19.035156-43.925781l31.789063-27.792969c24.671875-21.566406 56.289062-32.578124 89.015625-31.023437 3.726562.179687 7.3125 1.640625 10.105469 4.117187 2.792968 2.472657 4.671874 5.863282 5.296874 9.539063 5.476563 32.308594-1.671874 65.011719-20.125 92.089844l-23.78125 34.894531c-9.488281 13.921875-24.546874 22.722656-41.328124 24.164062l-30 1.898438c-15.984376 1.015625-30.945313 8.726562-41.066407 21.179688zm0 0" />
              <path d="m497.820312 440.570312-166.519531-151.667968c-3.132812-2.855469-7.984375-2.628906-10.84375.503906-2.851562 3.132812-2.625 7.988281.507813 10.84375l166.476562 151.632812c3.960938 3.660157 6.207032 9.054688 6.328125 15.1875.144531 7.296876-2.71875 14.597657-7.660156 19.539063-4.9375 4.9375-12.226563 7.808594-19.539063 7.660156-6.132812-.121093-11.527343-2.367187-15.148437-6.285156l-148.382813-162.90625c-2.855468-3.136719-7.710937-3.359375-10.84375-.507813-3.132812 2.855469-3.359374 7.710938-.503906 10.84375l148.417969 162.945313c6.523437 7.054687 15.8125 11.054687 26.160156 11.257813.269531.003906.535157.007812.804688.007812 11.121093 0 22.242187-4.511719 29.886719-12.160156 7.835937-7.835938 12.378906-19.308594 12.152343-30.695313-.203125-10.347656-4.199219-19.636719-11.292969-26.199219zm0 0" />
              <path d="m92.609375 202.585938c12.703125 11.703124 29.207031 18.375 46.472656 18.789062.054688.003906.109375.003906.160157.003906l30.140624.09375c11.75.035156 23.042969 5.023438 30.96875 13.660156l13.277344 14.574219c1.515625 1.664063 3.589844 2.507813 5.675782 2.507813 1.84375 0 3.695312-.660156 5.164062-2 3.136719-2.855469 3.363281-7.710938.507812-10.84375l-13.296874-14.59375c-10.828126-11.804688-26.226563-18.601563-42.246094-18.65625l-30.058594-.09375c-13.355469-.339844-26.125-5.453125-36.019531-14.410156l-87.347657-103.835938c-.890624-1.0625-.824218-2.601562.15625-3.582031.671876-.675781 1.460938-.773438 1.871094-.773438s1.199219.097657 1.875.773438l79.507813 79.511719c7.859375 7.859374 20.648437 7.859374 28.507812-.003907l9.34375-9.339843v-.003907l16.589844-16.589843s.003906 0 .003906-.003907c0 0 .003907-.003906.003907-.003906l9.339843-9.339844c7.859375-7.859375 7.859375-20.648437 0-28.507812l-79.507812-79.507813c-1.03125-1.03125-1.03125-2.714844 0-3.746094.980469-.980468 2.519531-1.046874 3.582031-.15625l103.835938 87.351563c8.960937 9.890625 14.074218 22.664063 14.414062 36.015625l.089844 30.0625c.054687 16.015625 6.855468 31.414062 18.675781 42.265625l14.226563 12.957031c3.136718 2.855469 7.988281 2.628906 10.84375-.503906 2.851562-3.136719 2.625-7.988281-.507813-10.84375l-14.203125-12.9375c-8.660156-7.945312-13.644531-19.242188-13.683594-30.988281l-.09375-30.140625c0-.054688 0-.109375-.003906-.164063-.414062-17.265625-7.085938-33.769531-18.789062-46.472656-.21875-.238281-.453126-.464844-.703126-.675781l-104.222656-87.671875c-7.203125-6.0625-17.65625-5.609375-24.3125 1.046875-7.019531 7.019531-7.019531 18.4375 0 25.453125l79.507813 79.511719c1.875 1.875 1.875 4.925781 0 6.800781l-3.917969 3.914062-88.613281-88.609375c-2.996094-3-7.855469-3-10.851563 0-2.996094 2.996094-2.996094 7.855469 0 10.851563l88.613282 88.613281-5.742188 5.738281-88.613281-88.609375c-2.996094-2.996094-7.855469-2.996094-10.851563 0-3 2.996094-3 7.855469 0 10.851563l88.609375 88.613281-3.914062 3.917969c-1.875 1.875-4.925781 1.875-6.800781 0l-79.511719-79.507813c-3.398438-3.398437-7.917969-5.273437-12.726563-5.273437s-9.328125 1.875-12.726562 5.273437c-6.65625 6.65625-7.105469 17.109375-1.046875 24.316406l87.675781 104.21875c.207031.25.433594.484376.671875.703126zm0 0" />
            </svg>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default FridgeForm;
