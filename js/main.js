$(document).ready(function () {
  $(".burger").on("click", function () {
    $(".burger").toggleClass("active");
    $("#header").toggleClass("active");
  });

  let prevScrollPos = window.scrollY;
  const $header = $("#header");

  $(window).on("scroll", function () {
    const currentScrollPos = window.scrollY;
    $header.css(
      "top",
      prevScrollPos > currentScrollPos || currentScrollPos === 0
        ? "0px"
        : "-205px"
    );
    $header.removeClass("active");
    $(".burger").removeClass("active");
    prevScrollPos = currentScrollPos;
  });

  const followCursor = () => {
    // объявляем функцию followCursor
    const el = document.querySelector(".follow-cursor"); // ищем элемент, который будет следовать за курсором

    window.addEventListener("mousemove", (e) => {
      // при движении курсора
      const target = e.target; // определяем, где находится курсор
      if (!target) return;

      if (target.closest("a")) {
        // если курсор наведён на ссылку
        el.classList.add("follow-cursor_active"); // элементу добавляем активный класс
      } else {
        // иначе
        el.classList.remove("follow-cursor_active"); // удаляем активный класс
      }

      el.style.left = e.pageX + "px"; // задаём элементу позиционирование слева
      el.style.top = e.pageY + "px"; // задаём элементу позиционирование сверху
    });
  };

  followCursor();
});
