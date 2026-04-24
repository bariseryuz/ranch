import fs from 'node:fs/promises';
import path from 'node:path';

import pdf from 'pdf-parse';
import { Document } from '@langchain/core/documents';

async function listFilesRecursive(rootPath) {
  const out = [];

  async function walk(current) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) await walk(full);
      else if (e.isFile()) out.push(full);
    }
  }

  await walk(rootPath);
  return out;
}

function isSupported(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ext === '.pdf' || ext === '.txt' || ext === '.md';
}

async function loadOne(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.pdf') {
    const buf = await fs.readFile(filePath);
    const data = await pdf(buf);
    const text = typeof data?.text === 'string' ? data.text : '';
    return [
      new Document({
        pageContent: text,
        metadata: { source: filePath, type: 'pdf' },
      }),
    ];
  }

  if (ext === '.txt' || ext === '.md') {
    const text = await fs.readFile(filePath, 'utf8');
    return [
      new Document({
        pageContent: text,
        metadata: { source: filePath, type: 'text' },
      }),
    ];
  }

  return [];
}

export async function loadDocumentsFromPath(inputPath) {
  const abs = path.resolve(inputPath);
  const stat = await fs.stat(abs);

  const files = stat.isDirectory()
    ? (await listFilesRecursive(abs)).filter(isSupported)
    : isSupported(abs)
      ? [abs]
      : [];

  const all = [];
  for (const f of files) {
    const docs = await loadOne(f);
    all.push(...docs);
  }

  return all;
}

