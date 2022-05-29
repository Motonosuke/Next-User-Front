import React, { Dispatch } from 'react';

import { FormControl, Input, Button } from 'components/chakra-parts/Forms';
import { Box, Grid, GridItem, Stack, HStack } from 'components/chakra-parts/Layout';
import { Text } from 'components/chakra-parts/Typography';
import { Loading } from 'components/ui-element/Loading';
import { UsersActions } from 'features/users/action';
import { Users } from 'features/users/types';
import { ModalKind } from 'hooks/useModal';

interface Props {
  dispatch: Dispatch<UsersActions>;
  email: string;
  name: string;
  usersData?: Users;
  handleCreteUser: () => void;
  handleSelectUser: (
    selectedUserDataset: {
      id: number;
      email: string;
      name: string;
    },
    modalKind: ModalKind,
  ) => void;
}

export const UserForm = ({ dispatch, email, handleCreteUser, handleSelectUser, name, usersData }: Props) => {
  if (!usersData) return <Loading type="whole" />;

  return (
    <Grid gap={20} templateColumns="repeat(2, 1fr)">
      <GridItem boxShadow="lg" maxW="400px" p={10}>
        <Stack spacing={4}>
          <FormControl>
            <Stack>
              <Input
                onChange={(e) => dispatch({ payload: { name: e.target.value }, type: 'SET_NAME' })}
                placeholder="name"
                type="text"
                value={name}
              />
              <Input
                onChange={(e) => dispatch({ payload: { email: e.target.value }, type: 'SET_EMAIL' })}
                placeholder="email"
                type="email"
                value={email}
              />
              <Button onClick={handleCreteUser} type="submit">
                登録ボタン
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </GridItem>
      <GridItem>
        <Stack>
          {usersData.map((user) => (
            <Box key={user.id}>
              <HStack justifyContent="space-between">
                <HStack>
                  <Text>{`名前: ${user.name}`}</Text>
                  <Text>/</Text>
                  <Text>{`メールアドレス: ${user.email}`}</Text>
                </HStack>
                <HStack>
                  {/* <Button onClick={() => handleSelectUser(user, 'updateUser')}>更新</Button> */}
                  <Button colorScheme="warning" onClick={() => handleSelectUser(user, 'deleteUser')}>
                    削除
                  </Button>
                </HStack>
              </HStack>
            </Box>
          ))}
        </Stack>
      </GridItem>
    </Grid>
  );
};
