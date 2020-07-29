---
id: get-retrieveLink
title: Retrieve a Link
hide_title: true
sidebar_label: Retrieve a Link
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<h2 style={{color:"#52b202", display:"inline"}}>GET &nbsp;&nbsp;</h2><h2 style={{ display:"inline"}}>Retrieve a link</h2><br/><br/>

```
http://localhost:3333/urls/:{URL_ID}
```

### Example Request

<div style={{background:"#292d3e", borderRadius:"5px"}}>

<Tabs
defaultValue="axios"
values={[
{ label: "NodeJs Axios", value: "axios", },
{ label: "NodeJs Native", value: "native", },
{ label: "Javascript Fetch", value: "fetch", },
]
}>
<TabItem value="axios">

```js
var axios = require("axios");

var config = {
  method: "get",
  url: "http://localhost:3333/urls/5f2129c871698524c062fcfb",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

</TabItem>
<TabItem value="native">

```js
var http = require("follow-redirects").http;
var fs = require("fs");

var options = {
  method: "GET",
  hostname: "localhost",
  port: 3333,
  path: "/urls/5f2129c871698524c062fcfb",
  headers: {},
  maxRedirects: 20,
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
```

</TabItem>
<TabItem value="fetch">

```js
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("http://localhost:3333/urls/5f2129c871698524c062fcfb", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
```

</TabItem>
</Tabs>
</div>

### Example Response

<div style={{background:"#292d3e", borderRadius:"5px"}}>

<Tabs
defaultValue="body"
values={[
{ label: "Body", value: "body", },
{ label: "Headers", value: "headers", },
]
}>
<TabItem value="body">

```json
{
  "_id": "5f2129c871698524c062fcfb",
  "title": "jsonplaceholder",
  "originalUrl": "https://jsonplaceholder.typicode.com/",
  "createdAt": "2020-07-29T07:48:24.301Z",
  "clicks": [
    {
      "_id": "5f212a5e71698524c062fcfc",
      "clickDateTime": "2020-07-29T07:50:54.829Z",
      "ipAddress": "Couldn't find the Ip",
      "browser": "Firefox",
      "platform": "Microsoft Windows",
      "device": "desktop"
    }
  ],
  "hashedUrl": "Z1UYPc9",
  "__v": 0
}
```

</TabItem>
<TabItem value="headers">

```json
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 377
ETag: W/"179-glU7M+0aNou76kbwj3rkqLHlpTI"
Date: Wed, 29 Jul 2020 07:53:35 GMT
Connection: keep-alive
```

</TabItem>
</Tabs>
</div>
