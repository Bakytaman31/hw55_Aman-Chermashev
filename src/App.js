import React, { Component } from 'react';
import './App.css';
import Remote from "./Componets/Remote/Remote";

class App extends Component {
    state = {
      ingridients:[
          {name: 'Meat', count: 0},
          {name: 'Cheese', count: 0},
          {name: 'Salad', count: 0},
          {name: 'Bacon', count: 0},
      ],
      totalPrice: 20
    };

    addIngridient = ingridient => {
        const ingridients = [...this.state.ingridients];
        const ingridientsNames = this.state.ingridients.findIndex(i => i.name === ingridient.name);
        ingridients[ingridientsNames].count++;
        let totalPrice = this.state.totalPrice;
        totalPrice += ingridient.price;
        this.setState({ingridients, totalPrice});
    };

    removeIngridient = ingridient => {
        const ingridients = [...this.state.ingridients];
        const ingridientsNames = this.state.ingridients.findIndex(i => i.name === ingridient.name);
        ingridients[ingridientsNames].count--;
        let totalPrice = this.state.totalPrice;
        totalPrice -= ingridient.price;
        this.setState({ingridients, totalPrice});
    };

  render() {
    return (
      <div className="App">
          <Remote
              ingridientQuantity={this.state.ingridients}
              price={this.state.totalPrice}
              addIngr={this.addIngridient}
              removeIngridient={this.removeIngridient}/>
          <div className="Burger">
              <div className="BreadTop">
                  <div className="Seeds1"></div>
                  <div className="Seeds2"></div>
              </div>
              <div className="BreadBottom"></div>
              <p>Total Price: {this.state.totalPrice}</p>
          </div>
      </div>
    );
  }
}

export default App;
