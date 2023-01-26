const getUser = async (userName) => {
    const response = await fetch('https://api.github.com/users/' + userName);
    if (!response.ok) {
        return null;
    }

    return response.json();
}

const getDefaultUser = () => {
    return {
        "login": "octacat",
        "id": 18667658,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjE4NjY3NjU4",
        "avatar_url": "https://avatars.githubusercontent.com/u/18667658?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/octacat",
        "html_url": "https://github.com/octacat",
        "followers_url": "https://api.github.com/users/octacat/followers",
        "following_url": "https://api.github.com/users/octacat/following{/other_user}",
        "gists_url": "https://api.github.com/users/octacat/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/octacat/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/octacat/subscriptions",
        "organizations_url": "https://api.github.com/users/octacat/orgs",
        "repos_url": "https://api.github.com/users/octacat/repos",
        "events_url": "https://api.github.com/users/octacat/events{/privacy}",
        "received_events_url": "https://api.github.com/users/octacat/received_events",
        "type": "Organization",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 0,
        "public_gists": 0,
        "followers": 1,
        "following": 0,
        "created_at": "2016-04-25T20:47:18Z",
        "updated_at": "2016-04-25T20:47:18Z"
    }
}

export {getUser, getDefaultUser}