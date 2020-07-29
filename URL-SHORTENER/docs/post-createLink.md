---
id: post-createLink
title: Create a Link
hide_title: true
sidebar_label: Create a Link
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<h2 style={{color:"#ff9800", display:"inline"}}>POST &nbsp;&nbsp;</h2><h2 style={{ display:"inline"}}>Create a link</h2><br/><br/>

```
http://localhost:3333/urls
```

#### BODY (RAW)

```json
{
  "title": "jsonplaceholder",
  "originalUrl": "https://jsonplaceholder.typicode.com/"
}
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
var axios = require('axios');
var data = '{
\n"title":"twitter",
\n"originalUrl":"https://twitter.com/"
\n}';

var config = {
  method: 'post',
  url: 'http://localhost:3333/urls',
  headers: { },
  data : data
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
  method: "POST",
  hostname: "localhost",
  port: 3333,
  path: "/urls",
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

var postData =
  '{\r\n"title":"twitter",\r\n"originalUrl":"https://twitter.com/"\r\n}';

req.write(postData);

req.end();
```

</TabItem>
<TabItem value="fetch">

```js
var raw = "{
\n\"title\":\"twitter\",
\n\"originalUrl\":\"https://twitter.com/\"
\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3333/urls", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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
    "clicks": [],
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
