/* eslint-env node */
/*
 * MicroCMS schema JSON から TypeScript 型を再生成するスクリプト。
 * 1) cms-schemas/api-*.json を一時ディレクトリへコピー（CLIが要求する命名に変換）
 * 2) microcms-typescript を実行して generated-types.ts を更新
 * 3) 生成ファイルに eslint 無効化ヘッダーを付与（richEditorV2 が any になるため）
 * 4) 一時ディレクトリをクリーンアップ
 */

import { execFileSync } from 'node:child_process';
import {
  mkdtemp,
  mkdir,
  readdir,
  readFile,
  rm,
  writeFile,
} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';

const projectRoot = process.cwd();
const schemaDir = path.join(projectRoot, 'cms-schemas');
const outputFile = path.join(
  projectRoot,
  'src/entities/microcms/model/generated-types.ts',
);
const outputDir = path.dirname(outputFile);
const lintDisableHeader =
  '/* eslint-disable @typescript-eslint/no-explicit-any */\n';

const now = new Date();
const timestamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;

const main = async () => {
  const tmpDir = await mkdtemp(path.join(os.tmpdir(), 'microcms-types-'));

  try {
    await mkdir(outputDir, { recursive: true });

    const files = await readdir(schemaDir);
    const schemaFiles = files.filter(
      file => file.startsWith('api-') && file.endsWith('.json'),
    );

    if (schemaFiles.length === 0) {
      throw new Error('cms-schemas に api-*.json が見つかりませんでした。');
    }

    for (const file of schemaFiles) {
      const sourcePath = path.join(schemaDir, file);
      const baseName = file.replace(/\.json$/, '');
      const targetName = `${baseName}-${timestamp}.json`;
      const targetPath = path.join(tmpDir, targetName);

      const content = await readFile(sourcePath, 'utf-8');
      await writeFile(targetPath, content, 'utf-8');
    }

    execFileSync('npx', ['microcms-typescript', tmpDir, outputFile], {
      stdio: 'inherit',
    });

    const generated = await readFile(outputFile, 'utf-8');
    if (!generated.startsWith(lintDisableHeader)) {
      await writeFile(outputFile, `${lintDisableHeader}${generated}`, 'utf-8');
    }
  } finally {
    await rm(tmpDir, { recursive: true, force: true });
  }
};

main().catch(error => {
  globalThis.console.error(error);
  process.exit(1);
});
