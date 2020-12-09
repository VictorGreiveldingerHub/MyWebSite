// Import Npm
import React from 'react';
import {
    Segment,
    Header,
    Grid,
    Container,
    Button,
} from 'semantic-ui-react';
import { Flip, Roll } from 'react-reveal';

// Import data, styles
import './styles.scss';

import GithubAPI from 'src/components/GithubAPI';
import TodoList from 'src/components/TodoList';
import DeviceConverter from 'src/components/DeviceConverter';

const C = () => {
    return (
        <Segment id="realisation-segment" vertical textAlign='center'>
            <Header as='h2'>
                <Roll right cascade>
                    Projets
                </Roll>
            </Header>
            <Grid stackable columns={1}>
                <Grid.Column>
                    <Segment id="projet-segment">
                        <Header inverted id="header-projet">React API Github 👩‍🎨</Header>
                        <Container>
                            <GithubAPI /> 
                            <Flip top>
                                <Button id="projet-button">
                                <a href="https://github.com/VictorGreiveldingerHub/React-GitHub-API" target="no_blank">Voir le code</a></Button>
                            </Flip> 
                        </Container>    
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment id="projet-segment">
                        <Header inverted id="header-projet">React TodoList ⚡️</Header>
                        <Container>
                            <TodoList />  
                        </Container>
                        <Button id="projet-button">
                            <a href="https://github.com/VictorGreiveldingerHub/TodoListReact" target="no_blank">Voir le code</a></Button>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment id="projet-segment">
                        <Header inverted id="header-projet">Device Converter ⚡️</Header>
                        <Container>
                            <DeviceConverter />
                        </Container>
                        <Button id="projet-button">
                        <a href="https://github.com/VictorGreiveldingerHub/Device-converter" target="no_blank">Voir le code</a></Button>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    );
};

C.propTypes = {};

export default C;