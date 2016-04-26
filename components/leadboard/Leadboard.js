/**
 * Created by JLou on 4/4/2016.
 */
import React from 'react';

class Leadboard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

}

export default Leadboard;
