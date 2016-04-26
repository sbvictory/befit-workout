/**
 * Created by JLou on 4/9/2016.
 */
import React from 'react';
import { Link } from 'react-router';
import {Table} from 'react-bootstrap'

/**
 * All the items in a specific category
 */
class LeadboardSidebar extends React.Component {

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
                    <th><h2><Link to="/dashboard">LeaderBoard</Link></h2></th>
                </tr>
                </thead>
                <tbody>
                {this.props.itemList.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>
                            <Link to={`/dashboard/Leadboard/${item}`}>{item}</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }
}

export default LeadboardSidebar;