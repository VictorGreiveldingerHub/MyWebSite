import React from 'react';
import { Divider, Segment, Grid, Image } from 'semantic-ui-react';
import reactLogo from 'src/assets/Images/react-logo.svg';


const Description = () => {
    return (
        <div className="description">
            <Segment inverted>
                <Image
                    src={reactLogo}
                    id="react-logo"
                    alt="logo-react"/>
                <p> 
                    Bonjour à tous, récemment sorti d'une formation de 5 mois chez O'clock j'avais à coeur de mettre en production mon propre site web et web mobile.
                    Ce site a pour but de montrer mon Curriculum Vitae ainsi que quelques exemples de travaux que j'ai déjà réalisés en tant que
                    développeur Fullstack Javascript Junior Web et Web Mobile.
                </p>
                <span></span>
                <br/>
            <Divider inverted />
            <Segment>
                <Grid columns={3} relaxed='very'>
                <Grid.Column>
                <p> Section à remplir</p>
                </Grid.Column>
                <Grid.Column id="javascript-section">
                    <p> Une page pour montrer quelques travaux </p>
                </Grid.Column>
                <Grid.Column>
                    <p> Une page pour me contacter. A venir </p>
                </Grid.Column>
                </Grid>
                </Segment>
            </Segment>
        </div>
    );
};

export default Description;