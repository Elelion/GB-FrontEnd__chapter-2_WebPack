Для запуска сервера:
npx serve

---

1. Реализуйте таймер. Включите в него общую кодовую базу с калькулятором дат, 
реализованным в этом уроке. Вложите его в тот же index.html, что и калькулятор 
дат, реализовав код переключения между разделами страницы.
   a. Вынесите код переключения между разделами (таймер/калькулятор дат) в отдельный модуль.
   b. Вынесите общие функции обоих разделов в отдельный модуль.
   c. Включите в таймер поле для установки времени и кнопки «Старт», «Стоп».
   d. Для обновления времени на странице используйте setInterval().
   e. Добавьте звуковое сопровождение, когда время заканчивается. Для работы со звуком
   воспользуйтесь сторонней библиотекой, например, Howler.js.
   f. Не используйте другие сторонние библиотеки.
2. (*) В качестве эксперимента доработайте нашу функцию loadScript a. Её аргументы:
   i. Первый аргумент: коллбек или строка с url до файла или массив с url до файлов зависимостей;
   ii. Второй аргумент: необязательный коллбек (только если первый аргумент строка или массив)
   b. Её задачи:
   ● обнаруживать повторно запрашиваемые зависимости и не загружать их:
   ситуация, когда модуль А зависит от В, и С зависит от В.
   ● Подумайте, как реализовать вызов callback модуля А после того, как
   разрешатся все зависимости модуля В, и отработает его callback. Попробуйте 
реализовать логику работы функции define из системы модулей AMD (RequireJS).
