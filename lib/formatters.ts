const NUMBER_FORMATTER = new Intl.NumberFormat("en-US")

export function formatNumber(number: number) {
    return NUMBER_FORMATTER.format(number)
  }