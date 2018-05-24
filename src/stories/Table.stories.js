import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {muiTheme} from 'storybook-addon-material-ui';

import TableComponent from './Table';

// const types = {
//   '': '',
//   highlight: 'highlight',
//   disabled: 'disabled'
// }

storiesOf('Table', module)
  .addDecorator(muiTheme())
  .addWithInfo(
    'Table with info', 
    `
    A component to display a table.
    `,
    () =>  (
      <TableComponent  records={[{id: 1292, userid: 4295, display_id: 1}, {id: 1293, userid: 8289, display_id: 2}, {id: 1294, userid: 4292, display_id: 3}]} />
    ),
    { inline: true },
  )
