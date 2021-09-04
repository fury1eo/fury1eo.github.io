const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.using__skill-percent'),
      lines = document.querySelectorAll('.using__skill-bar span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


$(document).ready(function(){
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                email: "required",
                check: "required",
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                email: {
                    required: "Пожалуйста, введите свой E-mail",
                    email: "Неправильно введен адрес почты",
                },
                check: "Подтвердите свое согласие",
            },
        });
    };

    validateForms("#cont-form");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });
});
