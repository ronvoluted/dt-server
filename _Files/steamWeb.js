	const atomaJoinParams = new URLSearchParams({
		"openid.ns": "http://specs.openid.net/auth/2.0",
		"openid.mode": "id_res",
		"openid.op_endpoint": "https://steamcommunity.com/openid/login",
		"openid.claimed_id": "https://steamcommunity.com/openid/id/76561197987489201",
		"openid.identity": "https://steamcommunity.com/openid/id/76561197987489201",
		"openid.return_to": "https://accounts.atoma.cloud/linking",
		"openid.response_nonce": "2022-12-26T06:31:54ZzGIZyVIG7QlNrHfERE8pI9GVV58",
		"openid.assoc_handle": "1234567890",
		"openid.invalidate_handle": "steam_login",
		"openid.signed": "signed,op_endpoint,claimed_id,identity,return_to,response_nonce,assoc_handle,invalidate_handle",
		"openid.sig": "JiGY3POrdtXenPwqDsk4zx/gMVA",
	});