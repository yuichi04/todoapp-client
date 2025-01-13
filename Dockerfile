FROM node:23-slim

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# ホストのpackage.jsonとpackage-lock.jsonをコンテナの作業ディレクトリにコピー
COPY package.json package-lock.json ./

# npm installを実行
RUN npm install

# ソースコードのコピー
COPY . .

EXPOSE 3000

# 開発用サーバの起動
CMD ["npm", "run", "dev"]