export const exercicio1 = (n: string): number | null => {
  if (typeof n !== "string") {
    return null;
  }

  const isNumber = Number(n);
  // verifica se 'isNumber' é numero inteiro
  if (!Number.isInteger(isNumber)) {
    return null;
  }

  //verifica se retorno é NaN
  if (isNaN(isNumber)) {
    return null;
  }

  return isNumber
};

const aula = (a: string): number | null => {
  if (typeof a !== "string") {
    return null;
  }
  return Number(a);
};
