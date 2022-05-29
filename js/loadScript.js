console.log('loadScript');

function loadScript(url, callback) {

  /**
   * запись
   * document.createElement('script')
   *
   * создаст в HTML:
   * <script src="js/NAME.js"></script>
   */
  const script = document.createElement('script');
  script.src = url;

  /**
   * Событие load на объекте наступает, когда загрузилась весь созданный
   * нами script. А как только он загрузится, то мы исполним наш callback
   */
  script.onload = callback;

  /**
   * appendChild позволяет вставить в конец какого-либо другой элемент.
   * Чаще всего используется после создания элемента с помощью createElement.
   */
  document.body.appendChild(script);
}
