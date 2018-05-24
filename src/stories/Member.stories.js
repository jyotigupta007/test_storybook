import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
// import {muiTheme} from 'storybook-addon-material-ui';
import { muiTheme } from 'storybook-addon-material-ui';

import Member from './Member';

const types = {
  '': '',
  highlight: 'highlight',
  disabled: 'disabled'
}

const newTheme = {
    themeName: 'Grey Theme',
    palette: {
        primary1Color: '#00bcd4',
        alternateTextColor: '#4a4a4a',
        textColor: 'blue',
        secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
        disabledColor: '#757575',
        accent1Color: '#607d8b',
    },
};

storiesOf('Member', module)
  .addDecorator(muiTheme([newTheme]))
  .addWithInfo(
    'Member with info', 
    `
    A component to display a Member details.
    `,
    () =>  (
      <Member name="Louie Anderson" designation="Founder" image="" />
    ),
    { inline: true },
  )
