import { UsersActions } from 'features/users';

export interface UserState {
  email: string;
  name: string;
  selectedUserDataset: { id: number; email: string; name: string } | null;
}

export const userInitialState: UserState = {
  email: '',
  name: '',
  selectedUserDataset: null,
};

export const userReducer = (state: UserState, action: UsersActions): UserState => {
  switch (action.type) {
    case 'SET_EMAIL': {
      return { ...state, email: action.payload.email };
    }
    case 'SET_NAME': {
      return { ...state, name: action.payload.name };
    }
    case 'SET_SELECTED_USER': {
      return { ...state, selectedUserDataset: action.payload.selectedUserDataset };
    }
    case 'RESET_USER_FORM_DATASET': {
      return { ...state, email: '', name: '' };
    }
    default: {
      return state;
    }
  }
};
