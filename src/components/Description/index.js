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
            <Divider inverted />
            <Segment>
                <Grid columns={3} relaxed='very'>
                <Grid.Column>
                    <p> Une page pour mon CV </p>
                </Grid.Column>
                <Divider section vertical/>

                <Grid.Column>
                    <p> Une page pour montrer quelques travaux </p>
                </Grid.Column>
                <Divider section vertical/>
                <Grid.Column>
                    <p> Une page pour me contacter </p>
                </Grid.Column>
                </Grid>
                </Segment>
            </Segment>
        </div>
    );
};

export default Description;