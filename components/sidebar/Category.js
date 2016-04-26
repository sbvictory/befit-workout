/**
 * Created by JLou on 3/27/2016.
 */
import React from 'react';
import data from './data';

class Category extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const category = data.lookupCategory(this.props.params.category)

        return (
            <div>
                <h4>Introduction of {category.name}</h4>
                {this.props.children || (
                    <p>{category.description}</p>
                )}
            </div>
        )
    }
}

export default Category;