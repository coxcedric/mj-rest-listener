# MJ REST Listener

Ce module Foundry VTT lit `globalThis.foundryExpressRoutes` et expose automatiquement les routes HTTP REST correspondantes.

## Fonctionnement

Tout module peut déclarer :

```js
globalThis.foundryExpressRoutes["mon-module"] = {
  get: {
    "/ma-route": async (req, res) => { res.json({ message: "Hello" }) }
  },
  post: {
    "/mon-post": async (req, res) => { res.json({ ok: true }) }
  }
};
```

Le module `mj-rest-listener` active ces routes automatiquement via le serveur Express de Foundry.

## Installation via manifest

Collez cette URL dans Foundry > Add-on Modules > Install Module > Manifest URL :

```
https://raw.githubusercontent.com/coxcedric/mj-rest-listener/main/module.json
```