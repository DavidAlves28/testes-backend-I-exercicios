interface User {
  id: string;
  name: string;
}
export const exercicio3 = (): User[] | undefined => {

  const usuarios: User[] = [
    { id: "01", name: "David" },
    { id: "02", name: "Astrodev" },
    { id: "03", name: "Gui" },
  ];

  return usuarios
};

// teste com map 
// export const exercicio3 = (char :string): boolean| undefined => {
//       if (!char) {
//         return undefined;
//       }
//       const usuarios: User[] = [
//         { id: "01", name: "David" },
//         { id: "02", name: "Astrodev" },
//         { id: "03", name: "Gui" },
//       ];
//       const returnUser = usuarios.filter((user) => {
//         return user.name === char;
//       });
//     console.log(returnUser);
    
//       if (returnUser.length === 0) {
//         return undefined;
    //   }
    //   return true
    // };
