# sandbox-nuxt

A Sandbox Nuxt.js project

以下で作成

see https://ja.nuxtjs.org/guide/installation

```bash
$ vue init nuxt-community/starter-template sandbox-nuxt

? Project name sandbox-nuxt
? Project description Nuxt.js project
? Author h-orito <16453967+h-orito@users.noreply.github.com>
```

## 環境構築

### node

```bash
$ node -v
v9.3.0
```

### eslint

see https://qiita.com/mysticatea/items/f523dab04a25f617c87d

```bash
$ npm install -g eslint
$ eslint -v
v5.6.0
```

### vue-cli

```bash
$ npm install -g vue-cli
$ vue --version
2.9.6
```

### VS Code で開発する場合

see https://qiita.com/rubytomato@github/items/b35b819671e7cbb3dff7

入れた拡張機能

- npm
- Vetur
- ESLint
- Prettier

ワークスペース設定

```json
{
  "files.eol": "\n",
  "prettier.eslintIntegration": true,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true
}
```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## deploy

Netlify で公開  
https://ort-sandbox-nuxt.netlify.com/

see https://qiita.com/_neekoko/items/aaedba104bb4997ab976

master ブランチに push すると自動デプロイ
