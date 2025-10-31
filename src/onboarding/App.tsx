import { IconBrandGooglePlay, IconCoffee } from '@tabler/icons-react';
import {
  Anchor,
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { AppProviders } from '../components/AppProviders';

type Props = {};

const App = ({}: Props) => {
  const DONATION_URL = 'https://www.buymeacoffee.com/adam.dev';
  const REVIEW_URL =
    'https://chromewebstore.google.com/detail/no-more-youtube-shorts-pl/epbbdicigbegncpmpabbjhlfdgjfedem';

  return (
    <AppProviders>
      <Container size="md" py="xl">
        <Stack gap="xl">
          <Stack gap={4}>
            <Title order={1}>No More YouTube Shorts Please</Title>
            <Text c="dimmed">
              A tiny, opinionated Chrome extension that hides YouTube Shorts so you can reclaim your
              time and attention.
            </Text>
          </Stack>

          <Card withBorder padding="lg" radius="md">
            <Stack gap="md">
              <Group justify="space-between" align="center">
                <Title order={2}>What it does</Title>
                <Badge color="primary" variant="light">
                  Focus-first
                </Badge>
              </Group>
              <Text>
                This extension removes or minimizes entry points to Shorts across YouTube, nudging
                your browsing toward intentional, longer-form content. It aims to reduce the
                compulsive, slot-machine style swiping and break normal video watching.
              </Text>
            </Stack>
          </Card>

          <Flex gap="lg" direction={{ base: 'column', sm: 'row' }}>
            <Card withBorder padding="lg" radius="md" style={{ flex: 1 }}>
              <Stack gap="sm">
                <Title order={3}>Why avoid endless Shorts?</Title>
                <List spacing="xs" withPadding>
                  <List.Item
                    icon={
                      <ThemeIcon color="red" variant="light">
                        •
                      </ThemeIcon>
                    }
                  >
                    Short reward cycles train compulsive checking and erode focus
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color="red" variant="light">
                        •
                      </ThemeIcon>
                    }
                  >
                    Context switching increases mental fatigue and reduces deep work
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color="red" variant="light">
                        •
                      </ThemeIcon>
                    }
                  >
                    Rapid novelty can make thoughtful content feel "boring" by comparison
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color="red" variant="light">
                        •
                      </ThemeIcon>
                    }
                  >
                    Time fragmentation makes it harder to stick to your intentions
                  </List.Item>
                </List>
              </Stack>
            </Card>

            <Card withBorder padding="lg" radius="md" style={{ flex: 1 }}>
              <Stack gap="sm">
                <Title order={3}>Benefits of long-form</Title>
                <List spacing="xs" withPadding>
                  <List.Item
                    icon={
                      <ThemeIcon color="green" variant="light">
                        •
                      </ThemeIcon>
                    }
                  >
                    Deeper understanding and better memory retention
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color="green" variant="light">
                        •
                      </ThemeIcon>
                    }
                  >
                    Stronger focus and calm, fewer dopamine spikes
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color="green" variant="light">
                        •
                      </ThemeIcon>
                    }
                  >
                    Higher quality learning and more meaningful entertainment
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color="green" variant="light">
                        •
                      </ThemeIcon>
                    }
                  >
                    More time back for what matters
                  </List.Item>
                </List>
              </Stack>
            </Card>
          </Flex>

          <Divider my="sm" />

          <Card withBorder padding="lg" radius="md">
            <Stack gap="md" align="center">
              <Title order={3}>Like it? Support the project</Title>
              <Button
                component="a"
                href={REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                leftSection={<IconBrandGooglePlay size={16} />}
              >
                Leave a review
              </Button>
              <Text ta="center" c="dimmed">
                If this extension helps you build better habits, you can support development and
                maintenance. Even a small donation makes a big difference.
              </Text>
              <Flex gap="sm" direction="column">
                <Button
                  component="a"
                  href={DONATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  color="primary"
                  variant="light"
                  leftSection={<IconCoffee size={16} />}
                >
                  Buy me a coffee
                </Button>
                <Anchor href={DONATION_URL} target="_blank" rel="noreferrer">
                  {DONATION_URL}
                </Anchor>
              </Flex>
            </Stack>
          </Card>

          <Text c="dimmed" size="sm" ta="center">
            You can close this tab now — the extension is active.
          </Text>
        </Stack>
      </Container>
    </AppProviders>
  );
};

export { App };
