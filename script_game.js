let phrases = [
    { text: 'отправить другу смешную гифку', image: './img/game/1.gif' },
    { text: 'посмотреть скидки на авиабилеты', image: './img/game/2.png' },
    { text: 'разобраться, о чём поют рэперы', image: './img/game/3.png' },
    { text: 'Юрий Дудь', image: './img/game/4.png' },
    { text: 'расставить книги на полке по цвету', image: './img/game/5.png' },
    { text: 'читать про зарплаты в Сан-Франциско', image: './img/game/6.png' },
    { text: 'прочитать новости и ужаснуться в комментариях', image: './img/game/7.png' },
    { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: './img/game/8.png' },
    { text: 'посмотреть трейлер сериала и заодно первый сезон', image: './img/game/9.png' },
    { text: 'проверить непрочитанное в Telegram-каналах', image: './img/game/10.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  for (let i=0; i<=2; i=i+1) {
   smoothly (phrase,'textContent', phrases[i].text);
    smoothly (image, 'src', phrases[i].image) 
  }