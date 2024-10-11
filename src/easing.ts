
/**
 * Constant definitions of IDs of easing functions
 */
export const EASING_ID = {
  default: "default",
  linear: "linear",
  inSine: "inSine",
  outSine: "outSine",
  inOutSine: "inOutSine",
  inQuad: "inQuad",
  outQuad: "outQuad",
  inOutQuad: "inOutQuad",
  inCubic: "inCubic",
  outCubic: "outCubic",
  inOutCubic: "inOutCubic",
  inQuart: "inQuart",
  outQuart: "outQuart",
  inOutQuart: "inOutQuart",
  inQuint: "inQuint",
  outQuint: "outQuint",
  inOutQuint: "inOutQuint",
  inExpo: "inExpo",
  outExpo: "outExpo",
  inOutExpo: "inOutExpo",
  inCirc: "inCirc",
  outCirc: "outCirc",
  inOutCirc: "inOutCirc",
} as const;

/**
 * List of all easing function IDs
 */
export const EasingIdList = Object.keys(EASING_ID) as (keyof typeof EASING_ID)[];

/**
 * Value list of pairs of: (easing function ID; label string).
 * 
 * Intended for use in dropdown lists and the like.
 */
export const EasingFnIdsVL: { value: keyof typeof EASING_ID, label: string }[] = [
  { value: EASING_ID.default, label: "(default)" },
  { value: EASING_ID.linear, label: "linear" },
  { value: EASING_ID.inSine, label: "in sine" },
  { value: EASING_ID.outSine, label: "out sine" },
  { value: EASING_ID.inOutSine, label: "in out sine" },
  { value: EASING_ID.inQuad, label: "in quad" },
  { value: EASING_ID.outQuad, label: "out quad" },
  { value: EASING_ID.inOutQuad, label: "in out quad" },
  { value: EASING_ID.inCubic, label: "in cubic" },
  { value: EASING_ID.outCubic, label: "out cubic" },
  { value: EASING_ID.inOutCubic, label: "in out cubic" },
  { value: EASING_ID.inQuart, label: "in quart" },
  { value: EASING_ID.outQuart, label: "out quart" },
  { value: EASING_ID.inOutQuart, label: "in out quart" },
  { value: EASING_ID.inQuint, label: "in quint" },
  { value: EASING_ID.outQuint, label: "out quint" },
  { value: EASING_ID.inOutQuint, label: "in out quint" },
  { value: EASING_ID.inExpo, label: "in expo" },
  { value: EASING_ID.outExpo, label: "out expo" },
  { value: EASING_ID.inOutExpo, label: "in out expo" },
  { value: EASING_ID.inCirc, label: "in circ" },
  { value: EASING_ID.outCirc, label: "out circ" },
  { value: EASING_ID.inOutCirc, label: "in out circ" },
];

/**
 * Apply an easing function to a given change in values
 * 
 * If any of the numeric parameters are 
 * @param easingFnId The ID of the easing function to apply. Invalid values fall back to "linear"
 * @param duration The total duration of the ease. If <= `0`, returns `end`
 * @param time The current time of the ease (from `0` to `duration`, clamped)
 * @param start The value at the start of the ease
 * @param end The value at the end of the ease
 * @returns The eased value
 */
export function applyEasing(easingFnId: keyof typeof EASING_ID, duration: number, time: number, start: number, end: number): number {

  // If the duration or time are not numbers, set them to zero
  if (Number.isNaN(duration)) duration = 0;
  if (Number.isNaN(time)) time = 0;

  // If no duration is provided, skip to the end
  if (duration <= 0) return end;

  // Clamp time to ensure the easing functions work properly
  time = clamp(time, 0, duration);

  if (easingFnId === EASING_ID.linear) return EASING_FN.linear(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inSine) return EASING_FN.inSine(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.outSine) return EASING_FN.outSine(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inOutSine) return EASING_FN.inOutSine(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inQuad) return EASING_FN.inQuad(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.outQuad) return EASING_FN.outQuad(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inOutQuad) return EASING_FN.inOutQuad(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inCubic) return EASING_FN.inCubic(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.outCubic) return EASING_FN.outCubic(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inOutCubic) return EASING_FN.inOutCubic(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inQuart) return EASING_FN.inQuart(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.outQuart) return EASING_FN.outQuart(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inOutQuart) return EASING_FN.inOutQuart(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inQuint) return EASING_FN.inQuint(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.outQuint) return EASING_FN.outQuint(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inOutQuint) return EASING_FN.inOutQuint(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inExpo) return EASING_FN.inExpo(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.outExpo) return EASING_FN.outExpo(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inOutExpo) return EASING_FN.inOutExpo(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inCirc) return EASING_FN.inCirc(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.outCirc) return EASING_FN.outCirc(time, start, end - start, duration);
  else if (easingFnId === EASING_ID.inOutCirc) return EASING_FN.inOutCirc(time, start, end - start, duration);
  // Fall back to linear
  return EASING_FN.linear(time, start, end - start, duration);

}

