0/**
 * Created by JLou on 4/2/2016.
 */
import React from 'react';
import Rater from 'react-rating';

class CircleRater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {initRate: 0}
    }

    /**
     *
     * @returns {{userId: *, itemId: *, category: *}}
     */
    static get propTypes() {
        return {
            userId: React.PropTypes.string.isRequired,
            itemId: React.PropTypes.string.isRequired,
            category: React.PropTypes.string.isRequired
        }
    }

    // switch to other item need rerender
    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.itemId !== this.props.itemId) {
            this._handleUpdateRate(nextProps.itemId);
            return true;
        }

        return false;
    }

    // the first time that component mounted
    componentDidMount() {

        this._handleUpdateRate(this.props.itemId);

    }

    _rateDone(rate) {

        let userId = this.props.userId;
        let itemId = this.props.itemId;
        let category = this.props.category;

        let _this = this;
        // set current rate
        $.ajax({
            url: "/rating",
            type: "post",
            dataType: "json",
            data: {rate: rate * 2, userId: userId, itemId: itemId, category: category},
            success: function (json) {
                _this.setState({initRate: rate});
            }.bind(this),
            error: function () {
                // failed then set to previous rate
                _this.setState({initRate: this.state.initRate});
            }
        });

    }

    // update rate
    _handleUpdateRate(itemId) {

        let userId = this.props.userId;
        let category = this.props.category;
        // id from ui starts from 0 while in db starts from 1
        itemId = String(Number(itemId) + 1);

        let _this = this;

        // get init rate
        $.ajax({
            url: `/${category}/rating?userId=${userId}&itemId=${itemId}`,
            type: "get",
            dataType: "json",
            success: function (json) {
                // set the rate if success
                // set a new state if the item is rated
                if (json.rateRes.length !== 0) {
                    let rate = json.rateRes[0].rate / 2;
                    _this.setState({initRate: rate});
                    _this.forceUpdate();
                } else {
                    // when we router from some other item that has already rated, we need update
                    _this.setState({initRate: 1});
                    _this.forceUpdate();
                }

            }.bind(this),
            error: function () {
                // let the user now
                console.log('error when set rate..');
            }
        });

    }

    render() {

        let selectedStyle = {
            display: 'inline-block',
            borderRadius: '50%',
            border: '5px double white',
            width: '20px',
            height: '20px',
            backgroundColor: 'yellow'
        };

        let deselectedStyle = {
            display: 'inline-block',
            borderRadius: '50%',
            border: '5px double white',
            width: '20px',
            height: '20px',
            backgroundColor: 'grey'
        };

        return (

            <Rater initialRate={this.state.initRate} full={ <img src={'/image/fullstar.png'}/>}
                   empty={<img src={'/image/emptystar.png'}/>} onClick={this._rateDone.bind(this)}/>)
    }

}

export default CircleRater;
