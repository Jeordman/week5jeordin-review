import React, { Component } from "react";
import axios from "axios";

import "./CarPage.css";

import CarMapped from "../CarMapped/CarMapped";

export default class CarPage extends Component {
  constructor() {
    super();

    this.state = {
      cars: [],
      name: "",
      image: ""
    };
  }

  componentDidMount = () => {
    //right when the component loads we connect to the back end using axios
    //we grab the RESPONSE (res) which is all of our cars in this case
    //we then store res on state
    axios
      .get("/api/cars")
      .then(res =>
        this.setState({
          cars: res.data
        })
      )
      .catch(err => console.log("YOU BROKE THE GET", err));
  };

  handleInput = e => {
    //this handle input can be reused for an infinate number of inputs
    //as long as they have a value on state and their name is the same as the 
    //value they are connected to on state
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  addCar = () => {
    //we destructure name and image off of state
    let { name, image } = this.state;
    //this post request adds a new object to the backend representing a new car
    axios
      .post("/api/cars", { name, image })
      .then(res =>
        this.setState({
          cars: res.data,
          name: "",
          image: ""
        })
      )
      .catch(err => console.log("Add broke", err));
  };

  render() {  
    //we use destructuring to clean up our code
    let { cars, name, image } = this.state;
    return (
      <article className="body-holder">
        <section>
          {/* mapping over the cars and displaying them in a child component
          map still takes in element and index but we named ELEMENT car */}
          {cars.map((car, index) => (
            <CarMapped car={car} index={index} />
          ))}
        </section>

        <section>
          <input
            name="name"
            value={name}
            placeholder="Car Name"
            onChange={e => this.handleInput(e)}
          />
          <input
            name="image"
            value={image}
            placeholder="Image URL"
            onChange={e => this.handleInput(e)}
          />
          <button onClick={() => this.addCar()}>Create</button>
        </section>
      </article>
    );
  }
}
