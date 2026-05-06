## Knowledge base

Parent overview: **`server/rag/README.md`** (ingest commands, env vars, namespaces).

This folder is the **default** source content for RAG ingestion.

- `server/rag/knowledge/rules/`: policies + constraints (what the concierge must/must not do)
- `server/rag/knowledge/info/`: factual reference material (FAQs, brochures, amenities, timelines, etc.)

### Supported files

Ingestion walks the tree recursively and loads **`.md`**, **`.txt`**, and **`.pdf`** (see `server/rag/loaders.js`). Other file types are ignored.

### How to ingest

From the repo root, default path is `server/rag/knowledge` (or set `RAG_KNOWLEDGE_PATH` in `server/rag/config.js`):

```bash
node server/rag/ingest.js
# or
node server/rag/ingest.js --path server/rag/knowledge
```

### Menu content

Menu text lives under **`server/rag/menu/`**. Ingest it with **`npm run rag:ingest:menu`** (or `rag:ingest:all`).

- **Same namespace as knowledge** (simplest): menu chunks live next to rules/info; no extra env.
- **Separate namespace** (e.g. `menu`): set **`RAG_RETRIEVAL_NAMESPACES=default,menu`** in `.env` so queries merge both.

### Note on README files

These `README.md` files are normal Markdown and **will be embedded** if they sit under the ingested path. Keep them short and factual, or move long “how to” docs outside the ingest tree if you don’t want them in retrieval.
