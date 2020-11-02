import { writable } from 'svelte/store';

export interface IUser {
  userid: string;
  password: string;
}

export const userInfo = writable<IUser>({
  userid: '',
  password: '',
});

export function loginSuccess(info) {
  userInfo.set(info);
}
