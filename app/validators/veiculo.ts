import vine from '@vinejs/vine'

export const createVeiculoValidator = vine.create({
  placa: vine.string(),
  modelo: vine.string(),
  marca: vine.string(),
  ano: vine.number(),
})

export const updateVeiculoValidator = vine.create({
  modelo: vine.string(),
  marca: vine.string(),
  ano: vine.number(),
})
