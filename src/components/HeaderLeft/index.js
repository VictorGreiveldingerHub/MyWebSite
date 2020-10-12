import React from 'react'
import PropTypes from 'prop-types';
import { Menu, Sidebar, Checkbox } from 'semantic-ui-react'

const HeaderLeft = () => {
    return (
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="left"
          icon='labeled'
          inverted
          vertical
          visible= "false"
        >
          {/* <Menu.Item as='a'>
            Language
          </Menu.Item> */}
          <Menu.Item as='a'>
            Accueil
          </Menu.Item>
          <Menu.Item as='a'>
            Curriculum Vitae
          </Menu.Item>
          <Menu.Item as='a'>
            Travaux
          </Menu.Item>
          {/* <Menu.Item as='a'>
            <Checkbox toggle />
            Theme Light / Dark
          </Menu.Item> */}
        </Sidebar>
    )
};


HeaderLeft.propTypes = {
}

export default HeaderLeft;