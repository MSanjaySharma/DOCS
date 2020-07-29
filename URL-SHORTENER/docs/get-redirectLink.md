---
id: get-redirectLink
title: Redirect Link
hide_title: true
sidebar_label: Redirect Link
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<h2 style={{color:"#52b202", display:"inline"}}>GET &nbsp;&nbsp;</h2><h2 style={{ display:"inline"}}>Redirect to Link</h2><br/><br/>

```
http://localhost:3333/urls/:{HASHED_URL}
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
  url: "http://localhost:3333/Z1UYPc9",
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
  path: "/Z1UYPc9",
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

fetch("http://localhost:3333/Z1UYPc9", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
```

</TabItem>
</Tabs>
</div>

### Example Response

```
Redirection to site
```
