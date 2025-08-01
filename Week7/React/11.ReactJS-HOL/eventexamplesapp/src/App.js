import React from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
    this.sayHello();
  };

  sayHello = () => {
    console.log("Hello! This is an increment action.");
  };

  decrementCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  sayWelcome = (message) => {
    alert("Message: " + message);
  };

  handlePress = (e) => {
    alert("I was clicked");
    console.log("Synthetic event object:", e);
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Event Handling Examples</h1>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>Increment</button>{' '}
        <button onClick={this.decrementCounter}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handlePress}>OnPress (Synthetic Event)</button>

        <hr />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
