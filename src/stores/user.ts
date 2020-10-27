import { writable } from 'svelte/store';

interface IUser {
  userid: string;
  password: string;
};

export const userInfo = writable<IUser>({
  userid: '',
  password: '',
});
