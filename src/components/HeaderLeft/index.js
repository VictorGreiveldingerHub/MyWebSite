import React from 'react'
import { Menu, Sidebar, Checkbox } from 'semantic-ui-react'
// import Logo from 'src/assets/Images/MyLogo.png';

const HeaderLeft = ({ animation, direction, visible }) => {
    return (
        <Sidebar
          as={Menu}
          animation={animation}
          direction={direction}
          icon='labeled'
          inverted
          vertical
          visible={visible}
          width=''
        >
          <Menu.Item as='a'>
            Language
          </Menu.Item>
          <Menu.Item as='a'>
            Accueil
          </Menu.Item>
          <Menu.Item as='a'>
            Curriculum Vitae
          </Menu.Item>
          <Menu.Item as='a'>
            Travaux
          </Menu.Item>
          <Menu.Item as='a'>
            {/* <Checkbox toggle /> */}
            Theme Light / Dark
          </Menu.Item>
        </Sidebar>
    )
};

export default HeaderLeft;