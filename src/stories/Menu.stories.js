import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {muiTheme} from 'storybook-addon-material-ui';

import Menu from './Menu';
import IconMenu from './IconMenu';

const types = {
  '': '',
  highlight: 'highlight',
  disabled: 'disabled'
}

storiesOf('Menu', module)
  .addDecorator(muiTheme())
  .addWithInfo(
    'Menu with left Icon', 
    `
    A component to display a Menu.
    `,
    () =>  (
      <Menu IconAlign="leftIcon"/>
    ),
    { inline: true },
  )  
  .addWithInfo(
    'Menu with right Icon', 
    `
    A component to display a Menu.
    `,
    () =>  (
      <Menu IconAlign="rightIcon"/>
    ),
    { inline: true },
  )
  .addWithInfo(
    'Icon Menu with info', 
    `
    A component to display a Menu with icons.
    `,
    () =>  (
      <IconMenu  />
    ),
    { inline: true },
  )
