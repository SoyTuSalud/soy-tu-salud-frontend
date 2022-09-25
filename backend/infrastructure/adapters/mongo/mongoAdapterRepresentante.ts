import { Representante } from '../../../domain/representantes/representanteInterface'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import representanteModel from './schemas/mongoSchemaRepresentante'
import { Status } from '../../../domain/commons/StatusInterface'
import { ResponseCodes } from '../../../domain/commons/enums/responseCodesEnum'

export const representantesTabla = async () => {
  return await representanteModel.find({})
  .populate("servicios")
    .then((data) => {

    if(!data){

        const status : Status = new Status(ResponseCodes.SUCCESS_EMPTY, "exitoso sin datos")
        const response : ResponseEntity<null> = new ResponseEntity(null, status)

        return response
      }

    const status : Status = new Status(ResponseCodes.SUCCESS, "exitoso")
    const response : ResponseEntity<any[]> = new ResponseEntity(data, status)

      return response

  }).catch(e =>{
    const status : Status = new Status(ResponseCodes.ERROR,  e.message)

      const response : ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
}

export const representante = async (id: String) => {

    return await representanteModel.findById(id).populate("servicios")
    .then((data: Representante) => {

      if(!data){
        const status : Status = new Status(ResponseCodes.SUCCESS_EMPTY, "exitoso sin datos")
        const response : ResponseEntity<null> = new ResponseEntity(null, status)

        return response

      }

      const status : Status = new Status(ResponseCodes.SUCCESS, "exitoso")
      const response : ResponseEntity<Representante> = new ResponseEntity(data, status)

      return response

    }).catch((e)  =>{

      const status : Status = new Status(ResponseCodes.ERROR,  e.message)

      const response : ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
}

export const crearRepresentante = async (args: Representante) =>{

    await conectarBD()

  let newRepresentante: Representante = {
    user: args.user,
    identificacion: args.identificacion,
    foto: args.foto,
    nombreCompleto: args.nombreCompleto,
    tipoDocumento: args.tipoDocumento,
    celular: args.celular,
    departamento: args.departamento,
    municipio: args.municipio,
    direccion: args.direccion,
      cuentaDeAhorros:args.cuentaDeAhorros, 
      distintivoHabilitacion:args.distintivoHabilitacion,   
      fotoLogoPublicidad:args.fotoLogoPublicidad, 
      hojaVida:args.hojaVida, 
      resumenCurriculum:args.resumenCurriculum, 
      aceptaConvenio:args.aceptaConvenio, 
      aceptaTratamientoDatos:args.aceptaTratamientoDatos, 
      aceptaDocumentoSARLAFT:args.aceptaDocumentoSARLAFT, 
      aceptaCodigoEticaSoyTuSalud:args.aceptaCodigoEticaSoyTuSalud, 
  }

  if (Object.keys(args).includes('paginaWeb')) {
    newRepresentante.paginaWeb = args.paginaWeb
  }

  if (Object.keys(args).includes('convalidacionIcfes')) {
    newRepresentante.convalidacionIcfes = args.convalidacionIcfes
  }

    return await representanteModel.create(newRepresentante)
    .then((data : any) =>{

      const status : Status = new Status(ResponseCodes.SUCCESS, "exitoso")
      const response : ResponseEntity<Representante> = new ResponseEntity(data, status)

      return response

    }).catch(e =>{

        const status : Status = new Status(ResponseCodes.ERROR,  e.message)

        const response : ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })

}
