import { add } from './index';

test('add returns correct greeting', () => {
    expect(add(1, 2)).toBe(3);
});

test('add returns correct greeting', () => {
    expect(add(12, 3)).toBe(3);
});