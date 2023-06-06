import { exercicio2 } from "./../src/exercicio2";
describe("exercicio2 data", () => {
  test("transformar retonra da data", () => {
    const result = exercicio2("2022/10/16");
    console.log(result);

    expect(result).toBe('16/10/2022')
  });
});
