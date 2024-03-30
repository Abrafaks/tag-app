import { fn } from '@storybook/test';
import PaginationComponent from '../components/PaginationComponent';

export default {
  title: 'Components/PaginationComponent',
  component: PaginationComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    handlePageChange: fn(),
    page: 1,
    maxPage: 52,
    isLoading: false,
    tags: [1, 2]
  }
};

export const Default = {};

export const Disabled = {
  args: {
    isLoading: true,
    tags: []
  }
};
