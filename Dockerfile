FROM node:23-slim

# コンテナ内の作業ディレクトリを設定
WORKDIR /todoapp-client

# ホストのpackage.jsonとpackage-lock.jsonをコンテナの作業ディレクトリにコピー
COPY package*.json ./

# npm installを実行
RUN npm install

EXPOSE 3000

# 開発用サーバの起動
CMD ["npm", "run", "dev"]