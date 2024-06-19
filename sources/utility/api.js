const gateway = "http://api.nasa.gov/planetary/apod";
const api_key = "j7EXRxfwICcvCmfsWkHeb55dBxXaLtuBMoshtJ8J";
export default api = async (parametros) => {
  try {
    //probar el codigo
    const response = await fetch(
      `${gateway}?api_key=${api_key}${parametros.length > 0 ? parametros : ""}`
    );
    return await response.json();
  } catch (error) {
    //captura el error
    console.error("error en api", error);
  } finally {
    //ejecucion final
  }
};
