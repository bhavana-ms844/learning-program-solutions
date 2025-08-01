import React from 'react';

class CurrencyConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: null
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const rupees = parseFloat(this.state.rupees);
    if (!isNaN(rupees)) {
      const euro = (rupees / 88.5).toFixed(2); // Assume 1 Euro = 88.5 INR
      this.setState({ euro });
    }
  };

  render() {
    return (
      <div>
        <h2>💱 Currency Convertor</h2>
        <input
          type="number"
          placeholder="Enter amount in ₹ INR"
          value={this.state.rupees}
          onChange={this.handleChange}
        />{' '}
        <button onClick={this.handleSubmit}>Convert</button>
        {this.state.euro !== null && (
          <p>Converted amount: € {this.state.euro}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
