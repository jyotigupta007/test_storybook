import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {muiTheme} from 'storybook-addon-material-ui';

import SimplePopover from './Popover';


// const types = {
//   '': '',
//   highlight: 'highlight',
//   disabled: 'disabled'
// }

storiesOf('Popover', module)
  .addDecorator(muiTheme())
  .addWithInfo(
    'Popover with info', 
    `
    A component to display a Popover.
    `,
    () =>  (
      <SimplePopover classes={{typography :  {}}} />    ),
    { inline: true },
  )
