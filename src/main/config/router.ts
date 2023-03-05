import { readdirSync } from 'fs'
import { join } from 'path'
import { makeRouterOrchestrator } from '../factories/orchestrator/router-orchestrator-router'

export default (): void => {
  const router = makeRouterOrchestrator()
  readdirSync(join(__dirname, '../routes')).map(async file => {
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
