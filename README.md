# `tsfc`

> Function composition in TS

```typescript
// function compose(a->b)->(b->c)->(a->c)
const compose: <A, B, C>(f: (x: A) => B, g: (x: B) => C) => (x: A) => C
```
