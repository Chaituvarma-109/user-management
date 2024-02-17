import { writable } from "svelte/store";

import user1 from "./assets/images/user1.png";
import user2 from "./assets/images/user2.png";
import user3 from "./assets/images/user3.png";

export const users = writable([
  {
    imag: user1,
    userName: "John",
    userEmail: "John@bitfumes.com",
    userId: 1,
    active: false,
  },
  {
    imag: user2,
    userName: "chaitu",
    userEmail: "chaitu@email.com",
    userId: 2,
    active: true,
  },
  {
    imag: user3,
    userName: "hacker",
    userEmail: "hacker@mail.com",
    userId: 3,
    active: false,
  },
]);

export const remove = ({ detail }) => {
  users.update((_users) => _users.filter((user) => user.userId !== detail));
};

export const add = ({ detail }) => {
  users.update((_users) => [
    ..._users,
    {
      userId: _users.length + 1,
      imag: user1,
      userName: detail.name,
      userEmail: detail.email,
      active: detail.active,
    },
  ]);
};
