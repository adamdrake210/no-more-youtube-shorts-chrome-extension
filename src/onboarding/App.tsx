import { Container, Flex, Title } from '@mantine/core';
import { AppProviders } from '../components/AppProviders';

export const App = () => {
  return (
    <AppProviders>
      <Container>
        <Flex align="center">
          <Title order={1}>No More YouTube Shorts Please</Title>
        </Flex>
      </Container>
    </AppProviders>
  );
};
