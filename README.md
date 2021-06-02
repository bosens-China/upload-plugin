# upload-plugin

上传构建资源到服务器的 webpack 插件（支持 webpack4 和 webpack5）

为什么需要它？

- 它支持删除服务器的文件后上传
- 使用简单，只需要提供几个必要字段

## 使用方式

```sh
npm i @boses/upload-plugin -D
# or
yarn add @boses/upload-plugin -D
```

webpack

```js
const UploadPlugin = require('@boses/upload-plugin');
module.exports = {
  // 省略其他配置
  plugins: [
    new UploadPlugin({
      // ...
    }),
  ],
};
```

## api

```js
  new UploadPlugin(option, remove),
```

### option

#### src

- type: `string`
- required: `false`

要上传到服务器的文件夹，默认的话为 webpack 配置的 path 路径

#### to

- type: `string`
- required: `true`

要上传到的服务器路径，注意 linux 形式的路径

#### port

- type: `number`
- required: `false`

服务器端口号，默认为 22

#### host

- type: `string`
- required: `true`

host 主机名，不可省略

#### username

- type: `string`
- required: `false`

连接的用户名，默认为`root`

#### password

- type: `string`
- required: `false`

连接服务器的密码，它与`privateKey`必须存在一项

#### privateKey

- type: `string`
- required: `false`

连接服务器的秘钥，它与`password`必须存在一项

## remove

- type: `boolean`
- required: `false`

是否删除服务器上的文件，默认为`true`

## 协议

MIT License