/**
 * Raw easing function definitions.
 * 
 * All defined as:
 * 
 * `(t, b, c, d) => v`
 * 
 * Where:
 * 
 * ```
 * time = the current time (between 0 and duration)
 * start = the value at the start of the ease (when time = 0)
 * delta = the amount by which the value changes during the ease (end - start)
 * dur = the ease duration
 * ```
 */
export const EASING_FN = {
  linear: (time: number, start: number, delta: number, dur: number) => {
    return delta * time / dur + start;
  },
  inSine: (time: number, start: number, delta: number, dur: number) => {
    return -delta * Math.cos(time / dur * (Math.PI / 2)) + delta + start;
  },
  outSine: (time: number, start: number, delta: number, dur: number) => {
    return delta * Math.sin(time / dur * (Math.PI / 2)) + start;
  },
  inOutSine: (time: number, start: number, delta: number, dur: number) => {
    return -delta / 2 * (Math.cos(Math.PI * time / dur) - 1) + start;
  },
  inQuad: (time: number, start: number, delta: number, dur: number) => {
    return delta * (time /= dur) * time + start;
  },
  outQuad: (time: number, start: number, delta: number, dur: number) => {
    return -delta * (time /= dur) * (time - 2) + start;
  },
  inOutQuad: (time: number, start: number, delta: number, dur: number) => {
    if ((time /= dur / 2) < 1) return delta / 2 * time * time + start;
    return -delta / 2 * ((--time) * (time - 2) - 1) + start;
  },
  inCubic: (time: number, start: number, delta: number, dur: number) => {
    return delta * (time /= dur) * time * time + start;
  },
  outCubic: (time: number, start: number, delta: number, dur: number) => {
    return delta * ((time = time / dur - 1) * time * time + 1) + start;
  },
  inOutCubic: (time: number, start: number, delta: number, dur: number) => {
    if ((time /= dur / 2) < 1) return delta / 2 * time * time * time + start;
    return delta / 2 * ((time -= 2) * time * time + 2) + start;
  },
  inQuart: (time: number, start: number, delta: number, dur: number) => {
    return delta * (time /= dur) * time * time * time + start;
  },
  outQuart: (time: number, start: number, delta: number, dur: number) => {
    return -delta * ((time = time / dur - 1) * time * time * time - 1) + start;
  },
  inOutQuart: (time: number, start: number, delta: number, dur: number) => {
    if ((time /= dur / 2) < 1) return delta / 2 * time * time * time * time + start;
    return -delta / 2 * ((time -= 2) * time * time * time - 2) + start;
  },
  inQuint: (time: number, start: number, delta: number, dur: number) => {
    return delta * (time /= dur) * time * time * time * time + start;
  },
  outQuint: (time: number, start: number, delta: number, dur: number) => {
    return delta * ((time = time / dur - 1) * time * time * time * time + 1) + start;
  },
  inOutQuint: (time: number, start: number, delta: number, dur: number) => {
    if ((time /= dur / 2) < 1) return delta / 2 * time * time * time * time * time + start;
    return delta / 2 * ((time -= 2) * time * time * time * time + 2) + start;
  },
  inExpo: (time: number, start: number, delta: number, dur: number) => {
    return (time === 0) ? start : delta * (2 ** (10 * (time / dur - 1))) + start;
  },
  outExpo: (time: number, start: number, delta: number, dur: number) => {
    return (time === dur) ? start + delta : delta * (-(2 ** (-10 * time / dur)) + 1) + start;
  },
  inOutExpo: (time: number, start: number, delta: number, dur: number) => {
    if (time === 0) return start;
    if (time === dur) return start + delta;
    if ((time /= dur / 2) < 1) return delta / 2 * (2 ** (10 * (time - 1))) + start;
    return delta / 2 * (-(2 ** (-10 * --time)) + 2) + start;
  },
  inCirc: (time: number, start: number, delta: number, dur: number) => {
    return -delta * (Math.sqrt(1 - (time /= dur) * time) - 1) + start;
  },
  outCirc: (time: number, start: number, delta: number, dur: number) => {
    return delta * Math.sqrt(1 - (time = time / dur - 1) * time) + start;
  },
  inOutCirc: (time: number, start: number, delta: number, dur: number) => {
    if ((time /= dur / 2) < 1) return -delta / 2 * (Math.sqrt(1 - time * time) - 1) + start;
    return delta / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + start;
  },
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(Math.min(value, max), min);
}
