import type { HttpContext } from '@adonisjs/core/http'
import { createVeiculoValidator, updateVeiculoValidator } from '#validators/veiculo'
export default class VeiculosController {
  /**
   * Display a list of resource
   */
  async index({ auth, response }: HttpContext) {
    const veiculos = await auth.user?.related('veiculos').query()
    return response.send(veiculos)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ auth, request }: HttpContext) {
    const { placa, modelo, marca, ano } = await request.validateUsing(createVeiculoValidator)
    const veiculo = await auth.user?.related('veiculos').create({
      placa,
      modelo,
      marca,
      ano,
    })
    return veiculo
  }

  /**
   * Show individual record
   */
  async show({ auth, params, response }: HttpContext) {
    try {
      const veiculo = await auth.user
        ?.related('veiculos')
        .query()
        .where('id', params.id)
        .firstOrFail()
      return veiculo
    } catch (error) {
      return response.status(404).send('Veiculo não encontrado')
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ auth, params, request, response }: HttpContext) {
    try {
      const { modelo, marca, ano } = await request.validateUsing(updateVeiculoValidator)
      const veiculo = await auth.user
        ?.related('veiculos')
        .query()
        .where('id', params.id)
        .firstOrFail()
      veiculo?.merge({
        modelo,
        marca,
        ano,
      })
      await veiculo?.save()
      return veiculo
    } catch (error) {
      return response.status(404).send('Veiculo não encontrado')
    }
  }

  /**
   * Delete record
   */
  async destroy({ auth, params, response }: HttpContext) {
    try {
      const veiculo = await auth.user
        ?.related('veiculos')
        .query()
        .where('id', params.id)
        .firstOrFail()
      await veiculo?.delete()
      return response.status(204)
    } catch (error) {
      return response.status(404).send('Veiculo não encontrado')
    }
  }
}
