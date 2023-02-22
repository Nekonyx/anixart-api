## anixart-api

useless api client for [anixart](https://anixart.tv).

### Disclaimer:

The library was written for personal and educational purposes. When using this library, it is important to understand that:

- Anixart does not have an official API.
- Anixart does not permit third parties to use its API.
- Any method may stop working at any time if the format of the API request or response is changed.
- Abusing the API (such as sending a large number of requests, auto-registering accounts/bots, spamming, etc.) may result in restrictions being placed on its use for everyone.
- Sharing links to the API may result in Anixart being blocked in certain countries.

For these reasons, the library does not contain API URLs. To obtain it, you must decompile the .apk file yourself.

### Usage:

```ts
import { Anixart } from 'anixart'

const client = new Anixart({
  apiUrl: 'https://example.com'
})

const { profile, profileToken } = await client.auth.login({
  login: 'Nekonyx',
  password: 'qwerty123'
})

console.log(`logged in as ${profile.login}!`)

// 1. always use this token in requests
client.token = profileToken.token

// 2. or if you want to specify token per request
await client.filters.find({
  // this property overrides options of `Anixart.call`
  request: {
    token: profileToken.token
  }
})
```
