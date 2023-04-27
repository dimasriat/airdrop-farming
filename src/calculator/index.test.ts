import { add, subtract } from './index';

describe('Calculator', () => {
  test('add', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 2)).toBe(1);
    expect(add(-1, -2)).toBe(-3);
  });

  test('subtract', () => {
    expect(subtract(3, 2)).toBe(1);
    expect(subtract(1, 2)).toBe(-1);
    expect(subtract(-1, -2)).toBe(1);
  });
});
