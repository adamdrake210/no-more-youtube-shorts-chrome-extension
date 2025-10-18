import { createRoot } from 'react-dom/client';
import '@mantine/core/styles.css';
import { Box, Group, MantineProvider, Switch, Text, Title } from '@mantine/core';
import { useState } from 'react';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const onClick = async () => {
    const url = (await chrome.tabs.query({ active: true, currentWindow: true }))[0]?.url;

    if (url && !url.includes('youtube.com')) {
      alert('Current tab is not a YouTube tab');
      return;
    }

    setIsEnabled(!isEnabled);

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab.id) return;

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        // This code runs inside the webpage
        const youtubeShortsSection = document.querySelectorAll('[is-shorts]');
        youtubeShortsSection.forEach((section) => {
          (section as HTMLElement).style.display = 'none';
        });
      },
    });
  };

  return (
    <MantineProvider defaultColorScheme="dark">
      <Box w={300} h={'auto'} p={20}>
        <Title order={4}>No More YouTube Shorts Please</Title>
        <Text size="xs" c="dimmed">
          Switch to hide YouTube Shorts on this tab. Youtube shorts are an abomination and should be
          hidden from view.
        </Text>
        <Group justify="flex-end" mt={10}>
          <Switch
            labelPosition="left"
            label="Hide YouTube Shorts"
            checked={isEnabled}
            onChange={onClick}
          />
        </Group>
      </Box>
    </MantineProvider>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
