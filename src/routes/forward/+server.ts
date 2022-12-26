import type { RequestHandler } from './$types';

import { json } from '@sveltejs/kit';
import { entriesToObject } from '$lib//utility';

const forward: RequestHandler = async ({ platform, request, url }) => {
	const input = {
		method: request.method,
		url,
		headers: entriesToObject(request.headers),
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