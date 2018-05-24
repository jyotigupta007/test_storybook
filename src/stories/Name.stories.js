import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { text, select, withKnobs, boolean, number } from '@storybook/addon-knobs';
// import { withInfo } from '@storybook/addon-info';
import {muiTheme} from 'storybook-addon-material-ui';

import Name from './Name';

const types = {
  '': '',
  highlight: 'highlight',
  disabled: 'disabled'
}
// const label = 'Your Name';
// const defaultValue = 'Arunoda Susiripala';
// const groupId = 'GROUP-ID1';

// const value = text(label, defaultValue, groupId);
const stories = storiesOf('Name', module);
  stories.addDecorator(withKnobs);
  stories.addWithInfo(
    'Name with info', 
    `
    A component to display a colored name tag.
    `,
    () =>  (
      <Name name='Isha Saxena' />

    ),
    { inline: true },
  );
  stories.addWithInfo(
    'Name with highlight property', 
    `
    A component to display a colored name tag.
    `,
    () =>  (
      <Name name="Isha Saxena" type="highlight" />
    ),
    { inline: true },
  );  
  stories.addWithInfo(
    'Name with disabled property', 
    `
    A component to display a colored name tag.
    `,
    () =>  (
      <Name name="Isha Saxena" type="disabled" />
    ),
    { inline: true },
  );



// Knobs for React props
stories.add('Knobs with a button', () => (
  <button disabled={boolean('Disabled', false)} >
    {text('Label', 'Hello Storybook')}
  </button>
));

// Knobs as dynamic variables.
stories.add('Knobs as dynamic variables', () => {
  const name = text('Name', 'Isha Saxena');
  const age = number('Age', 23);

  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
});