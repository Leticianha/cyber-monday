  // Adicione um ouvinte de evento de clique ao botão
  document.getElementById('scrollButton').addEventListener('click', function() {
    // Obtenha a posição da div "contagem-regressiva"
    var contagemRegressiva = document.getElementById('contagem-regressiva');
    var contagemRegressivaPosicao = contagemRegressiva.offsetTop;

    // Role a página até a posição da div "contagem-regressiva" com animação suave
    window.scrollTo({
        top: contagemRegressivaPosicao,
        behavior: 'smooth'
    });
});
  
  
  // Converter 14 dias para segundos
  const duration = 14 * 24 * 60 * 60;
  const initialWidth = 100;
  const decrementWidth = initialWidth / duration;
  let currentWidth = initialWidth;

  const intervalId = setInterval(() => {
      currentWidth -= decrementWidth;
      document.getElementById('progress').style.width = currentWidth + '%';

      // Calcular o tempo restante e exibir
      const timeRemaining = Math.ceil(currentWidth / decrementWidth);
      const days = Math.floor(timeRemaining / (24 * 60 * 60));
      const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
      const seconds = timeRemaining % 60;
      document.getElementById('timer').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);

  setTimeout(() => {
      clearInterval(intervalId);
      document.getElementById('timer').innerText = ''; // Limpar o contador ao atingir 0s
      document.getElementById('message').innerHTML = 'CHEGOU A CYBER MONDAY!';
  }, duration * 1000);