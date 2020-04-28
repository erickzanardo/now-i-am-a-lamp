const _mockerUsers = [
  { email: 'jacksparrow@pirate.com', password: 'rum' },
  { email: 'bond@mi6.com', password: 'martini' },
];

export const authenticate = (
  email: string,
  password: string,
): Promise<string> => {
  for (let i = 0; i < _mockerUsers.length; i++) {
    const u = _mockerUsers[i];

    if (u.email === email && u.password === password) {
      return Promise.resolve(
        'ThisIsAnAwesomeTokenUsedForAuthenticationsDonTTellAnyone',
      );
    }
  }

  return Promise.reject();
};
