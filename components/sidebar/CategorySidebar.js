/**
 * Created by JLou on 3/27/2016.
 */
import React from 'react';
import data from './data';
import { Link } from 'react-router';
import { Table, Glyphicon } from 'react-bootstrap';

/**
 * All the items in a specific category
 */
class CategorySidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let tdStyle = {
            border: "0px",
        }

        const category = this.props.category;
        const itemList = this.props.itemList;

        return (
            <Table hover>
                <thead>
                <tr>
                    <th><h2><Link to="/dashboard">{category}</Link></h2></th>
                </tr>
                </thead>
                <tbody>
                {itemList.allItem.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>
                            <Link to={`/dashboard/category/${category}/${index}`}>
                                {item.food_name || item.video_type}</Link>
                        </td>
                    </tr>
                ))}
                </tbody>

            </Table>
        )
    }
}

export default CategorySidebar;