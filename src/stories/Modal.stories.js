
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {muiTheme} from 'storybook-addon-material-ui';

import SimpleModalWrapped from './Modal';

storiesOf('Modal', module)
  .addDecorator(muiTheme())
  .addWithInfo(
    'Modal with info', 
    `
    A component to display a Modal.
    `,
    () =>  (
    	<SimpleModalWrapped classes={{ paper : ""}}/>
    ),
    { inline: true },
  )
