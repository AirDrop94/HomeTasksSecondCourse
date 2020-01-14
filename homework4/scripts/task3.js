// eslint-disable-next-line rules
function filterText(refactorText) {
  const textArray = refactorText.split(' ');
  // eslint-disable-next-line no-shadow
  const filterText = textArray.filter((word) => word.length > 7);
  const res = filterText.join(' ------- ');
  console.log(res);
  // eslint-disable-next-line no-return-assign
  return document.getElementById('refactorText').innerHTML = res;
}

filterText('Лейтенант шел по желтому строительному песку, нагретому дневным палящим солнцем. Он\n'
    + '  был мокрым от\n'
    + '  кончиков пальцев до кончиков волос, все его тело было усеяно царапинами от\n'
    + ' острой колючей проволоки и ныло от сводящей\n'
    + '  с ума боли, но он был жив и направлялся к командному штабу, который виднелся на горизонте метрах в пятистах.');
