import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Picture from 'src/assets/Images/profil.png';


const Profil = ( {author, description, birthday} ) => {
  return (
    <Card className="profil">
        <Image src={Picture} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{author}</Card.Header>
        <Card.Meta>
            <span className='date'>{birthday}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
        </Card.Content>
    </Card>
  );
};

export default Profil;