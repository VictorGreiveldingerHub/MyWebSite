import React from 'react';
import { Progress, Card, Divider, Grid, Image, Segment, List } from 'semantic-ui-react';
import reactLogo from 'src/assets/Images/react-logo.svg';
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
                percent={60}
                active
                color="orange"
                id="bar-progression"
              > Devenir un bon Développeur Fullstack Javascript / React.
              </Progress>
          </Card>
        </Grid.Column>
        <Grid.Column>
        <Segment>
          <div className="environnement">
            <h2>Environnement de travail</h2>
              <h3>Langages / technologies associés</h3>
            <List
              divided
              verticalAlign='left'
            >
              <List.Item>
                <List.Content>
                  <List.Header>HTML5 - CSS3 - SCSS</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>Javascript</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>REACT - REDUX - AXIOS - REACT ROUTER</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>Webpack - Babel</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>Semantic-ui / Semantic-ui-react / Bulma-react</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>Postgres</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>NodeJS / Express</List.Header>
                </List.Content>
              </List.Item>
            </List>
            <Divider section />
            <h3>OUTILS UTILISES :</h3>
            <List
              divided
              verticalAlign='left'
            >
              <List.Item>
                <List.Content>
                  <List.Header>Github - Git</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>Discord</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>Vscode</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>Slack</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>Environnement Linux - Mac</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </div>
          </Segment>
        </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
    </Segment>
  );
};

export default Profil;