import type { RequestHandler } from '../$types';

import { json, redirect } from '@sveltejs/kit';
import { entriesToObject } from '$lib//utility';

const openid: RequestHandler = async ({ params, url }) => {
	const inputParams = entriesToObject(url.searchParams.entries());

	console.log(inputParams);

	const platformUrl = new URL('https://accounts.atoma.cloud/linking');

	// @ts-expect-error
	const platformParams = new URLSearchParams({
		"openid.ns": inputParams['openid.ns'],
		"openid.mode": inputParams['openid.mode'],
		"openid.op_endpoint": inputParams['openid.op_endpoint'],
		"openid.claimed_id": inputParams['openid.identity'],
		"openid.identity": inputParams['openid.identity'],
		"openid.return_to": "https://accounts.atoma.cloud/linking",
		"openid.response_nonce": inputParams['openid.response_nonce'],
		"openid.assoc_handle": inputParams['openid.assoc_handle'],
		"openid.invalidate_handle": inputParams['openid.invalidate_handle'],
		"openid.signed": inputParams['openid.signed'],
		"openid.sig": inputParams['openid.sig'],
	});

	platformUrl.search = platformParams.toString();

	console.log({ atomaJoinUrl: platformUrl.href });

	// return json({
	// 	platformUrl: platformUrl,
	// 	Authorization: `${params.platform} ${platformUrl}`,
	// 	inputParams,
	// });

	throw redirect(302, platformUrl.href);
};

export const GET = openid;
export const POST = openid;