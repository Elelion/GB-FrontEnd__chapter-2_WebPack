console.log('useFull');

/**
 * loadScript - Такие вызовы называют «асинхронными», потому что действие
 * (загрузка скрипта) будет завершено не сейчас, а потом.
 *
 * Если после вызова loadScript(…) есть какой-то код, то он не будет ждать,
 * пока скрипт загрузится.
 */
loadScript('js/a.js', () => {
  console.log('from useFull - a.js: ', a);

  // замыкание
  loadScript('js/b.js', () => {
    console.log('from useFull - sum a + b: ', a + b);
  });
});

console.log('useFull: end loadScript');


// 1:0