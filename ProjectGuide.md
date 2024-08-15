# Project Guide

## Step 1:

Setup project environment with Node.js, mocha + chai

```
npm init
npm install mocha chai --save-dev
```

## Step 2:

Setup project structure

shopping-cart/
├── index.html
├── style.css
├── app.js
├── test/
│ └── app.test.js
└── package.json

## Step 3:

Configure test script

```
"scripts": {
  "test": "mocha"
}
```
