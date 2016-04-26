import React from 'react';
import auth from './auth';
import { Button, Input, Label } from 'react-bootstrap';

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            error: false
        }
    },

    handleSubmit(event) {

        event.preventDefault();

        const email = this.refs.email.getValue();
        const pass = this.refs.pass.getValue();

        auth.login(email, pass, (loggedIn) => {
            if (!loggedIn)
                return this.setState({error: true})

            const { location } = this.props

            if (location.state && location.state.nextPathname) {
                this.context.router.replace(location.state.nextPathname)
            } else {
                this.context.router.replace('/')
            }
        })
    },

    render() {

        const formSigninStyle = {
            width: '330px',
            padding: '15px',
            margin: '0 auto'
        }

        const formSigninHeadingStyle = {
            marginBottom: '10px'
        }

        const control = {
            position: 'relative',
            height: 'auto',
            width: '280px',
            padding: '10px',
            fontSize: '16px'
        }

        const bg = {
            backgroundImage: "url('/image/login.jpg')",
            minHeight: '100%',
            height: '100%'
        }

        return (
            <div style={bg}>
                <form style={formSigninStyle} onSubmit={this.handleSubmit}>
                    <h2 style={formSigninHeadingStyle}>Sign In</h2>
                    <Input ref="email" type="text" style={control} placeholder="Email address"/>
                    <Input ref="pass" type="password" style={control} placeholder="Password" required/>
                    <Input type="checkbox" label="Remember me"/>
                    <Button bsStyle="success" bsSize="large" type="submit">Login</Button>
                    <div>
                        {this.state.error && (
                            <h2><Label bsStyle="danger">Either password or account is wrong!</Label></h2>
                        )}
                    </div>
                </form>
            </div>
        )
    }
});
