// Actualización del método getWeatherData para usar el endpoint del servidor
const getWeatherData = async (city) => {
  toggleLoader();
  const apiWeatherURL = `/api/weather?city=${city}`;

  try {
    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    toggleLoader();
    return data;
  } catch (error) {
    toggleLoader();
    console.error("Error al obtener datos del clima:", error);
    showErrorMessage();
  }
};

// El resto del script permanece igual
