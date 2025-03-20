import { applyEasing, EASING_FN, EASING_ID, easeWithinRange } from '../src';

const duration = 1000;
const time = 150;
const start = 0;
const end = 100;

describe('applyEasing', () => {

  it('should apply the "default" easing function correctly', () => {
    const result = applyEasing(EASING_ID.default, duration, time, start, end);
    const expected = EASING_FN.linear(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });

  it('should apply the "linear" easing function correctly', () => {
    const result = applyEasing(EASING_ID.linear, duration, time, start, end);
    const expected = EASING_FN.linear(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });

  it('should apply the "inSine" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inSine, duration, time, start, end);
    const expected = EASING_FN.inSine(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "outSine" easing function correctly', () => {
    const result = applyEasing(EASING_ID.outSine, duration, time, start, end);
    const expected = EASING_FN.outSine(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inOutSine" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inOutSine, duration, time, start, end);
    const expected = EASING_FN.inOutSine(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inQuad" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inQuad, duration, time, start, end);
    const expected = EASING_FN.inQuad(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "outQuad" easing function correctly', () => {
    const result = applyEasing(EASING_ID.outQuad, duration, time, start, end);
    const expected = EASING_FN.outQuad(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inOutQuad" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inOutQuad, duration, time, start, end);
    const expected = EASING_FN.inOutQuad(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inCubic" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inCubic, duration, time, start, end);
    const expected = EASING_FN.inCubic(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "outCubic" easing function correctly', () => {
    const result = applyEasing(EASING_ID.outCubic, duration, time, start, end);
    const expected = EASING_FN.outCubic(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inOutCubic" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inOutCubic, duration, time, start, end);
    const expected = EASING_FN.inOutCubic(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inQuart" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inQuart, duration, time, start, end);
    const expected = EASING_FN.inQuart(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "outQuart" easing function correctly', () => {
    const result = applyEasing(EASING_ID.outQuart, duration, time, start, end);
    const expected = EASING_FN.outQuart(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inOutQuart" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inOutQuart, duration, time, start, end);
    const expected = EASING_FN.inOutQuart(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inQuint" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inQuint, duration, time, start, end);
    const expected = EASING_FN.inQuint(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "outQuint" easing function correctly', () => {
    const result = applyEasing(EASING_ID.outQuint, duration, time, start, end);
    const expected = EASING_FN.outQuint(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inOutQuint" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inOutQuint, duration, time, start, end);
    const expected = EASING_FN.inOutQuint(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inExpo" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inExpo, duration, time, start, end);
    const expected = EASING_FN.inExpo(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "outExpo" easing function correctly', () => {
    const result = applyEasing(EASING_ID.outExpo, duration, time, start, end);
    const expected = EASING_FN.outExpo(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inOutExpo" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inOutExpo, duration, time, start, end);
    const expected = EASING_FN.inOutExpo(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inCirc" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inCirc, duration, time, start, end);
    const expected = EASING_FN.inCirc(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "outCirc" easing function correctly', () => {
    const result = applyEasing(EASING_ID.outCirc, duration, time, start, end);
    const expected = EASING_FN.outCirc(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });
  
  it('should apply the "inOutCirc" easing function correctly', () => {
    const result = applyEasing(EASING_ID.inOutCirc, duration, time, start, end);
    const expected = EASING_FN.inOutCirc(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });

});

describe('applyEasing edge cases', () => {

  it('should handle invalid easing function ID', () => {
    const easingFnId = 'invalidId' as keyof typeof EASING_ID;
    const result = applyEasing(easingFnId, duration, time, start, end);
    const expected = EASING_FN.linear(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });

  it('should handle duration of zero', () => {
    const duration = 0;
    const result = applyEasing(EASING_ID.inOutSine, duration, time, start, end);
    // const expected = EASING_FN.inOutSine(time, start, end - start, 0);
    const expected = end;
    expect(result).toEqual(expected);
  });

  it('should handle negative duration', () => {
    const duration = -1000;
    const result = applyEasing(EASING_ID.inOutSine, duration, time, start, end);
    // const expected = EASING_FN.inOutSine(time, start, end - start, 0);
    const expected = end;
    expect(result).toEqual(expected);
  });

  it('should handle NaN duration', () => {
    const duration = NaN;
    const result = applyEasing(EASING_ID.inOutSine, duration, time, start, end);
    // const expected = EASING_FN.inOutSine(time, start, end - start, 0);
    const expected = end;
    expect(result).toEqual(expected);
  });

  it('should handle time of zero', () => {
    const time = 0;
    const result = applyEasing(EASING_ID.inOutSine, duration, time, start, end);
    const expected = EASING_FN.inOutSine(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });

  it('should handle time greater than duration', () => {
    const duration = 1000;
    const time = 1500;
    const result = applyEasing(EASING_ID.inOutSine, duration, time, start, end);
    const expected = EASING_FN.inOutSine(1000, start, end - start, 1000);
    expect(result).toEqual(expected);
  });

  it('should handle negative time', () => {
    const time = -250;
    const result = applyEasing(EASING_ID.inOutSine, duration, time, start, end);
    const expected = EASING_FN.inOutSine(0, start, end - start, duration);
    expect(result).toEqual(expected);
  });

  it('should handle start greater than end', () => {
    const start = 100;
    const end = 0;
    const result = applyEasing(EASING_ID.inOutSine, duration, time, start, end);
    const expected = EASING_FN.inOutSine(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });

  it('should handle negative start and end', () => {
    const start = -1000;
    const end = -500;
    const result = applyEasing(EASING_ID.inOutSine, duration, time, start, end);
    const expected = EASING_FN.inOutSine(time, start, end - start, duration);
    expect(result).toEqual(expected);
  });

});

describe("easeWithinRange", () => {

  it("should ease within a given range", () => {
    const value = 25;
    const start = 0;
    const end = 100;
    const result = easeWithinRange(EASING_ID.inOutSine, value, start, end);
    const expected = EASING_FN.inOutSine(value, start, end - start, end - start);
    expect(result).toEqual(expected);
  });

  it("should handle value less than start", () => {
    const value = -25;
    const start = 0;
    const end = 100;
    const result = easeWithinRange(EASING_ID.inOutSine, value, start, end);
    const expected = EASING_FN.inOutSine(0, start, end - start, end - start);
    expect(result).toEqual(expected);
  });

  it("should handle value greater than end", () => {
    const value = 125;
    const start = 0;
    const end = 100;
    const result = easeWithinRange(EASING_ID.inOutSine, value, start, end);
    const expected = EASING_FN.inOutSine(end, start, end - start, end - start);
    expect(result).toEqual(expected);
  });

  it("should handle start greater than end", () => {
    const value = 25;
    const start = 100;
    const end = 0;
    const result = easeWithinRange(EASING_ID.inOutSine, value, start, end);
    const sortedStart = Math.min(start, end);
    const sortedEnd = Math.max(start, end);
    const expected = EASING_FN.inOutSine(value, sortedStart, sortedEnd - sortedStart, sortedEnd - sortedStart);
    expect(result).toEqual(expected);
  });

  it("should handle negative start and end", () => {
    const value = -25;
    const start = -100;
    const end = -50;
    const result = easeWithinRange(EASING_ID.inOutSine, value, start, end);
    const expected = EASING_FN.inOutSine(0, start, end - start, end - start);
    expect(result).toEqual(expected);
  });

  it("should handle NaN value", () => {
    const value = NaN;
    const start = 0;
    const end = 100;
    const result = easeWithinRange(EASING_ID.inOutSine, value, start, end);
    const expected = EASING_FN.inOutSine(0, start, end - start, end - start);
    expect(result).toEqual(expected);
  });

  it("should handle NaN start and end", () => {
    const value = 25;
    const start = NaN;
    const end = NaN;
    const result = easeWithinRange(EASING_ID.inOutSine, value, start, end);
    const expected = EASING_FN.inOutSine(value, 0, 0, 0);
    expect(result).toEqual(expected);
  });

  it("should handle invalid easing function ID", () => {
    const value = 25;
    const start = 0;
    const end = 100;
    const easingFnId = 'invalidId' as keyof typeof EASING_ID;
    const result = easeWithinRange(easingFnId, value, start, end);
    const expected = EASING_FN.linear(value, start, end - start, end - start);
    expect(result).toEqual(expected);
  });

});
