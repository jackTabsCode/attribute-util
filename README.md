# Attribute Util

Makes dealing with attributes on Roblox instances a bit easier in Typescript.

## Installation

Use npm to install:

```bash
npm install @rbxts/attribute-util
```

## Usage

```ts
interface PartAttributes {
	foo: string
	bar: number
}

const part = new Instance("Part")

// set all the attributes
setAllAttributes<PartAttributes>(part, {
	foo: "hello",
	bar: 42
})

// get all the attributes
const attributes = getAllAttributes<PartAttributes>(part)

// get a singular attribute
const foo = getAttribute<PartAttributes>(part)("foo")

// set a singular attribute
setAttribute<PartAttributes>(part)("foo", "goodbye")

// get a changed signal for a singular attribute
const signal = getAttributeChangedSignal<PartAttributes>(part)
```
