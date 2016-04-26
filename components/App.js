import React from 'react';
import auth from './auth/auth.js';
import Dashboard from './Dashboard.js';
import {Link} from 'react-router';
import {Grid, Col, Row, Navbar, Nav, Label} from 'react-bootstrap';

export default React.createClass({

    getInitialState() {
        return {
            loggedIn: auth.loggedIn()
        }
    },

    updateAuth(loggedIn) {
        this.setState({
            loggedIn: loggedIn
        })
    },

    componentWillMount() {
        auth.onChange = this.updateAuth
        auth.login()
    },

    render() {

        var navStyle = {
            marginBottom: '0'
        }

        var pstyle = {
            color: 'black',
            fontSize: '15px',
            marginTop: '10px',
            background: 'gray',
            width: '15%',
            fontFamily: 'Arial Black'
        }

        if (this.state.loggedIn) {
            return (
                <Grid fluid={true}>
                    <Row>
                        <Navbar style={navStyle} inverse={true} fluid={true}>
                            <Navbar.Header>
                                <Navbar.Brand>Be Fit</Navbar.Brand>
                            </Navbar.Header>
                            <Nav pullRight>
                                <Navbar.Brand><Link to="/about">About</Link></Navbar.Brand>
                                <Navbar.Brand><Link to="/dashboard">Dashboard</Link></Navbar.Brand>
                                <Navbar.Brand><Link to="/logout">Log out</Link></Navbar.Brand>
                            </Nav>
                        </Navbar>
                    </Row>
                    {this.props.children || <p style={pstyle}>Welcome {localStorage.getItem('username')}! </p>}
                </Grid>
            );
        } else {
            return (
                <div>
                    <h2>
                        <Label bsStyle="info">You have logged out, please use the following link to login again</Label>
                    </h2>
                    <Link to="/login">Log in</Link>
                </div>

            );
        }
    }
})
