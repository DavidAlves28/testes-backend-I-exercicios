import { exercicio3 } from './../src/exercicio3';
describe('exercicio 3',()=>{
    // test('retornar nome existente com map',()=>{
    //     const result = exercicio3('')
    //     console.log(result);
        
    //     expect(result).toBeTruthy()
    // })
    test('retornar nome existente ',()=>{
        const result = exercicio3()
        console.table(result);
        
        expect(result).toContainEqual({id:'02',name:"Astrodev"})
    })
  

})