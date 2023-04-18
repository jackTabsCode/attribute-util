export function getAllAttributes<AttributeType extends object>(instance: Instance): AttributeType {
	const attributes = {} as AttributeType
	for (const [key, value] of pairs(instance.GetAttributes())) {
		attributes[key as keyof AttributeType] = value as AttributeType[keyof AttributeType]
	}
	return attributes
}

export function setAllAttributes<AttributeType extends object>(instance: Instance, attributes: AttributeType) {
	for (const [key, value] of pairs(attributes)) {
		instance.SetAttribute(key as string, value as AttributeValue)
	}
}

export function getAttribute<AttributeType>(instance: Instance) {
	return <K extends keyof AttributeType & string>(key: K) => instance.GetAttribute(key) as AttributeType[K]
}
export function deleteAttribute<AttributeType>(instance: Instance) {
	return <K extends keyof AttributeType & string>(key: K) => instance.SetAttribute(key, undefined)
}
export function setAttribute<AttributeType>(instance: Instance) {
	return <K extends keyof AttributeType & string>(key: K, value: AttributeType[K]) =>
		instance.SetAttribute(key, value as AttributeValue)
}
export function getAttributeChangedSignal<AttributeType>(instance: Instance) {
	return <K extends keyof AttributeType & string>(key: K) => instance.GetAttributeChangedSignal(key)
}
