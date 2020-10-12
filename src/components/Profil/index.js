import React from 'react';
import { Card, Divider, Grid, Image, Segment } from 'semantic-ui-react';
import Picture from 'src/assets/Images/profil.png';
import Progression from 'src/components/Progression';


const Profil = ( {data} ) => {
console.log(data.description);
  return (
    <Segment id="cv-segment">
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <Card className="profil">
              <Image src={Picture} wrapped ui={false} />
              <Card.Content>
              <Card.Header>{data.author}</Card.Header>
              <Card.Meta>
                  <span className='date'>{data.birthday}</span>
              </Card.Meta>
              <Card.Description>{data.description}</Card.Description>
              </Card.Content>
              <Progression/>
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

    <Divider vertical>==</Divider>

    </Segment>
  );
};

export default Profil;