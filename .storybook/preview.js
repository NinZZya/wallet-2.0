import  { addDecorator } from '@storybook/react';
import  { withPropsTable } from 'storybook-addon-react-docgen';
import 'loki/configure-react';

addDecorator(withPropsTable);
