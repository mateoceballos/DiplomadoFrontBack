import img1 from "../assets/images/Views/index/B1.jpeg";
import img2 from "../assets/images/Views/index/B2.jpeg";

async function GetBooks() {
  const data = {
    data: [img1, img2, img1, img2, img1, img2, img1, img2, img1, img2],
  };
  return data;
}
async function main() {
  try {
    const books =
      "[img1, img2, img1, img2, img1, img2, img1, img2, img1, img2]"; // Obtén el arreglo de imágenes
    return books; // Debería imprimir el arreglo de imágenes con las rutas resueltas
  } catch (error) {
    console.error("Error al obtener los libros:", error);
  }
}

export { GetBooks };
export default main;
