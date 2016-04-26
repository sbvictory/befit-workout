/**
 * Created by JLou on 4/12/2016.
 */
/**
 * Created by JLou on 4/12/2016.
 */
import React from 'react';
import { Input, Row, Col } from 'react-bootstrap';

class SimpleTimePicker extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const slots = [];

        for (let i = 0; i < 48; i++) {

            let period;

            if (i % 2 == 0) {
                period = `${i * 30 / 60}:00 -- ${i * 30 / 60}:30`;
            } else {
                period = `${Math.floor(i * 30 / 60)}:30 -- ${Math.floor((i + 1) * 30 / 60)}:00`;
            }

            slots.push(period);
        }

        return (

            <Input type="select" label="Time">

                {
                    slots.map(function (slot, index) {
                        return (

                            <option key={index} value={index}>{slot}</option>
                        );
                    })
                }
            </Input>

        );
    }
}

export default SimpleTimePicker;