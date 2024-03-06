#!/usr/bin/env npx ts-node
import { cpus } from 'node:os'
import * as path from 'node:path'
import { existsSync } from 'node:fs'
import { rimrafSync } from 'rimraf'
import { execa } from 'execa'
import { chunk } from 'lodash-es'
import { targets } from './utils'

main()

async function main() {
  const cores = cpus().length
  const groups = Math.ceil(targets.length / cores)
  const chunkTargets = chunk(targets, groups)
  await Promise.all(chunkTargets.map(t => Promise.all(t.map(build))))
}

async function build(target: string) {
  const pkgDir = path.resolve('packages', target)
  const distDir = path.resolve(pkgDir, 'dist')
  if (existsSync(distDir))
    rimrafSync(distDir)
  await execa(
    'rollup',
    [
      '-c',
      'rollup.pkg.config.ts',
      '--configPlugin',
      'swc',
      '--environment',
      `TARGET:${target}`,
    ],
  )
}
