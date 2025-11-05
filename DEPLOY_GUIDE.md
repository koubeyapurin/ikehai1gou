# 🚀 イケ配 - GitHub Pagesデプロイガイド

## 📋 概要

このガイドでは、イケ配アプリをGitHub Pagesに無料でデプロイする方法を説明します。

デプロイ後、以下のようなURLでアクセス可能になります：
```
https://[あなたのユーザー名].github.io/[リポジトリ名]/
```

---

## ✅ デプロイ準備完了！

以下のファイルがGitHub Pages対応済みです：

- ✅ `manifest.json` - 相対パスに修正
- ✅ `service-worker.js` - 相対パスに修正
- ✅ `.nojekyll` - Jekyll処理をスキップ
- ✅ PWA機能 - 全て動作可能

---

## 📝 デプロイ手順（3ステップ）

### ステップ1: GitHubアカウント作成

1. **https://github.com にアクセス**
2. **「Sign up」をクリック**
3. **メールアドレス・パスワードを入力**
4. **ユーザー名を決める**（例: `ikemen-delivery`）
5. **アカウント作成完了！**

---

### ステップ2: リポジトリ作成

1. **GitHubにログイン**
2. **右上の「+」→「New repository」をクリック**

3. **リポジトリ設定**：
   - **Repository name**: `ikehai-app`（好きな名前でOK）
   - **Description**: イケ配 - ときめく配達アプリ
   - **Public**: ✅ チェック（公開）
   - **Initialize**: チェック不要

4. **「Create repository」をクリック**

---

### ステップ3: ファイルアップロード

#### 方法A: ブラウザから直接アップロード（簡単！推奨）

1. **リポジトリページで「uploading an existing file」をクリック**

2. **全ファイルをドラッグ&ドロップ**
   ```
   📁 ikehai busi フォルダの中身を全て選択
   （index.html, css/, js/, manifest.json など全て）
   ```

3. **「Commit changes」をクリック**
   - Commit message: "Initial commit - イケ配アプリ"
   - Extended description: （空欄でOK）

4. **アップロード完了！**

---

#### 方法B: Git コマンドライン（上級者向け）

```bash
# リポジトリをクローン
git clone https://github.com/[ユーザー名]/[リポジトリ名].git

# ファイルをコピー
cd [リポジトリ名]
# ikehai busiフォルダの中身を全てコピー

# Git設定
git config user.name "Your Name"
git config user.email "your.email@example.com"

# コミット＆プッシュ
git add .
git commit -m "Initial commit - イケ配アプリ"
git push origin main
```

---

### ステップ4: GitHub Pages有効化

1. **リポジトリの「Settings」タブをクリック**

2. **左メニューから「Pages」を選択**

3. **Source設定**：
   - Source: **「Deploy from a branch」**を選択
   - Branch: **「main」**を選択
   - Folder: **「/ (root)」**を選択

4. **「Save」をクリック**

5. **数分待つ**（1〜3分程度）

6. **完了！**
   ```
   🎉 Your site is live at https://[ユーザー名].github.io/[リポジトリ名]/
   ```

---

## 📱 公開後の確認

### PCで確認
```
https://[ユーザー名].github.io/[リポジトリ名]/
```
にアクセス

### スマホで確認

#### iOS（iPhone/iPad）
1. Safariで上記URLにアクセス
2. 共有ボタン → 「ホーム画面に追加」
3. アプリとしてインストール完了！

#### Android
1. Chromeで上記URLにアクセス
2. 「アプリをインストール」ボタンをタップ
3. ホーム画面にアイコンが追加！

---

## 🎨 アイコン画像の追加（推奨）

現在、アイコン画像がプレースホルダーになっています。

### アイコン作成方法

1. **https://favicon.io/ にアクセス**
2. **"Text" タブで "イケ配" または 🚴 を入力**
3. **背景色を `#ff6b9d`（ピンク）に設定**
4. **フォントを丸ゴシック系に**
5. **ダウンロード**

### アイコン配置

```
icons/
├── icon-72x72.png
├── icon-96x96.png
├── icon-128x128.png
├── icon-144x144.png
├── icon-152x152.png
├── icon-192x192.png     ← 必須！
├── icon-384x384.png
└── icon-512x512.png     ← 必須！
```

### 再アップロード

1. GitHubリポジトリの `icons/` フォルダを開く
2. 「Add file」→「Upload files」
3. アイコン画像をアップロード
4. 「Commit changes」

---

## 🔄 更新方法

ファイルを修正したら：

1. **GitHubリポジトリで該当ファイルを開く**
2. **鉛筆アイコン（Edit）をクリック**
3. **内容を修正**
4. **「Commit changes」をクリック**
5. **数分後、自動的に反映！**

---

## 🌐 独自ドメイン設定（オプション）

`your-app.com` のような独自ドメインも設定可能！

### 手順

1. **ドメインを購入**（例: お名前.com、ムームードメイン）
2. **DNS設定**：
   ```
   A レコード: 185.199.108.153
   A レコード: 185.199.109.153
   A レコード: 185.199.110.153
   A レコード: 185.199.111.153
   ```
3. **GitHub Settings → Pages → Custom domain**に入力
4. **「Save」→「Enforce HTTPS」にチェック**
5. **完了！**

---

## 📊 アクセス解析（オプション）

### Google Analytics追加

全HTMLファイルの `<head>` タグ内に追加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ❓ よくある質問

### Q1: デプロイに失敗する
**A**: 以下を確認してください：
- リポジトリがPublic（公開）になっているか
- Branchが「main」に設定されているか
- index.htmlがルートディレクトリにあるか

### Q2: PWA機能が動作しない
**A**: 
- HTTPSで接続されているか確認（GitHub Pagesは自動的にHTTPS）
- Service Workerが登録されているか確認（DevTools → Application）
- キャッシュをクリアして再読み込み

### Q3: アイコンが表示されない
**A**:
- `icons/` フォルダにアイコン画像が配置されているか確認
- ブラウザキャッシュをクリア
- Service Workerを削除して再登録

### Q4: 404エラーが出る
**A**:
- URLが正しいか確認（`/` の有無など）
- GitHub Pagesの設定でBranchが正しく選択されているか
- デプロイ完了まで数分かかる場合があります

---

## 🎊 デプロイ完了！

おめでとうございます！イケ配アプリが世界中からアクセス可能になりました🎉

### 共有しよう

- **友達にURLを送る**
- **SNSで共有**
- **QRコード作成**：https://www.qr-code-generator.com/

### 次のステップ

- **Google Analyticsでアクセス解析**
- **独自ドメイン設定**
- **機能追加（バーチャルギフト、ユーザーランクなど）**
- **フィードバック収集**

---

## 📞 サポート

問題が発生した場合：

1. **GitHub Issues**: リポジトリでIssueを作成
2. **GitHub Discussions**: コミュニティで質問
3. **Stack Overflow**: `github-pages` `pwa` タグで質問

---

## 📝 チェックリスト

デプロイ前の最終確認：

- [ ] GitHubアカウント作成済み
- [ ] リポジトリ作成済み
- [ ] 全ファイルアップロード完了
- [ ] GitHub Pages有効化済み
- [ ] URLにアクセスして動作確認
- [ ] スマホでインストールテスト
- [ ] アイコン画像配置（推奨）

---

## 🚀 Happy Deploying!

これでイケ配が世界中から利用可能になりました！

URLを共有して、たくさんの人に使ってもらいましょう💕✨

**デプロイURL**: `https://[ユーザー名].github.io/[リポジトリ名]/`

