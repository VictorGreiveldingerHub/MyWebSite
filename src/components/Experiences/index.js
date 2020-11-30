import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Segment,
    Header,
    Loader,
    Item,
    Divider
} from 'semantic-ui-react';
import './styles.scss';



const C = () => {
    return (
        <Segment vertical textAlign='center'>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Expériences
                </Header>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header>Développeur Front Web et Web Mobile</Item.Header>
                            <Item.Meta>O'clock - Avril 2020 / Mai 2020</Item.Meta>
                            <Item.Description>Projet de fin d'étude d'une durée de 1 mois</Item.Description>
                            <Item.Extra>
                                <Header as='h3'>Pair2Peer</Header>
                                <p>
                                    Cahier des charges (BDD, création d'une IU), methode Agile Scrum, 
                                </p>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                        <Divider section />
                    <Item>
                        <Item.Content>
                            <Item.Header>Agent de tri</Item.Header>
                            <Item.Meta>La Poste - Metz</Item.Meta>
                            <Item.Description>Tri des lettres / colis passants par la poste</Item.Description>
                            <Item.Extra>Mission d'interim</Item.Extra>
                        </Item.Content>
                    </Item>
                        <Divider section />
                    <Item>
                        <Item.Content>
                            <Item.Header>Agent de production</Item.Header>
                            <Item.Meta>Imprimerie Centrale - Luxembourg</Item.Meta>
                            <Item.Description></Item.Description>
                            <Item.Extra>Job d'été</Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
                <Divider section />
                <Loader active size="medium" inline='centered'>
                    Chargement des expériences
                </Loader>
            </Container>
      </Segment>
    );
};

C.propTypes = {};

export default C;