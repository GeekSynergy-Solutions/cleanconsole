# 🧼 cleanconsole

[![npm version](https://img.shields.io/npm/v/cleanconsole.svg)](https://www.npmjs.com/package/cleanconsole)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Repo](https://img.shields.io/badge/github-GeeksSynergy--Solutions%2Fcleanconsole-blue?logo=github)](https://github.com/GeekSynergy-Solutions/cleanconsole)

> ✅ Secure, environment-aware logging utility for Node.js and browser apps — suppress console output in production, log freely in development.

---

## 📦 Install

```bash
npm install cleanconsole
```

or

```bash
yarn add cleanconsole
```

---

## Setup
Ensure the project .env file has NODE_ENV set to 'production' if you are moving to production

```bash
NODE_ENV = production
```

## 🛠 Usage

```js
import cleanconsole from 'cleanconsole';

const userData = {
  name: 'Alice',
  token: 'secret-token-123',
};

// Will log only in non-production environments
cleanconsole.protectedLogData(userData);

// Will always log, even in production
cleanconsole.protectedWarningData('This warning is always shown!', true);

// Suppressed in production by default
cleanconsole.protectedInfoData({ status: 'Init complete' });

// Force debug log in all environments
cleanconsole.protectedDebugData('Debugging info', true);
```

---

## 🌐 How It Works

The internal check is based on the environment:

```js
process.env.NODE_ENV !== 'production'
```

### 🔒 Behavior Summary

| Function               | Dev (default) | Prod (default) | Override with `true` |
| ---------------------- | ------------- | -------------- | -------------------- |
| `protectedLogData`     | ✅ Shown       | ❌ Hidden       | ✅ Forced if `true`   |
| `protectedWarningData` | ✅ Shown       | ❌ Hidden       | ✅ Forced if `true`   |
| `protectedInfoData`    | ✅ Shown       | ❌ Hidden       | ✅ Forced if `true`   |
| `protectedDebugData`   | ✅ Shown       | ❌ Hidden       | ✅ Forced if `true`   |

---

## 🔧 API

Each method is a wrapper around native console methods, with protection based on the environment, which you can override if need be anywhere.

### `protectedLogData(data: any, showProtectedData?: boolean)`

Logs using `console.log`.

### `protectedWarningData(data: any, showProtectedData?: boolean)`

Logs using `console.warn`.

### `protectedInfoData(data: any, showProtectedData?: boolean)`

Logs using `console.info`.

### `protectedDebugData(data: any, showProtectedData?: boolean)`

Logs using `console.debug`.

---

## 📂 Project Structure

```
cleanconsole/
├── index.js
├── package/
│   └── clean_console_class.js
├── package.json
└── README.md
```

---

## 📍 Repository

GitHub: [GeekSynergy-Solutions/cleanconsole](https://github.com/GeekSynergy-Solutions/cleanconsole)

Clone:

```bash
git clone https://github.com/GeekSynergy-Solutions/cleanconsole.git
```

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork this repo
2. Create a new branch (`git checkout -b feature/new`)
3. Commit your changes
4. Open a pull request

---

## 📄 License

MIT © [GeekSynergy Solutions](https://github.com/GeekSynergy-Solutions)

---

## 💡 Tip

Use with:

```js
const isDev = process.env.NODE_ENV !== 'production';
cleanconsole.protectedInfoData('Hello Dev!', isDev);
```

This gives you precise control over logging in your apps or internal tools.

---
