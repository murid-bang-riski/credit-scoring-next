import { atom } from 'recoil';
import { TUserParams } from './types';

export const userSearch = atom({
  key: 'user-query',
  default: '',
});

export const CategoryStatusState = atom({
  key: 'category-status-state',
  default: 'none',
});

export const IdentityStatusState = atom({
  key: 'identity-status-state',
  default: false,
});

export const CharacterStatusState = atom({
  key: 'character-status-state',
  default: false,
});

export const CapabilityStatusState = atom({
  key: 'capability-status-state',
  default: false,
});

export const filterActionUser = atom<TUserParams>({
  key: 'flter-action',
  default: {
    date_from: '',
    page: '1',
    per_page: '20',
    search: '',
  },
});
