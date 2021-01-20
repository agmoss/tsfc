# `tsfc`

> Function composition in TS

```typescript
// function compose(a->b)->(b->c)->(a->c)
const compose: <A, B, C>(f1: (x: B) => C, f2: (x: A) => B) => (x: A) => C
```
