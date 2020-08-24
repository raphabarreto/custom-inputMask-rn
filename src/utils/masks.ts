function maskCep(initialValue: string): string {
  return initialValue.replace(/^(\d{5})(\d)/, '$1-$2');
}

function maskPhone(initialValue: string): string {
  return initialValue
    .replace(/^(\d{2})(\d)/g, '($1)$2')
    .replace(/(\d{5})(\d)$/, '$1-$2');
}

function maskCurrency(initialValue: string): string {
  return initialValue
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
}

function maskCPF(initialValue: string): string {
  return initialValue
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

function maskCNPJ(initialValue: string): string {
  return initialValue
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
}

export { maskCep, maskPhone, maskCurrency, maskCPF, maskCNPJ };
