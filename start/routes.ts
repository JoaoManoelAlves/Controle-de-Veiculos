/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.post('/register', [controllers.Usuarios, 'store'])
router.get('/usuarios', [controllers.Usuarios, 'index'])
router.delete('/usuarios/:id', [controllers.Usuarios, 'destroy'])

router.post('/login', [controllers.AccessTokens, 'store'])
router.delete('/logout', [controllers.AccessTokens, 'destroy'])

router
  .group(() => {
    router.resource('/veiculos', controllers.Veiculos)
  })
  .use(middleware.auth())
