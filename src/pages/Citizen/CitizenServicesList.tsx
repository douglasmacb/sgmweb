export interface ICitizenService {
  title: string
  cName: string
  url: string
}

export const citizenServicesList = [
  {
    title: 'Solicitar Serviço',
    cName: 'fas fa-clipboard-list',
    url: '/service'
  },
  {
    title: 'Fale Conosco',
    cName: 'fas fa-phone-square',
    url: '/contact'
  }
]