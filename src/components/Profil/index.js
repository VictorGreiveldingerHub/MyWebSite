import React, {useState} from 'react';
import {
    Segment,
    Header,
    Grid,
    Image,
    Modal,
    Button,
    List,
    Popup,
} from 'semantic-ui-react';
import { motion } from "framer-motion";
import { Zoom, Flip } from 'react-reveal';

// Import images + styles
import Profil from 'src/assets/Images/profil.png';
import Opquast from 'src/assets/Images/Opquast.png';
import eLAO from 'src/assets/Images/eLAO.png';
import Oclock from 'src/assets/Images/oclock.png';
import './styles.scss';

const C = () => {
    const [open, setOpen] = useState(false);
    const [openElao, setOpenElao] = useState(false);
    const [openOpquast, setOpenOpquast] = useState(false);
    return (
        <Segment id="profil-segment" vertical textAlign='center'>
            <Header as='h2'>
                <Zoom top cascade>Profil</Zoom>
            </Header>
        <Header
            as='h3'
            content="Tout droit sorti d'une formation de 5 mois chez O'Clock, je suis aujourd'hui impatient de travailler"
            style={{color: 'rgb(172, 169, 169)', marginBottom: '2em', paddingBottom: '2em', borderBottom: '1px solid rgb(172, 169, 169)'}}
        />
        <Grid container stackable>
          <Grid.Row style={{justifyContent: 'center'}}>
              <Grid.Column width={5}>
                <Header as='h3' content='A propos' />
                <p id="propos">
                    Jeune développeur de 25 printemps, motivé à souhait pour apprendre des nouvelles technologies, j'aime entreprendre des choses qu'elles soient inscrites ou non dans mes compétences.
                </p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Image
                    id="profil-image"
                    src={Profil}
                    circular
                />
                <List>
                    <List.Item>
                        <List.Icon name='user' />
                        <List.Content> 22/11/1995 </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content> Metz, Luxembourg </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content> victorgreiveldinger@gmail.com </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='language' />
                        <List.Content>
                            <Popup position='top center' content='Français : langue maternelle' trigger={<span style={{margin: '5px', color:'rgb(64, 113, 247)'}}>Français -</span>} />
                            <Popup position='top center' content='Anglais : niveau B2' trigger={<span style={{margin: '5px', color:'rgb(64, 113, 247)'}}>Anglais</span>} />
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column id="third-column" width={5}>
                <Header as='h3'>
                  Diplômes & Formations
                </Header>
                <p id="propos-second">Issu d'une formation O'Clock</p>
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={
                            <motion.button
                                id="button-hover"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                            <Flip top>
                            <Button primary id="buttonWhy">
                                O'clock ?
                            </Button>
                            </Flip>
                            </motion.button>
                        }
                        >
                        <Modal.Header>
                            Titre professionnel Développeur Web et Web Mobile - Niveau 5 (bac+2)
                        </Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src={Oclock} wrapped />
                            <Modal.Description>
                            <Header>
                                O'clock - Formation en Téléprésentiel - Labelisée Grande Ecole du Numérique
                            </Header>
                            <p>De décembre 2019 à mai 2020</p>
                            <p>700 heures intensives :</p>
                            <p>
                            3 mois de Socle : HTML / CSS / Javascript / NodeJS
                            </p>
                            <p>
                            1 mois de spécialisation : React
                            </p>
                            <p>
                            1 mois de projet de fin d'étude : Pair2Peer
                            </p>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={() => setOpen(false)}>
                            Quitter
                            </Button>
                            <Button
                            labelPosition='right'
                            icon='arrow right'
                            onClick={() => setOpen(false)}
                            >
                            <a href='https://oclock.io/formations/developpeur-web-fullstack-javascript' target='no_blank'>En savoir plus sur O'Clock</a>
                            </Button>
                        </Modal.Actions>
                    </Modal>
                <p id="propos-second">
                  Suite à la fin de ma formation, j'ai eu l'occasion de passer mon certificat Opquast®
                </p> 
                    <Modal
                        onClose={() => setOpenOpquast(false)}
                        onOpen={() => setOpenOpquast(true)}
                        open={openOpquast}
                        trigger={
                            <motion.button
                                id="button-hover"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                            <Flip top>
                            <Button primary id="buttonWhy">
                                Opquast® ?
                            </Button>
                            </Flip>
                            </motion.button>
                        }
                        >
                        <Modal.Header>Opquast</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src={Opquast} wrapped />
                            <Modal.Description>
                            <Header>Certificat Opquast® : Maîtrise de la qualité en projet Web</Header>
                            <p>
                                Avec un score de 740 sur 1000.
                            </p>
                            <p>
                                Bonne connaissance des bonnes pratiques qualité Web et du vocabulaire associé. Capacités à comprendre et échanger avec les autres professionnels du Web.
                            </p>
                            <a href='https://directory.opquast.com/fr/certificat/92F3MC/' target="no_blank">Ma fiche descriptive</a>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={() => setOpenOpquast(false)}>
                            Quitter
                            </Button>
                            <Button
                            labelPosition='right'
                            icon='arrow right'
                            onClick={() => setOpenOpquast(false)}
                            >
                            <a href='https://www.opquast.com/' target='no_blank'>En savoir plus sur Opquast</a>
                            </Button>
                        </Modal.Actions>
                    </Modal>
                <p id="propos-second">Ainsi qu'un rapport d'évaluation eLAO en Anglais professionnel.</p>
                    <Modal
                        onClose={() => setOpenElao(false)}
                        onOpen={() => setOpenElao(true)}
                        open={openElao}
                        trigger={
                            <motion.button
                                id="button-hover"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                            <Flip top>
                            <Button primary id="buttonWhy">
                                eLAO ?
                            </Button>
                            </Flip>
                            </motion.button>
                        }
                        >
                        <Modal.Header>ELAO</Modal.Header>
                        <Modal.Content image>
                            <Image size='medium' src={eLAO} wrapped />
                            <Modal.Description>
                            <Header>Evaluation : Anglais - utilisation professionnelle</Header>
                            <p>Score : B2</p>
                            <p>Niveau : B2 - Indépendance</p>
                            <p>
                                Vous pouvez comprendre le contenu essentiel de sujets concrets ou abstraits dans un texte complexe, y compris une discussion technique dans votre spécialité. Vous pouvez communiquer avec un degré de spontanéité et d'aisance tel qu'une conversation avec un locuteur natif ne comporte de tension ni pour l'un ni pour l'autre. Vous pouvez vous exprimer de façon claire et détaillée sur une grande gamme de sujets, émettre un avis sur un sujet d’actualité et exposer les avantages et les inconvénients de différentes possibilités.
                            </p>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={() => setOpenElao(false)}>
                            Quitter
                            </Button>
                            <Button
                            labelPosition='right'
                            icon='arrow right'
                            onClick={() => setOpenElao(false)}
                            >
                            <a href='https://www.elao.co/' target='no_blank'>En savoir plus sur eLAO</a>
                            </Button>
                        </Modal.Actions>
                    </Modal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
};

C.propTypes = {};

export default C;