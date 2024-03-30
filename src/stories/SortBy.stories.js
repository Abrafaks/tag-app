import { fn } from '@storybook/test';
import SortBy from '../components/SortBy';

export default {
  title: 'Components/SortBy',
  component: SortBy,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    handleSort: fn(),
    sort: 'popular',
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
