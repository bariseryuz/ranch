# RAG (concierge backend)

This folder powers **`POST /api/concierge`**: retrieve chunks from **Pinecone**, then answer with **Gemini** using `server/rag/qa.js`.

## Layout

| Path | Purpose |
|------|---------|
| `config.js` | Env vars, chunk sizes, default knowledge path |
| `loaders.js` | Load `.md`, `.txt`, `.pdf` recursively from a directory |
| `splitter.js` | `RecursiveCharacterTextSplitter` (size/overlap from config) |
| `embeddings.js` | Gemini embeddings |
| `vectorstore.js` | Pinecone client + `PineconeStore` |
| `ingest.js` | CLI: chunk → embed → upsert into a Pinecone **namespace** |
| `qa.js` | Retrieve → build prompt → Gemini chat |
| `knowledge/` | Default content tree (`rules/` + `info/`) — see `knowledge/README.md` |
| `menu/` | Menu text for ingestion — see `menu/README.md` |

## Environment variables

Set in `.env` / `.env.local` (see repo root `.env.example`).

| Variable | Required | Notes |
|----------|----------|--------|
| `GEMINI_API_KEY` | Yes | Gemini + embeddings |
| `GEMINI_MODEL` | No | Default `gemini-2.0-flash` |
| `GEMINI_EMBEDDING_MODEL` | No | Default `gemini-embedding-001` |
| `PINECONE_API_KEY` | Yes | |
| `PINECONE_INDEX` | Yes | Lowercased in config |
| `PINECONE_NAMESPACE` | No | Default `default`; used for ingest when `--namespace` omitted |
| `RAG_KNOWLEDGE_PATH` | No | Default `server/rag/knowledge` |
| `RAG_RETRIEVAL_NAMESPACES` | No | e.g. `default,menu` — **merge** retrieval across namespaces at query time |

## Ingestion

Requires Node **≥ 20** (see root `package.json` `engines`).

**Knowledge + rules/info** (default path from env):

```bash
npm run rag:ingest:knowledge
```

**Menu** (same index; use the **same** `PINECONE_NAMESPACE` as knowledge *or* a separate namespace + `RAG_RETRIEVAL_NAMESPACES`):

```bash
npm run rag:ingest:menu
```

**Both** (typical: everything in `default`):

```bash
npm run rag:ingest:all
```

Manual equivalents:

```bash
node server/rag/ingest.js --path server/rag/knowledge
node server/rag/ingest.js --path server/rag/menu
```

Flags:

- `--path` / `--input` — file or directory root
- `--namespace` — Pinecone namespace (defaults to `PINECONE_NAMESPACE`)

Chunk IDs are **content-derived** (`ingest.js`); re-running ingest **adds** new vectors. To replace a namespace cleanly, clear it in Pinecone before re-ingesting.

## Query-time namespaces

- **Single namespace:** only `PINECONE_NAMESPACE` (default).
- **Knowledge + menu in separate namespaces:** set e.g. `RAG_RETRIEVAL_NAMESPACES=default,menu` after ingesting each path with matching `--namespace`.
- **API override:** `POST /api/concierge` JSON may include `namespaces: ["default","menu"]` (optional).

## API

`POST /api/concierge`

```json
{
  "message": "What’s on the menu?",
  "messages": [],
  "namespace": "optional-single",
  "namespaces": ["optional", "multi"]
}
```

## Operational notes

- Only **`.md`**, **`.txt`**, **`.pdf`** are loaded; everything else is skipped.
- Put **policies** under `knowledge/rules/`, **facts** under `knowledge/info/` (see their READMEs).
- For production, run ingest in CI or manually after content changes, then verify retrieval in staging.
