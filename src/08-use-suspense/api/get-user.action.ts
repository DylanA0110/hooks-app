export interface User {
  id: number;
  name: string;
  location: string;
  rol: string;
}

export const getUserAction = async (id: number) => {
  console.log("Funcion llamada");
  await new Promise((res) => setTimeout(res, 2000));
  console.log("Funcion cumplida");

  return {
    id,
    name: "Dylan Araica",
    location: "Ottawa, Canada",
    rol: "Instructor de software",
  };
};
