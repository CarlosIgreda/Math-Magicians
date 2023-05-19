import operate from './operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    const result = operate('5', '2', '+');
    expect(result).toBe('7');
  });

  it('should perform subtraction correctly', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });

  it('should perform multiplication correctly', () => {
    const result = operate('5', '2', 'x');
    expect(result).toBe('10');
  });

  it('should perform division correctly', () => {
    const result = operate('10', '2', '÷');
    expect(result).toBe('5');
  });

  it('should return "Can\'t divide by 0." when dividing by 0', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should perform modulo correctly', () => {
    const result = operate('10', '3', '%');
    expect(result).toBe('1');
  });

  it('should return "Can\'t find modulo as can\'t divide by 0." when modulo by 0', () => {
    const result = operate('10', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => operate('5', '2', '$')).toThrow("Unknown operation '$'");
  });
});
