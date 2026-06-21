import vine from '@vinejs/vine'

export const createManutencaoValidator = vine.create({
  descricao: vine.string(),
  data: vine.date(),
  custo: vine.number(),
})

export const updateManutencaoValidator = vine.create({
  descricao: vine.string(),
})
