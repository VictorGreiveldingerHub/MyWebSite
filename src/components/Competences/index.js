import React from 'react';
import PropTypes from 'prop-types';
import {
    Segment,
    Header,
    List,
} from 'semantic-ui-react';
// Pour l'animation du cercle
import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./animated.js";

import { Slide } from "react-awesome-reveal";

import './styles.scss';

const C = ( {data} ) => {
    // const MAXRATING = 5;
    const competencesJSX = data.map((item) => {
    return (
        <Segment
            key={item.id}
            id="segment-list"
            circular
        >
            <Slide fraction="0.5" cascade>
                <List.Item key={item.id}>
                    <Header as='h3'>{item.text}</Header>
                </List.Item>
            </Slide>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={66}
                duration={1.4}
                easingFunction={easeQuadInOut}
                id="display"
            >
                {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({ pathTransition: "none" })}
                    />
                );
                }}
            </AnimatedProgressProvider>
        </Segment>

        );
    }); 
            // <Segment id="display" circular>
            
            // </Segment>   
    return (
        <Segment id="segment-competences" vertical textAlign='center'>
            <Header as='h2'>
                Compétences
            </Header>
            <List id="list-item">
                {competencesJSX}
            </List>
        </Segment>
    );
};

C.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

export default C;