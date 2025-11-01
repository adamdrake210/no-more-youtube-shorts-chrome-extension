import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      {children}
    </MantineProvider>
  );
};
