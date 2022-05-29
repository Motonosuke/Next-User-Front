import type { CustomLayout } from 'next';

import { Box } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';

export const MainLayout: CustomLayout = (page) => {
  return (
    <chakra.main>
      <Box height="100vh" mx="auto" pt={20} width="70vw">
        {page}
      </Box>
    </chakra.main>
  );
};
