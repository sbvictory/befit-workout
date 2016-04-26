/**
 * Created by JLou on 3/27/2016.
 */
import React from 'react';
import data from './data';
import CommentBox from '../comments/CommentBox';
import CircleRater from '../CircleRater';
import YouTube from 'react-youtube';
import {Row, Col, Label} from 'react-bootstrap';

/**
 * Detailed information of every item
 */
class Item extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            rating: 0,
            foodItem: {foodItem: [{foodItem: ''}]},
            videoItem: {videoItem: [{videoItem: ''}]}

        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.itemId !== this.props.itemId) {

            this._handleUpdate(nextProps.itemId);

            return true;
        }

        return false;
    }

    componentDidMount() {
        this._handleUpdate(this.props.itemId);
    }

    _handleUpdate(itemId) {

        let _this = this;

        if (this.props.category === 'food') {
            $.ajax({
                url: `/itemFood?id=${String(Number(itemId) + 1)}`,
                type: "get",
                dataType: "json",
                success: function (json) {
                    _this.setState({foodItem: json});
                    _this.forceUpdate();
                }.bind(this),
                error: function () {
                    console.log("failed...");
                }
            });
        }
    }

    render() {

        let mediaArea = undefined;
        let title = undefined;
        let informationArea = undefined;

        if (this.props.category === 'food') {
            let foodName = this.state.foodItem.foodItem[0].food_name;
            mediaArea = <img src={'/image/' + foodName + '.jpg'}/>;
            title = foodName;
            informationArea = (
                <div><p><Label bsStyle="success">Primary Nutrition</Label>:{ this.state.foodItem.foodItem[0].food_type }
                </p>
                    <p><Label bsStyle="warning">Calories</Label>:{ this.state.foodItem.foodItem[0].food_calories }</p>
                </div>);
        } else {
            // video
            let videoUrl = this.state.videoItem.videoItem[0].video_url;
            let id = String(videoUrl).split("=")[1];
            const opts = {
                height: '390',
                width: '640',
                playerVars: {
                    autoplay: 0
                }
            };
            mediaArea =
                <YouTube
                    videoId={id}
                    opts={opts}
                />;

        }

        let itemStyle = {
            marginTop: "20px"
        }

        let raterStyle = {
            marginTop: "20px",
            marginBottom: "20px"
        }

        return (
            <div style={itemStyle}>
                <Row>
                    <Col md={8}>{ mediaArea }</Col>
                    <Col md={4}>
                        <div><h2><Label bsStyle="info">{title}</Label></h2></div>

                        <div style={raterStyle}>
                            <CircleRater userId={localStorage.getItem('userId')} itemId={this.props.itemId}
                                         category={this.props.category}/>
                        </div>
                        <div>
                            {informationArea}
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <CommentBox itemId={this.props.itemId} category={this.props.category}
                                    userId={localStorage.getItem('userId')}
                                    apollInterval={2000}/>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Item;
