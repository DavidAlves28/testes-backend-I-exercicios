

export const exercicio2 = (date: string): string | null => {
  if (typeof date !== "string") {
    return null;
  }

  let data = new Date(date);

  let dataFormatada =
    data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

  if (dataFormatada.includes("NaN")) {
    return null;
  }
  console.log(dataFormatada);

  return dataFormatada
};

