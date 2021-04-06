/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import Team from '../index.js';

test('Team-iterators_test', () => {
  const team = new Team();
  const teamObj = [];
  // eslint-disable-next-line no-restricted-syntax
  function teamItems() {
    // eslint-disable-next-line no-restricted-syntax
    for (const i of team) {
      teamObj.push(i);
    }
    return teamObj;
  }
  const expected = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Мечник',
      type: 'Swordsman',
      health: 70,
      level: 1,
      attack: 30,
      defence: 20,
    },
    {
      name: 'Маг',
      type: 'Magician',
      health: 40,
      level: 1,
      attack: 50,
      defence: 10,
    },
  ];
  // arrayBuffer.load(getBuffer());
  expect(teamItems()).toEqual(expected);
});
