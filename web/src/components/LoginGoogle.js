import React from 'react';
import '../App.css';

import Layout from '../components/Layout';

class LoginGoogle extends React.Component {
    state = {
        loading: true,
        error: null,
        data: {},
    };

    componentDidMount() {
        fetch(`/api/auth/google/callback${this.props.location.search}`, { headers: new Headers({ accept: 'application/json' }) })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong!');
            })
            .then((data) => {
                this.setState({ loading: false, data });
            })
            .catch((error) => {
                this.setState({ loading: false, error });
                console.error(error);
            });
    }

    render() {
        const { loading, error, data } = this.state;
        if (loading) {
            return <Layout>Loading....</Layout>;
        }

        if (error) {
            return (
                <Layout>
                    <div>
                        <p>Error:</p>
                        <code className="Code-block">{error.toString()}</code>
                    </div>
                </Layout>
            );
        }

        return (
            <Layout>
                <div>
                    <details>
                        <summary>Welcome {data.user.name}</summary>
                        <p>Here is your info: </p>
                        <code className="Code-block">{JSON.stringify(data, null, 2)}</code>
                    </details>
                </div>
            </Layout>
        );
    }
}

export default LoginGoogle;