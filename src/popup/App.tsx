import { Group, Box, Flex, Text, Title, Switch } from '@mantine/core';
import { useEffect, useState } from 'react';
import { AppProviders } from './AppProviders';

export const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  // Load state on mount
  useEffect(() => {
    chrome.storage?.local.get(['shortsHidden'], (result) => {
      if (result.shortsHidden !== undefined) {
        setIsEnabled(result.shortsHidden);
      }
    });
  }, []);

  // Current tab URL
  useEffect(() => {
    chrome.tabs?.query({ active: true, currentWindow: true }, (tabs) => {
      setCurrentUrl(tabs[0]?.url || '');
    });
  }, []);

  const onClick = async () => {
    const url = (await chrome.tabs.query({ active: true, currentWindow: true }))[0]?.url;

    if (url && !url.includes('youtube.com')) {
      alert('Current tab is not a YouTube tab');
      return;
    }

    const newIsEnabled = !isEnabled;
    setIsEnabled(newIsEnabled);

    // Save state to chrome.storage
    await chrome.storage?.local.set({ shortsHidden: newIsEnabled });

    const [tab] = await chrome.tabs?.query({ active: true, currentWindow: true });
    if (!tab.id) return;

    await chrome.scripting?.executeScript({
      target: { tabId: tab.id },
      func: (shouldHide: boolean) => {
        // This code runs inside the webpage
        const youtubeShortsSection = document.querySelectorAll('[is-shorts]');
        youtubeShortsSection.forEach((section) => {
          (section as HTMLElement).style.display = shouldHide ? 'none' : 'block';
        });

        const youtubeShortsNavigation = document.querySelectorAll('a[title="Shorts"]');
        youtubeShortsNavigation.forEach((navigation) => {
          (navigation as HTMLElement).style.display = shouldHide ? 'none' : 'block';
        });
      },
      args: [newIsEnabled],
    });
  };

  return (
    <AppProviders>
      <Box w={400} h={'auto'} p={20}>
        <Flex align="center">
          <Title order={4}>No More YouTube Shorts Please</Title>
        </Flex>
        <Text size="xs" c="dimmed">
          Switch to hide YouTube Shorts on this tab. Youtube shorts are an abomination and should be
          hidden from view.
        </Text>
        <Group justify="flex-end" mt={10}>
          {currentUrl && currentUrl.includes('youtube.com') && (
            <Switch
              labelPosition="left"
              label="Hide YouTube Shorts"
              checked={isEnabled}
              onChange={onClick}
            />
          )}
          {currentUrl && !currentUrl.includes('youtube.com') && (
            <Text size="xs" c="dimmed">
              Current tab is not a YouTube tab
            </Text>
          )}
        </Group>
      </Box>
    </AppProviders>
  );
};
