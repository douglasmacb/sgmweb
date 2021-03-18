export const formatNumberToMoney = (money: number, currency: string = 'pt-BR'): string => {
  const numberFormat = new Intl.NumberFormat(currency, {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return numberFormat.format(money);
}


export const formatDate = (date: Date) => {
  return ((date.getDate() + 1)) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear()
}