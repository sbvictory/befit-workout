import React from 'react';
import IndexSidebar from './sidebar/IndexSidebar';
import Index from './sidebar/Index';
import CategorySidebar from './sidebar/CategorySidebar';
import Item from './sidebar/Item';
import {Col, Row} from 'react-bootstrap';
import LeadboardSidebar from './leadboard/LeadboardSidebar';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: ['food', 'schedule', 'leadboard'],
            leadboardCategories: ['HBar'],
            food: {allItem: []},
            video: {allItem: []}
        };
    }

    componentDidMount() {

        $.ajax({
            url: "/allFood",
            type: "get",
            dataType: "json",
            cache: false,
            success: function (json) {
                this.setState({food: json});
            }.bind(this),
            error: function () {
                console.log("failed...");
            }
        });
    }

    render() {

        // sidebar area
        let sidebar;
        if (this.props.params.category === undefined)
            sidebar = this.props.leadboard !== undefined ?
                <LeadboardSidebar itemList={this.state.leadboardCategories}/>
                : <IndexSidebar categories={this.state.categories}/>;
        else
            sidebar = <CategorySidebar category={ this.props.params.category }
                                       itemList={this.state[this.props.params.category]}/>;

        // food and video content are
        let content = this.props.params.itemId === undefined ? <Index/> :
            <Item itemId={this.props.params.itemId} category={ this.props.params.category }/>;

        // schedule area
        let schedule = this.props.schedule;
        let leadboard = this.props.leadboard;

        return (

            <Row>
                <Col md={2}>
                    <div>{sidebar}</div>

                </Col>
                <Col md={10}>
                    {leadboard || schedule || content}
                </Col>
            </Row>

        )
    }
}

export default Dashboard;
