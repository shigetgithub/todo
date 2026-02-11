# TODO App

React + TypeScript の TODO アプリケーション。

## Commands

- `npm run dev` - 開発サーバー起動
- `npm run build` - プロダクションビルド (`tsc -b && vite build`)
- `npm run preview` - ビルド結果のプレビュー

## Architecture

- **Vite** + **React 18** + **TypeScript**
- データ永続化: **LocalStorage** (key: `todos`)
- スタイリング: プレーンCSS (`src/App.css`)

### Project Structure

```
src/
├── main.tsx              # エントリポイント
├── App.tsx               # メインコンポーネント（useTodosフック利用）
├── App.css               # グローバルスタイル
├── types.ts              # Todo 型定義
├── hooks/
│   └── useTodos.ts       # Todo CRUD + LocalStorage 同期
└── components/
    ├── TodoForm.tsx       # 入力フォーム
    ├── TodoItem.tsx       # 個別Todoアイテム
    └── TodoList.tsx       # リスト表示
```
