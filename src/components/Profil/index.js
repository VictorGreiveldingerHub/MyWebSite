import React, {useState} from 'react';
import PropTypes from 'prop-types';
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
import Profil from 'src/assets/Images/profil.png';
import Opquast from 'src/assets/Images/Opquast.png';
import eLAO from 'src/assets/Images/eLAO.png';
import './styles.scss';

const C = () => {
    const [open, setOpen] = useState(false);
    return (
        <Segment style={{ margin: '5% 25%' }} vertical textAlign='center'>
        <Header
          as='h3'
          content="Profil"
          style={{
            marginBottom: '1em',
            fontSize: '2em',
          }}
        />
        <Header
            as='h4'
            content="Tout droit sorti d'une formation de 5 mois chez O'Clock, je suis aujourd'hui impatient de travailler"
            style={{color: 'rgb(172, 169, 169)', fontWeight: '100', marginBottom: '2em', paddingBottom: '2em', borderBottom: '1px solid rgb(172, 169, 169)'}}
        />
        <Grid container stackable>
          <Grid.Row style={{justifyContent: 'center'}}>
              <Grid.Column width={5}>
                <Header as='h4' content='A propos' />
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
                            <Popup position='top center' content='Français : langue maternelle' trigger={<span>Français</span>} />
                            <Popup position='top center' content='Anglais : niveau B2' trigger={<span>Anglais</span>} />
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column id="third-column" width={5}>
                <Header as='h4'>
                  En plus
                </Header>
                <p id="propos-second">
                  Suite à la fin de ma formation, j'ai eu l'occasion de passer mon certificat Opquast® 
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<Button>Opquast ?</Button>}
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
                            <Button color='black' onClick={() => setOpen(false)}>
                            Quitter
                            </Button>
                            <Button
                            labelPosition='right'
                            icon='arrow right'
                            onClick={() => setOpen(false)}
                            >
                            <a href='https://www.opquast.com/' target='no_blank'>En savoir plus sur Opquast</a>
                            </Button>
                        </Modal.Actions>
                    </Modal>
                    Ainsi qu'un rapport d'évaluation eLAO en Anglais professionnel.
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<Button>eLAO ?</Button>}
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
                            <Button color='black' onClick={() => setOpen(false)}>
                            Quitter
                            </Button>
                            <Button
                            labelPosition='right'
                            icon='arrow right'
                            onClick={() => setOpen(false)}
                            >
                            <a href='https://www.elao.co/' target='no_blank'>En savoir plus sur eLAO</a>
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
};

C.propTypes = {};

export default C;