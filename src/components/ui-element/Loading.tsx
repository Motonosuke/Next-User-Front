import React from 'react';

import { Spinner } from 'components/chakra-parts/Feedback';
import { Box } from 'components/chakra-parts/Layout';

interface Props {
  size?: string;
  type: 'whole' | 'section';
}

export const Loading = ({ size, type }: Props) => {
  return (
    <>
      {type == 'whole' ? (
        <Box left="50%" position="absolute" top="50%" transform={'translate(-50%, -50%)'}>
          <Spinner color="primary.400" size={size} />
        </Box>
      ) : (
        <Box alignItems="center" display="flex" justifyContent="center">
          <Spinner color="primary.400" size={size} />
        </Box>
      )}
    </>
  );
};
