import React from 'react';
import { Progress, Card, Divider, Grid, Image, Segment } from 'semantic-ui-react';
import Picture from 'src/assets/Images/profil.png';


const Profil = () => {
  return (
    <Segment id="cv-segment">
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <Card className="profil">
            <Image 
              src={Picture}
              wrapped 
              ui={false}
              size='small'
              rounded
            />
            <Card.Content>
              <Card.Header>Victor Greiveldinger</Card.Header>
              <Card.Meta>
                  <span className='date'>Né le : 22/11/1995</span>
              </Card.Meta>
              <Card.Description>
                <h3>Développeur Fullstack Javascript / React Junior</h3>
              </Card.Description>
            </Card.Content>
              <Progress
                percent={53}
                active
                color="orange"
                id="bar-progression"
              >
                  Devenir un très bon Développeur Fullstack Javascript / React 
              </Progress>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <div className="lang">
            <h2>Languages :</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <h2>Compétences :</h2>
            <h3>A l'aise avec :</h3>
            <ul>
              <li>Github</li>
              <li>Git</li>
              <li>Discord</li>
              <li>Vscode</li>
              <li>Environnement Linux</li>
              <li>Environnement Mac</li>
            </ul>
          </div>
        </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
    </Segment>
  );
};

export default Profil;