import { Text } from '@mantine/core';
import { HeartIcon } from './icons/HeartIcon';

export const MadeBy = () => {
  return (
    <Text size="xs" c="dimmed">
      Made with <HeartIcon size={14} /> by{' '}
      <a href="https://adamdrake.dev/" target="_blank" rel="noopener noreferrer">
        adamdrake.dev
      </a>
    </Text>
  );
};
