import type { RequestHandler } from '../$types';

import { json } from '@sveltejs/kit';
import { entriesToObject } from '$lib//utility';

const openid: RequestHandler = async ({ params, url }) => {
	const openid = entriesToObject(url.searchParams.entries());

	console.log(openid);

	const steamWebUrl = new URL('https://accounts.atoma.cloud/linking');

	// @ts-expect-error
	const steamWebParams = new URLSearchParams({
		"openid.ns": openid.ns,
		"openid.mode": openid.mode,
		"openid.op_endpoint": openid.op_endpoint,
		"openid.claimed_id": openid.identity,
		"openid.identity": openid.identity,
		"openid.response_nonce": openid.response_nonce,
		"openid.assoc_handle": openid.assoc_handle,
		"openid.invalidate_handle": openid.invalidate_handle,
		"openid.signed": openid.signed,
		"openid.sig": openid.sig,
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