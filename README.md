# Angular Rendering Sample

**Angular 19 のハイブリッドレンダリング**機能を活用して、**CSR（クライアントサイドレンダリング）**、**SSR（サーバーサイドレンダリング）**、**SSG（静的サイト生成）**、**ISR（静的サイト再生成）** の各レンダリングパターンを実装したアプリケーションです。

## 特徴

- **Angular 19 ハイブリッドレンダリング**  
  Angular 19 の機能を用い、CSR、SSR、SSG、ISR の各パターンを実装。  
  初回ロード時はサーバーまたはビルド時に生成された HTML を提供し、クライアント側で必要に応じた更新が行われます。

- **対応レンダリングモード**

  - **CSR:** ブラウザで JavaScript によりコンテンツを動的に構築
  - **SSR:** 各リクエストごとにサーバー側で完全な HTML を生成
  - **SSG:** ビルド時に静的 HTML を生成し、初回リクエストでその HTML を返す
  - **ISR:** SSG の仕組みに加え、一定時間（例：10 秒）ごとにバックグラウンドで再生成（revalidate）し、最新コンテンツに更新します。

- **ランダムな猫画像ギャラリー**  
  [The Cat API](https://thecatapi.com/) を利用して、毎回異なる猫画像を JSON 形式で取得。ボタン操作によりクライアント側で動的に画像更新が可能です。

## 使用技術

- **Angular 19** – 最新のフレームワークをベースに、ハイブリッドレンダリング機能を活用
- **Hybrid Rendering** – SSR と SSG を実現
- **Rx-Angular ISR** – ISR を実装し、一定間隔でのバックグラウンド更新を実現
- **TransferState** – サーバーからクライアントへのデータ転送を最適化
- **Tailwind CSS** – モダンなデザインの実装
- **The Cat API** – ランダムな猫画像を提供する無料 API

## はじめに

### 前提条件

- [Node.js](https://nodejs.org/)（推奨バージョン：v18 以上）
- [Angular CLI](https://angular.io/cli) v 19.2.0

### インストール方法

リポジトリをクローンして依存関係をインストールします。

```bash
npm install
```

### 開発モードでの起動

CSR モードで開発サーバーを起動する場合：

```bash
npm run start
```

ブラウザで http://localhost:4200 を開いて確認してください。

SSR/SSG/ISR モードで開発サーバーを起動する場合：

```bash
npm run build
npm run serve:ssr
```

ブラウザで http://localhost:4000 を開いて確認してください。

## プロジェクト構成

- src/app/
  - cat.service.ts: 猫画像を取得するためのサービス
  - 各レンダリングモード用コンポーネント:
    - CSR: クライアントサイドレンダリングの挙動を示すコンポーネント
    - SSR: サーバーサイドレンダリングの挙動を示すコンポーネント
    - SSG: 静的サイト生成されたページを表示するコンポーネント
    - ISR: Rx-Angular ISR を利用して、一定間隔で再生成されたデータを表示するコンポーネント
  - render-info.service.ts: 現在のレンダリングモード（CSR/SSR/SSG/ISR）を判定するためのサービス
