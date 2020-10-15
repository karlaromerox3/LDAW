import React from 'react';
import Layout from '../components/Layout';
import '../App.css';

class Home extends React.Component {
  state = {
      googleLoginUrl: null,
  };

  componentDidMount() {
      fetch('http://localhost:8000/api/auth/google/url', { headers: new Headers({ accept: 'application/json' }) })
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
          <Layout>
              {googleLoginUrl && (
                  <a className="App-link" href={googleLoginUrl}>
                      <p>Sign in with Google</p>
                  </a>
              )}
          </Layout>
      );
  }
}

export default Home;