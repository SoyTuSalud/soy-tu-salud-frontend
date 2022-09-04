import { Schema, model, models } from 'mongoose'
import { TipoDocumentoEnum } from '../../../../domain/commons/enums/tipoDocumentoEnum'
import { Servicios } from '../../../../domain/servicios/serviciosInterface'

const ServiciosSchema = new Schema<Servicios>({
  tipoServicio: {
    type: String,
    enum: TipoDocumentoEnum,
    required: true,
  },
  especialidad: {
    type: String,
    unique: true,
    validate: /^\d/,
    required: true,
  },
  modalidad: {
    type: String,
    required: true,
  },
  horaInicio: {
    type: String,
    validate: /^\d/,
    required: true,
  },
  horaFin: {
    type: String,
    required: true,
  },
  celularServicio: {
    type: String,
    unique: true,
    validate: /^\d{10}$/,
    required: true,
  },
  whatsAppServicio: {
    type: String,
    validate: /^\d{10}$/,
    required: true,
  },
  nombreResponsable: {
    type: String,
    required: true,
  },
  direccionServicio: {
    type: String,
    required: true,
  },
  dias: {
    type: [String],
    required: true,
  },
  valorServicio: {
    type: Number,
    required: true,
  },
  representante: {
    type: Schema.Types.ObjectId,
    ref: models.Representante,
    required: true,
  },
  habilitado: {
    type: Boolean,
    required: true,
  },
})

export default models.Servicios || model('Servicios', ServiciosSchema)
