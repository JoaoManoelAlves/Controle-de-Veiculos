import type { HttpContext } from '@adonisjs/core/http'
import Manuntencao from '#models/manuntencao'
import { createManutencaoValidator, updateManutencaoValidator } from '#validators/manutencao'
export default class ManutencaosController {
  /**
   * Display a list of resource
   */
  async index({ auth }: HttpContext) {
    const user = auth.user!
    const manutencoes = await Manuntencao.query()
      .whereHas('veiculo', (query) => {
        query.where('usuarioId', user.id)
      })
      .preload('veiculo')
    return manutencoes
  }

  /**
   * Handle form submission for the create action
   */
  async store({ auth, params, request }: HttpContext) {
    try {
      const user = auth.user!

      const veiculo = await user
        .related('veiculos')
        .query()
        .where('id', params.veiculoId)
        .firstOrFail()

      const { descricao, data, custo } = await request.validateUsing(createManutencaoValidator)
      const manutencao = await Manuntencao.create({ descricao, data, custo, veiculoId: veiculo.id })
      return manutencao
    } catch (error) {
      return error
    }
  }

  /**
   * Show individual record
   */
  async show({ auth, params, response }: HttpContext) {
    try {
      const user = auth.user!

      // 1. Corrigido o nome do Model (Manutencao)
      const manutencao = await Manuntencao.query()
        .where('id', params.id)
        // 2. Garante que essa manutenção pertence a um veículo do usuário logado
        .whereHas('veiculo', (query) => {
          query.where('usuarioId', user.id) // Ajustado para 'usuarioId' igual ao seu Model
        })
        .firstOrFail()

      return response.ok(manutencao)
    } catch (error) {
      return response.status(404).json({
        message: 'Manutenção de veículo não encontrada ou acesso negado',
      })
    }
  }
  /**
   * Handle form submission for the edit action
   */
  async update({ auth, params, request, response }: HttpContext) {
    try {
      const user = auth.user!

      const veiculo = await user
        .related('veiculos')
        .query()
        .where('id', params.veiculoId)
        .firstOrFail()

      const { descricao } = await request.validateUsing(updateManutencaoValidator)
      const manutencao = await Manuntencao.query()
        .where('id', params.id)
        .where('veiculoId', veiculo.id)
        .firstOrFail()

      manutencao.merge({ descricao })
      await manutencao.save()
      return manutencao
    } catch (error) {
      return response.status(404).json({ message: 'Manutencao de veículo não encontrado' })
    }
  }

  /**
   * Delete record
   */
  async destroy({ auth, params, response }: HttpContext) {
    try {
      const user = auth.user!

      const veiculo = await user
        .related('veiculos')
        .query()
        .where('id', params.veiculoId)
        .firstOrFail()

      const manutencao = await Manuntencao.query()
        .where('id', params.id)
        .where('veiculoId', veiculo.id)
        .firstOrFail()

      await manutencao.delete()

      return response.send('Registro de Manutencção excluido com sucesso')
    } catch (error) {
      return response.status(404).json({ message: 'Manutencao de veículo não encontrado' })
    }
  }
}
