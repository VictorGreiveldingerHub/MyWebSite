import React, { Component, createRef } from 'react'
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
  Menu,
} from 'semantic-ui-react'

export default class StickyExampleOffset extends Component {
  contextRef = createRef()

  render() {
    return (
      <Grid style={{height:'1000px'}} centered columns={3}>
        <Grid.Column>
          <Ref innerRef={this.contextRef}>
            <Segment style={{height:'1000px'}}>
              <Rail position='left'>
                <Sticky
                  bottomOffset={50}
                  context={this.contextRef}
                  offset={0}
                  pushing
                >
                  <Menu vertical>
                    <Menu.Item
                    name='promotions'
                    >
                    <Header as='h4'>Profil</Header>
                    </Menu.Item>

                    <Menu.Item
                    name='coupons'
                    >
                    <Header as='h4'>Compétences</Header>
                    </Menu.Item>
                    <Menu.Item
                    name='rebates'
                    >
                    <Header as='h4'>Expériences</Header>
                    </Menu.Item>
                    <Menu.Item
                    name='rebates'
                    >
                    <Header as='h4'>Projets</Header>
                    </Menu.Item>
                    <Menu.Item
                    name='rebates'
                    >
                    <Header as='h4'>Contact</Header>
                    </Menu.Item>
                </Menu>
                </Sticky>
              </Rail>
            </Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    )
  }
}