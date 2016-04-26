/**
 * Created by JLou on 3/27/2016.
 */
import React from 'react';
import data from './data';
import { Link } from 'react-router';
import { Table } from 'react-bootstrap';

/**
 * A list of all the category
 */
class IndexSidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let tdStyle = {
            border: "0px"
        }

        return (
            <Table hover>
                <thead>
                <tr>
                    <th><h2>Categories</h2></th>
                </tr>
                </thead>
                <tbody>
                {this.props.categories.map((category, index) => (
                    <tr key={index}>
                        <td style={tdStyle}><Link to={`/dashboard/category/${category}`}>{category}</Link></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }
}

export default IndexSidebar;