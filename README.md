# TodoApp Client

タスク管理のフロントエンドアプリケーション。
ドラッグ&ドロップによる直感的な操作とモダンな技術スタックを活用した実装を特徴としています。

## 技術スタック

### コア技術

- **React** - UI コンポーネントの構築
- **TypeScript** - 型安全性の確保
- **Vite** - 高速な開発環境と最適化されたビルド

### スタイリング

- **CSS Modules** - スコープ付き CSS によるスタイリング管理

### 状態管理・データフェッチ

- **TanStack Query** - サーバーステート管理とキャッシュの最適化

### ルーティング

- **React Router** - クライアントサイドルーティング

### テスト

- **Vitest** - ユニットテスト・コンポーネントテスト
- **Playwright** - E2E テスト
  - `@golden-path`タグ付けされたテストのみ CI で実行

### UI 開発・ドキュメンテーション

- **Storybook** - コンポーネントの開発・ドキュメント化

### 開発環境

- **Docker** - コンテナ化による開発環境の統一

## ディレクトリ構造

```
src/
├── assets/                               # アプリケーション内で使用する画像
│   ├── README.md
│   ├── icons/                            # アイコン画像
│   │   ├── add.svg
│   │   ├── edit.svg
│   │   ├── delete.svg
│   │   ├── error.svg
│   │   └── success.svg
│   └── images/                           # 一般的な画像ファイル
│       ├── backgrounds/                  # 背景画像
│       └── illustrations/                # イラスト画像
├── components/                           # Atomicデザインに基づくコンポーネント
│   ├── README.md
│   ├── atoms/                            # 最小単位のコンポーネント
│   │   └── Button/
│   │       ├── index.ts                  # コンポーネント本体、エクスポート定義を含む
│   │       ├── types.ts                  # 型定義
│   │       └── Button.module.css         # スタイル定義
│   ├── molecules/                        # 複数のatomsで構成される機能単位のコンポーネント
│   │   └── TaskCard/
│   │       ├── index.ts                  # コンポーネント本体、エクスポート定義を含む
│   │       ├── types.ts                  # 型定義
│   │       └── TaskCard.module.css       # スタイル定義
│   ├── organisms/                        # 複数のmoleculesで構成される大きな機能ブロック
│   │   └── TaskList/
│   │       ├── index.ts                  # コンポーネント本体、エクスポート定義を含む
│   │       ├── types.ts                  # 型定義
│   │       └── TaskList.module.css       # スタイル定義
│   ├── templates/                        # ページの基本レイアウトを定義
│   │   └── TaskBoard/
│   │       ├── index.ts                  # コンポーネント本体、エクスポート定義を含む
│   │       ├── types.ts                  # 型定義
│   │       └── TaskBoard.module.css      # スタイル定義
│   └── pages/                            # 実際のルーティングに対応するページコンポーネント
│       └── Home/
│           ├── index.ts                  # コンポーネント本体、エクスポート定義を含む
│           ├── types.ts                  # 型定義
│           └── Home.module.css           # スタイル定義
├── features/                             # 機能ごとの関連ファイル
│   ├── README.md
│   └── tasks/
│       ├── api/                          # API関連の型定義とフェッチ関数
│       │   ├── types.ts
│       │   └── tasksApi.ts
│       ├── hooks/                        # 機能固有のカスタムフック
│       │   └── useTasks.ts
│       └── utils/                        # 機能固有のユーティリティ
│           └── taskHelpers.ts
├── lib/                                  # アプリケーション共通のユーティリティ
│   ├── hooks/                            # Reactフック関連
│   ├── utils/                            # Reactに依存しない純粋な関数
│   │    ├── format.ts                    # フォーマット関連の関数
│   │    ├── validation.ts                # バリデーション関連の関数
│   │    └── date.ts                      # 日付処理関連の関数
│   ├── types/
│   └── api/                              # APIクライアントの共通設定
│       ├── client.ts
│       └── types.ts
├── constants/                            # 定数定義
├── config/                               # 環境設定
│   └── env.ts
├── styles/                               # グローバルスタイル
│   ├── global.css
│   └── variables.css
├── stories/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── tests/
│   ├── README.md
│   ├── e2e/
│   │   ├── pages/                        # ページごとのE2Eテスト
│   │   │   ├── home.spec.ts
│   │   │   └── login.spec.ts
│   │   ├── fixtures/                     # テストデータ
│   │   │   └── users.json
│   │   ├── support/                      # 共通の操作やアサーション
│   │   │   ├── commands.ts               # カスタムコマンド
│   │   │   └── assertions.ts             # カスタムアサーション
│   │   └── utils/                        # ページオブジェクトやヘルパー関数
│   │       ├── pages/                    # Page Object Pattern
│   │       │   ├── HomePage.ts
│   │       │   └── LoginPage.ts
│   │       └── helpers/                  # 共通のヘルパー関数
│   │           └── auth.ts
│   └── unit/
│       ├── atoms/                        # コンポーネントと同じ階層構造
│       │   └── Button/
│       │       ├── Button.test.tsx       # 基本的なレンダリングテスト
│       │       └── Button.event.test.tsx # イベントハンドリングテスト
│       └── lib/                          # ユーティリティ関数のテスト
```
