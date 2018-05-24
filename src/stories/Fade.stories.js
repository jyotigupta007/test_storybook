import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {muiTheme} from 'storybook-addon-material-ui';

import FadeComponent from './Fade';

// const types = {
//   '': '',
//   highlight: 'highlight',
//   disabled: 'disabled'
// }

storiesOf('Fade', module)
  .addDecorator(muiTheme())
  .addWithInfo(
    'Fade with info', 
    `
    A component to display a Fade transition.
    `,
    () =>  (
      <FadeComponent classes={{svg : "", paper : "", polygon : "", root : ""}}/>    ),
    { inline: true },
  )
