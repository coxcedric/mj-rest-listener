Hooks.once('init', () => {
  const express = game.server?.express;
  if (!express || !globalThis.foundryExpressRoutes) {
    console.warn("MJ REST Listener: Express ou foundryExpressRoutes non disponibles.");
    return;
  }

  const routes = globalThis.foundryExpressRoutes;
  for (const [module, handlers] of Object.entries(routes)) {
    if (handlers.get) {
      for (const [path, handler] of Object.entries(handlers.get)) {
        express.get(path, async (req, res) => {
          try {
            await handler(req, res);
          } catch (err) {
            console.error("GET " + path, err);
            res.status(500).json({ error: "Erreur GET " + path });
          }
        });
      }
    }

    if (handlers.post) {
      for (const [path, handler] of Object.entries(handlers.post)) {
        express.post(path, async (req, res) => {
          try {
            await handler(req, res);
          } catch (err) {
            console.error("POST " + path, err);
            res.status(500).json({ error: "Erreur POST " + path });
          }
        });
      }
    }
  }

  console.log("✅ MJ REST Listener actif. Routes REST exposées.");
});