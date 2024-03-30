import { fn } from '@storybook/test';
import OrderBy from '../components/OrderBy';

export default {
  title: 'Components/OrderBy',
  component: OrderBy,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    handleOrder: fn(),
    order: 'desc',
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
