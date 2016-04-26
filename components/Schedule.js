/**
 * Created by JLou on 3/28/2016.
 */
import React from 'react';
import {ButtonToolbar, Button, Modal, Input, Row, Col} from 'react-bootstrap';
import ScheduleList from './schedule/ScheduleList';
import ExerciseList from './schedule/ExerciseList';
import FoodList from './schedule/FoodList';
import GeneralModal from './schedule/modal/GeneralModal';
import SimpleDatePicker from './schedule/SimpleDatePicker';
import SimpleTimePicker from './schedule/SimpleTimePicker';

class Schedule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSchedule: false,
            showExercise: false,
            showRecipe: false,
            scheduleInfo: {scheduleInfo: [{'schedule_id': '', 'schedule_date': '', 'user_id': ''}]},
            scheduleName: '',
            recipeName: '',
            year: '',
            month: '',
            day: '',
            set: '',
            currentScheduleIndex: -1
        }
    }

    /**
     * initialize data
     */
    componentDidMount() {

        let _this = this;

        $.ajax({
            url: `/schedule?userId=${localStorage.getItem('userId')}`,
            type: 'get',
            dataType: 'json',
            cache: false,
            success: function (scheduleInfo) {
                this.setState({scheduleInfo: scheduleInfo});
                _this.forceUpdate();

            }.bind(this),
            error: function (xhr, status, err) {
                console.error("error");
            }.bind(this)
        });

    }

    /**
     * interactive ui
     */

    /**
     * Schedule
     */
    handleScheduleNameChange(e) {
        this.setState({scheduleName: e.target.value});
    }

    handleDateChange(date) {
        this.setState(date);
    }

    handleScheduleSubmit(e) {
        e.preventDefault();
        console.log('form submitted..');
        this.hideModal();
    }

    /**
     *
     * Exercise
     *
     */

    handleSetChange(e) {
        this.setState({set: e.target.value});
    }

    handleExerciseSubmit(e) {
        e.preventDefault();
        console.log('exe');
        this.hideModal();
    }

    /**
     *  Recipe
     */

    handleRecipeNameChange(e) {
        this.setState({recipeName: e.target.value});
    }

    handleRecipeSubmit(e) {
        e.preventDefault();
        this.hideModal();
    }


    // callback to get child's update
    handleScheduleClick(index) {
        this.setState({currentScheduleIndex: index});
    }

    /**
     * show and hide modal
     */
    showScheduleModal() {
        this.setState({showSchedule: true});
    }

    showExerciseModal() {
        this.setState({showExercise: true});
    }

    showRecipeModal() {
        this.setState({showRecipe: true});
    }

    hideModal() {
        this.setState({showSchedule: false, showExercise: false, showRecipe: false});
    }

    render() {

        let scheduleItem = (
            <form >
                <Input
                    label="Schedule Name"
                    type="text"
                    placeholder="schedule :)"
                    value={this.state.scheduleName}
                    onChange={this.handleScheduleNameChange.bind(this)}
                />
                <SimpleDatePicker onDateChange={this.handleDateChange.bind(this)}/>
            </form>
        );

        let exerciseItem = (
            <form >

                <Input type="select" label="Exercise">
                    <option value="barbell cuol">barbell cuol</option>
                    <option value="incline dumbbell curl">incline dumbbell curl</option>
                </Input>

                <SimpleTimePicker/>

                <Input
                    type="text"
                    label="Set"
                    placeholder="set :)"
                    value={this.state.set}
                    onChange={this.handleSetChange.bind(this)}
                />

            </form>
        );

        let recipeItem = (
            <form >

                <Input
                    type="text"
                    label="Recipe Name"
                    placeholder="Enter your recipe name"
                    onChange={this.handleRecipeNameChange.bind(this)}

                />

                <Input type="checkbox" label="Egg"></Input>
                <Input type="checkbox" label="Pork"></Input>
                <Input type="checkbox" label="Bacon"></Input>
                <Input type="checkbox" label="Banana"></Input>
                <Input type="checkbox" label="Chicken"></Input>

                <SimpleTimePicker/>

            </form>
        );

        return (

            <Row>

                {/*Placeholder for schedule*/}
                <Col md={4}>

                    <Button bsStyle="primary" onClick={this.showScheduleModal.bind(this)}>
                        Add Schedule
                    </Button>

                    <Modal
                        {...this.props}
                        show={this.state.showSchedule}
                        onHide={this.hideModal.bind(this)}
                        dialogClassName="custom-modal"
                    >
                        <GeneralModal title={"New Schedule"}
                                      handleOnClickClose={this.hideModal.bind(this)}
                                      handleOnClickSubmit={this.handleScheduleSubmit.bind(this)}>
                            {scheduleItem}
                        </GeneralModal>

                    </Modal>
                    <ScheduleList scheduleData={this.state.scheduleInfo}
                                  onScheduleClick={this.handleScheduleClick.bind(this)}/>
                </Col>

                {/*Placeholder for exercise*/}
                <Col md={4}>

                    <Button bsStyle="primary" onClick={this.showExerciseModal.bind(this)}>
                        Add Exercise
                    </Button>

                    <Modal
                        {...this.props}
                        show={this.state.showExercise}
                        onHide={this.hideModal.bind(this)}
                        dialogClassName="custom-modal"
                    >
                        <GeneralModal title={"New Exercise"}
                                      handleOnClickClose={this.hideModal.bind(this)}
                                      handleOnClickSubmit={this.handleExerciseSubmit.bind(this)}>
                            {exerciseItem}
                        </GeneralModal>

                    </Modal>
                    <ExerciseList currentScheduleIndex={this.state.currentScheduleIndex}
                                  scheduleData={this.state.scheduleInfo}/>
                </Col>

                {/*Placeholder for food*/}
                <Col md={4}>

                    <Button bsStyle="primary" onClick={this.showRecipeModal.bind(this)}>
                        Add Recipe
                    </Button>

                    <Modal
                        {...this.props}
                        show={this.state.showRecipe}
                        onHide={this.hideModal.bind(this)}
                        dialogClassName="custom-modal"
                    >
                        <GeneralModal title={"New Recipe"}
                                      handleOnClickClose={this.hideModal.bind(this)}
                                      handleOnClickSubmit={this.handleRecipeSubmit.bind(this)}>
                            {recipeItem}
                        </GeneralModal>
                    </Modal>
                    <FoodList currentScheduleIndex={this.state.currentScheduleIndex}
                              scheduleData={this.state.scheduleInfo}/>
                </Col>
            </Row>
        );
    }
}

export default Schedule;