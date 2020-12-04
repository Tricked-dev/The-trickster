👋

## This is a package that pushes code to sourcebin. You can get code or push code.

Posting

```js
const SourceBin = require("sourcebin-api");
push();
async function push() {
  await SourceBin.postBin({ code: "Foo", title: "Bar" }).then((res) =>
    console.log(res)
  );
}
```

Getting the code

```js
const SourceBin = require("sourcebin-api");
get();
async function get() {
  await SourceBin.get("e53a066daa").then((res) => console.log(res));
}
```

Made By `yoon™#0001`
