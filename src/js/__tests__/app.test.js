import checkLuhn from '../LuhnAlgorithm';

test.each([['5555555555554444'], ['4111111111111111'], ['371449635398431']])(
  'Valid true',
  (value) => {
    const result = checkLuhn(value);
    expect(result).toBeTruthy();
  }
);

test.each([['55555555555544'], ['411111111111'], ['371449635331']])('Valid false', (value) => {
  const result = checkLuhn(value);
  expect(result).toBeFalsy();
});
