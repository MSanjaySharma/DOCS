---
id: put-updateLink
title: Update a Link
hide_title: true
sidebar_label: Update a Link
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<h2 style={{color:"#2196f3", display:"inline"}}>PUT &nbsp;&nbsp;</h2><h2 style={{ display:"inline"}}>Update a link</h2><br/><br/>

```
http://localhost:3333/urls/:{URL_ID}
```

#### BODY (RAW)

```json
{
  "title": "stoplight.io",
  "originalUrl": "https://stoplight.io/"
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
\n"title":"stoplight.io",
\n"originalUrl":"https://stoplight.io/"
\n}';

var config = {
  method: 'put',
  url: 'http://localhost:3333/urls/5f212b8771698524c062fcfd',
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
  method: "PUT",
  hostname: "localhost",
  port: 3333,
  path: "/urls/5f212b8771698524c062fcfd",
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
  '{\r\n"title":"stoplight.io",\r\n"originalUrl":"https://stoplight.io/"\r\n}';

req.write(postData);

req.end();
```

</TabItem>
<TabItem value="fetch">

```js
var raw = "{
\n\"title\":\"stoplight.io\",
\n\"originalUrl\":\"https://stoplight.io/\"
\n}";

var requestOptions = {
  method: 'PUT',
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3333/urls/5f212b8771698524c062fcfd", requestOptions)
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
{
  "_id": "5f212b8771698524c062fcfd",
  "title": "stoplight.io",
  "originalUrl": "https://stoplight.io/",
  "createdAt": "2020-07-29T07:55:51.902Z",
  "clicks": [],
  "hashedUrl": "Z11CP7K",
  "__v": 0
}
```

</TabItem>
<TabItem value="headers">

```json
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 176
ETag: W/"b0-gqdbF6gXA1bkrdchr/+vAsd9z4g"
Date: Wed, 29 Jul 2020 07:58:30 GMT
Connection: keep-alive
```

</TabItem>
</Tabs>
</div>
