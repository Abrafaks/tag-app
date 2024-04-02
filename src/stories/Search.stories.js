import { fn } from '@storybook/test';
import Search from '../components/Search';

export default {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    handleInputChange: fn(),
    search: ''
  }
};

export const Default = {};

export const Filled = {
  args: {
    search: 'React'
  }
};
