import { fn } from '@storybook/test';
import ElementsNumber from '../components/ElementsNumber';

export default {
  title: 'Components/ElementsNumber',
  component: ElementsNumber,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    handleElementChange: fn(),
    pageSize: '30',
    tags: [1, 2],
    isLoading: false
  }
};

export const Default = {};

export const Disabled = {
  args: {
    isLoading: true,
    tags: []
  }
};
