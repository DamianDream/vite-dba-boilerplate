// TODO: check telegrap validation and refactor

$('input[id="telegram"]').on('input', function() {
    var input = $(this);
    var value = input.val();

    // Видаляємо всі символи, крім літер, цифр, символа нижнього підкреслення та собачки
    value = value.replace(/[^A-Za-z0-9_@а-яА-ЯёЁіІїЇєЄ]/g, '');

    // Додаємо собачку, якщо перший символ не собачка
    if (value.charAt(0) !== '@') {
      value = '@' + value;
    }

    // Обмежуємо введення лише літерами, цифрами та символом нижнього підкреслення після собачки
    var atIndex = value.indexOf('@');
    if (atIndex !== -1) {
      var nickname = value.substring(atIndex + 1);
      nickname = nickname.replace(/[^A-Za-z0-9_а-яА-ЯёЁіІїЇєЄ]/g, '');
      value = value.substring(0, atIndex + 1) + nickname;
    }

    // Оновлюємо значення поля введення
    input.val(value);

    // Відновлюємо плейсхолдер, якщо поле введення порожнє
    if (value.trim().length === 0) {
      input.attr('placeholder', 'Введіть нікнейм');
    }
  });

  $('input[id="telegram"]').on('keydown', function(e) {
    var keyCode = e.keyCode || e.which;

    // Видаляємо собачку разом з вмістом поля при використанні клавіші "Delete" або "Backspace"
    if (keyCode === 8 || keyCode === 46) {
      var input = $(this);
      var value = input.val();

      if (value.charAt(0) === '@') {
        value = value.substring(1);
      }

      input.val(value);
    }
  });
