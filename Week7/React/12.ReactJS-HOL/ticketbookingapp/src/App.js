import React from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let content;
    if (this.state.isLoggedIn) {
      content = <UserPage onLogout={this.handleLogout} />;
    } else {
      content = <GuestPage onLogin={this.handleLogin} />;
    }

    return (
      <div style={{ fontFamily: 'Arial', padding: '20px' }}>
        <h1>Ticket Booking App</h1>
        {content}
      </div>
    );
  }
}

export default App;
