import TagList from '../components/TagList';
import { tags } from './mocks/tags.mock';

export default {
  title: 'Components/TagList',
  component: TagList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    isLoading: false,
    isError: false,
    tags: tags
  }
};

export const Default = {};

export const Loading = {
  args: {
    isLoading: true
  }
};

export const Error = {
  args: {
    isError: true
  }
};

export const EmptyResult = {
  args: {
    tags: []
  }
};
