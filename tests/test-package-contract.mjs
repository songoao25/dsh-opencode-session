import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const patch = readFileSync(new URL('../cordis.patch.yml', import.meta.url), 'utf8')

assert.equal(pkg.name, 'dsh-opencode-session')
assert.equal(pkg.license, 'MIT')
assert.equal(pkg.author?.name, 'nobu121', 'keep the upstream author attribution')
assert.match(pkg.repository.url, /songoao25\/dsh-opencode-session/)
assert.ok(existsSync(new URL('../LICENSE', import.meta.url)))
assert.ok(existsSync(new URL('../SECURITY.md', import.meta.url)))
assert.match(patch, /name: dsh-opencode-session/)
assert.match(patch, /id: opencode-go-session-header/)
console.log('package contract OK')
