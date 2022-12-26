export const prettyPrint = (input: unknown): string => {
	return JSON.stringify(input, null, 2);
}

export const entriesToObject = (entries: IterableIterator<[string, unknown]>): Record<string, unknown> => {
	return [...entries].reduce<Record<string, unknown>>((obj, entry) => ({ ...obj, [entry[0]]: entry[1]	}), {});
}
