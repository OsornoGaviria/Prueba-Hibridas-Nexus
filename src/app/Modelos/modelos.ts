export interface CuentaPropia{
    fechaRegistro: Date
    entidadFinanciera: string
    estadoCuenta: string
    numeroCuenta: string
    saldoCuenta: number
    tipoCuenta: string
    idCuenta:string
  }

  export interface CuentaTercero{
    fechaRegistro: Date
    entidadFinanciera: string
    estadoCuenta: string
    numeroCuenta: string
    tipoCuenta: string
    idCuenta:string
    nombreTitular: string
    aliasCuenta: string
  }

  export interface TranferenciaSalida{
      fecha: Date
      valor: number
      cuenta: string
      tipo: string
  }

  export interface TranferenciaLlegada{
      fecha: Date   
      valor: number
      cuenta: string 
      tipo: string
  }