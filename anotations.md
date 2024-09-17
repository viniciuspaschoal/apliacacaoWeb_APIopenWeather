/*function searchCityImage(city) {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${unsplashKey}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          // Pega a URL da primeira imagem encontrada
          const imageURL = data.results[0].urls.regular;
  
          // Define como plano de fundo
          document.body.style.backgroundImage = `url(${imageURL})`;
          document.body.style.backgroundSize = "cover";
        } else {
          console.log("Nenhuma imagem foi encontrada.");
          // Caso nenhuma imagem seja encontrada, defina uma imagem de fallback
          document.body.style.backgroundImage = "url('url-da-imagem-padrão')";
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar imagem:", error);
      });
  }*/