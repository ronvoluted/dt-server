import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const prettyPrint = (input: unknown): string => {
	return JSON.stringify(input, null, 2);
}

const forward: RequestHandler = async ({ platform, request, url }) => {
	const headers = [...request.headers].reduce<Record<string, unknown>>((obj, header) => {
		obj[header[0]] = header[1];
		return obj;
	}, {});

	const input = {
		method: request.method,
		url: url,
		headers,
		redirectCount: request.redirectCount,
		taintedOrigin: request.taintedOrigin,
		platform: platform,
		body: await request.text(),
	}

	console.log(input);

	return json(input);
}

export const GET = forward;
export const POST = forward;