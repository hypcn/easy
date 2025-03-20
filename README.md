
# Easy

Easing functions. Initially created to apply DMX lighting transitions. Includes TypeScript types.

![npm (scoped)](https://img.shields.io/npm/v/@hypericon/easy)

```bash
npm i @hypericon/easy
```

# Example Usage 

```ts
import { applyEasing, EASING_ID, EasingFnIdsVL } from '@hypericon/easy';

const from = 0;
const to = 200;
const duration = 100;
const easingFnId = EASING_ID.inOutCubic;
const easingName = EasingFnIdsVL.find(vl => vl.value === easingFnId)?.label ?? "[unknown]";

console.log(`Ease from ${from} to ${to} over ${duration} steps using ${easingName}`);

for (let t = 0; t <= duration; t++) {
  const v = applyEasing(easingFnId, duration, t, from, to);
  console.log(`t: ${t}, v: ${v}`);
}
```

Additionally, a function is defined to easily enable mapping values within a range using an easing function.

```ts
import { easeWithinRange, EASING_ID, EasingFnIdsVL } from '@hypericon/easy';

const rangeStart = 20;
const rangeEnd = 120;
const value = 55;
const easingFnId = EASING_ID.inOutCubic;

const mapped = easeWithinRange(easingFnId, value, rangeStart, rangeEnd);

console.log(`Map value ${value} within range ${rangeStart} to ${rangeEnd} using easing function id ${easingFnId}: ${mapped}`);
```

# Development

```sh
# Start a `tsc` process watching the source
npm run dev

# Run tests
npm run test

# Build for publishing. Runs automatically before `npm publish`
npm run build
```
