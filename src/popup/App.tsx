import { Group, Box, Flex, Text, Title, Switch, Divider } from '@mantine/core';
import { useEffect, useState } from 'react';
import { AppProviders } from '../components/AppProviders';
import { MadeBy } from './components/MadeBy';

type Props = {};

const App = ({}: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const onClick = async () => {
    const newIsEnabled = !isEnabled;
    setIsEnabled(newIsEnabled);

    // Save state to chrome.storage - content script will listen and apply changes
    chrome.storage?.local.set({
      shortsHidden: newIsEnabled,
    });
  };

  // Load state on mount
  useEffect(() => {
    chrome.storage?.local.get(['shortsHidden'], (result) => {
      if (result.shortsHidden !== undefined) {
        setIsEnabled(result.shortsHidden);
      }
    });
  }, []);

  return (
    <AppProviders>
      <Box w={400} h={'auto'} p={20}>
        <Flex align="center">
          <Title order={4}>No More YouTube Shorts Please</Title>
        </Flex>
        <Text size="xs" c="dimmed">
          Switch to hide YouTube Shorts from your YouTube homepage. Youtube shorts are an
          abomination on the mind and should be hidden from view, so you can reclaim your time and
          attention.
        </Text>
        <Group justify="flex-end" mt={10}>
          <Switch
            labelPosition="left"
            label="Hide YouTube Shorts"
            checked={isEnabled}
            onChange={onClick}
          />
        </Group>
        <Divider my={12} />
        <MadeBy />
      </Box>
    </AppProviders>
  );
};

export { App };
