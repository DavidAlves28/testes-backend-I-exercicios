import { exercicio1 } from "./../src/exercicio1";
describe("exercicio 1 ", () => {
  test("recebe number  e retorna Null", () => {
    const result = exercicio1(44 as any);
    expect(result).toBeNull;
  });

  test("recebe string e retorna number", () => {
    const result = exercicio1("33");
    expect(result).toBe(null)
  });

  test("recebe string  e retorna NUll", () => {
    const result = exercicio1("12.6");
    expect(result).toBeNull;
  });
});
