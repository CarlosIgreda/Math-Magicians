import { error } from 'console';
import calculate from './calculate';
import operate from './operate';

jest.mock('./operate');

describe('calculate', () => {
  beforeEach(() => {
    operate.mockClear();
  });

  it('should return an object with null values when "AC" button is clicked', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should perform the operation and return the result when "=" button is clicked', () => {
    operate.mockImplementation((a, b, op) => {
      if (op === '+') {
        return Number(a) + Number(b);
      }
      if (op === '-') {
        return Number(a) - Number(b);
      }

      return error;
    });

    const result = calculate({ total: '5', next: '2', operation: '+' }, '=');
    expect(result).toEqual({ total: 7, next: null, operation: null });
    expect(operate).toHaveBeenCalledWith('5', '2', '+');
  });
});
