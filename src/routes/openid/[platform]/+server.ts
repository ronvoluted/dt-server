import type { RequestHandler } from '../$types';

import { json } from '@sveltejs/kit';
import { entriesToObject } from '$lib//utility';

const openid: RequestHandler = async ({ params, url }) => {
	const inputParams = entriesToObject(url.searchParams.entries());

	console.log(inputParams);

	const steamWebUrl = new URL('https://accounts.atoma.cloud/linking');

	// @ts-expect-error
	const steamWebParams = new URLSearchParams({
		"openid.ns": inputParams['openid.ns'],
		"openid.mode": inputParams['openid.mode'],
		"openid.op_endpoint": inputParams['openid.op_endpoint'],
		"openid.claimed_id": inputParams['openid.identity'],
		"openid.identity": inputParams['openid.identity'],
		"openid.response_nonce": inputParams['openid.response_nonce'],
		"openid.assoc_handle": inputParams['openid.assoc_handle'],
		"openid.invalidate_handle": inputParams['openid.invalidate_handle'],
		"openid.signed": inputParams['openid.signed'],
		"openid.sig": inputParams['openid.sig'],
		"openid.return_to": "https://accounts.atoma.cloudz/linking",
	});

	steamWebUrl.search = steamWebParams.toString();

	console.log({ atomaJoinUrl: steamWebUrl.href });

	return json({
		Authorization: `${params.platform} ${steamWebUrl}`,
	});
};

export const GET = openid;
export const POST = openid;