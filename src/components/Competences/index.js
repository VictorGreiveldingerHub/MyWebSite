import React from 'react';
import PropTypes from 'prop-types';
import {
    Segment,
    Header,
    List,
} from 'semantic-ui-react';
// Pour l'animation du cercle
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./animated.js";

import { Slide } from "react-awesome-reveal";

import './styles.scss';

const C = ( {data} ) => {
    const MIN_RATING = 0; 
    const competencesJSX = data.map((item) => {
        return (
            <div id="segment-list">
                <motion.button
                    id="circleHover"
                    whileHover={{ scale: 1.2}}
                    whileTap={{ scale: 0.8 }}
                >
                <Slide fraction="0.2" cascade>
                    <List.Item key={item.id}>
                        <Header as='h3' id="">{item.text}</Header>
                    </List.Item>
                </Slide>
                <Slide fraction="0.2" cascade triggerOnce>
                    <AnimatedProgressProvider
                        valueStart={MIN_RATING}
                        valueEnd={item.rating}
                        duration={3}
                        easingFunction={easeQuadInOut}
                        id="display"
                    >
                        {value => {
                        const roundedValue = Math.round(value);
                        return (
                            <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            >
                                <div>{item.text}</div>
                            </CircularProgressbar>
                        );
                        }}
                    </AnimatedProgressProvider>
                </Slide>
                </motion.button>
            </div>
        );
    });
  
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