import { add } from './index';

test('sayHello returns correct greeting', () => {
    expect(add(1, 2)).toBe(3);
});