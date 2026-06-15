import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator, updateUserValidator } from '#validators/user'

export default class UsuariosController {
  async index({}: HttpContext) {
    const usuarios = await User.all()
    return usuarios
  }
  async store({ request }: HttpContext) {
    const { nome, email, password } = await request.validateUsing(createUserValidator)
    const usuario = await User.create({
      nome,
      email,
      password,
    })
    return usuario
  }

  async show({ params, response }: HttpContext) {
    try {
      const usuario = await User.findByOrFail('id', params.id)
      return usuario
    } catch (error) {
      return response.status(404).json({ message: 'Usuário não encontrado' })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const { nome, password } = await request.validateUsing(updateUserValidator)
      const usuario = await User.findByOrFail('id', params.id)
      usuario.merge({ nome, password })
      await usuario.save()
      return usuario
    } catch (error) {
      return response.status(404).json({ message: 'Usuário não encontrado' })
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const usuario = await User.findByOrFail('id', params.id)
      await usuario.delete()
      return { message: 'Usuário deletado com sucesso' }
    } catch (error) {
      return response.status(404).json({ message: 'Usuário não encontrado' })
    }
  }
}
