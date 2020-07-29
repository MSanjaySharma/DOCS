---
id: get-listAllLinks
title: List All Links
hide_title: true
sidebar_label: List All Links
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<h2 style={{color:"#52b202", display:"inline"}}>GET &nbsp;&nbsp;</h2><h2 style={{ display:"inline"}}>List all links</h2><br/><br/>

```
http://localhost:3333/urls
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
  url: "http://localhost:3333/urls",
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
var https = require("follow-redirects").https;
var fs = require("fs");

var options = {
  method: "GET",
  hostname: "http://localhost:3333",
  path: "/urls",
  headers: {},
  maxRedirects: 20,
};

var req = https.request(options, function (res) {
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
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3333/urls", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
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
[
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
      },
      {
        "_id": "5f212c8671698524c062fcfe",
        "clickDateTime": "2020-07-29T08:00:06.584Z",
        "ipAddress": "Couldn't find the Ip",
        "browser": "PostmanRuntime",
        "platform": "unknown",
        "device": "mobile"
      }
    ],
    "hashedUrl": "Z1UYPc9",
    "__v": 0
  }
]
```

</TabItem>
<TabItem value="headers">

```json
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 1356
ETag: W/"54c-5ZRyY3bCVDislisTf2esth1N1vk"
Date: Wed, 29 Jul 2020 07:39:11 GMT
Connection: keep-alive
```

</TabItem>
</Tabs>
</div>
