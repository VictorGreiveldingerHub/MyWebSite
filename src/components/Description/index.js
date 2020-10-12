import React from 'react';
import { Divider, Segment, Grid, Image } from 'semantic-ui-react';
import reactLogo from 'src/assets/Images/react-logo.svg';


const Description = () => {
    return (
        <div className="description">
            <Segment inverted>
            <div>
                <span>Survole moi</span>
            </div>
                <Image
                    src={reactLogo}
                    id="react-logo"
                    alt="logo-react"/>
                <p> Bonjour à tous, voici mon Porte Folio / Curriculum Vitae / Développeur Fullstack Javascript Junior </p> <br/>
                <p> Programmer avec à React ... </p>
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