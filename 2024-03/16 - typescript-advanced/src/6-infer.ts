// See: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#conditional-type-constraints
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type

// Extracts out the element type.
type Str = Flatten<string[]>

// type Str = string

// Leaves the type alone.
type Num = Flatten<number>
