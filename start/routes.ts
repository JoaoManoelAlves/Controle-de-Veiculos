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

    router.get('/manutencoes', [controllers.Manutencaos, 'index'])
    router.post('/veiculos/:veiculoId/manutencoes', [controllers.Manutencaos, 'store'])
    router.get('/veiculos/:veiculoId/manutencoes/:id', [controllers.Manutencaos, 'show'])
    router.put('/veiculos/:veiculoId/manutencoes/:id', [controllers.Manutencaos, 'update'])
    router.delete('/veiculos/:veiculoId/manutencoes/:id', [controllers.Manutencaos, 'destroy'])
  })
  .use(middleware.auth())
