import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Segment,
    Header,
    Loader,
    Item,
    Divider,
    Modal,
    Button,
} from 'semantic-ui-react';
import { Bounce, Zoom } from 'react-reveal';
import './styles.scss';



const C = () => {
    const [open, setOpen] = useState(false);
    return (
        <Segment vertical textAlign='center' id="experience-segment">
            <Container text>
                <Header as='h2'>
                <Bounce left cascade>
                    Expériences
                </Bounce>
                </Header>
                <Item.Group>
                <Zoom right cascade>
                    <Item>
                        <Item.Content>
                            <Header as='h3'>Développeur Front Web et Web Mobile</Header>
                            <Item.Meta>O'clock - Avril 2020 / Mai 2020</Item.Meta>
                            <Item.Description>Projet de fin d'étude d'une durée de 1 mois</Item.Description>
                            <Item.Extra>
                                <Header as='h3'>Pair2Peer</Header>
                                    <Modal
                                        onClose={() => setOpen(false)}
                                        onOpen={() => setOpen(true)}
                                        open={open}
                                        trigger={<Button primary>Voir la vidéo de présentation</Button>}
                                        >
                                        <Modal.Header>
                                            Pair2Peer
                                        </Modal.Header>
                                        <Modal.Content>
                                        <iframe width="100%" height="415" src="https://www.youtube.com/embed/nRSm9SfLXbw?start=2281" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button color='black' onClick={() => setOpen(false)}>
                                            Quitter
                                            </Button>
                                        </Modal.Actions>
                                    </Modal>
                                <p>
                                    Cahier des charges (BDD, création d'une IU), methode Agile Scrum, 
                                </p>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                        <Divider section />
                    <Item>
                        <Item.Content>
                            <Header as='h3'>Agent de tri</Header> 
                            <Item.Meta>La Poste - Metz</Item.Meta>
                            <Item.Description>Tri des lettres / colis passants par la poste. Nettoyage des locaux</Item.Description>
                            <Item.Extra>Mission d'interim</Item.Extra>
                        </Item.Content>
                    </Item>
                        <Divider section />
                            <Item>
                                <Item.Content>
                                    <Header as='h3'>Agent de production</Header> 
                                    <Item.Meta>Imprimerie Centrale - Luxembourg</Item.Meta>
                                    <Item.Description>
                                        Mise en machine de feuille pour produire des magazines, journaux.
                                        Nettoyage des locaux
                                        Empaquettage divers.
                                    </Item.Description>
                                    <Item.Extra>Job d'été</Item.Extra>
                                </Item.Content>
                            </Item>
                        </Zoom>          
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