first-cache
================

[![NPM](https://nodei.co/npm/first-cache.png)](https://nodei.co/npm/first-cache/)

Let `first-cache` plugin for watchify, provides cache from the first bundle.

# install

```
npm install first-cache
```

# usage

## Command Line

```shell
$ watchify entry.js -v -p [first-cache -c ./tmp/browserify-cache.json] > bundle.js
```

### running demo

first time bundle is no cache file.

```shell
# first time, no cache file
$ watchify -p first-cache -r react -r react-dom -o bundle.js -v
728042 bytes written to bundle.js (2.65 seconds)

# second time, exist cache file
$ watchify -p first-cache -r react -r react-dom -o bundle.js -v
728042 bytes written to bundle.js (0.23 seconds)
```

# license

MIT
