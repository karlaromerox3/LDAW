import React from 'react';
import '../App.css';
import '../styles/modals.css';
import { Button, Modal } from 'react-bootstrap';
class GoogleLogin extends React.Component {
  state = {
      googleLoginUrl: null,
  };

  componentDidMount() {
      fetch('https://localhost:8000/api/auth/google/callback', { headers: new Headers({ accept: 'application/json' }) })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error('Something went wrong!');
          })
          .then((data) => this.setState({ googleLoginUrl: data.url }))
          .catch((error) => console.error(error));
  }

  render() {
      const { googleLoginUrl } = this.state;
      return (
          <React.StrictMode>
              {googleLoginUrl && (
                  <a className="App-link" href={googleLoginUrl}>
                      Sign in with Google
                  </a>
              )}
          </React.StrictMode>
      );
  }
}

export default GoogleLogin;