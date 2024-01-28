// questions section

const questions = document.querySelectorAll('.question');


questions.forEach(question => {
    question.addEventListener('click', function() {
  
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {

            questions.forEach(q => {
                if (q !== question) {
                    const otherAnswer = q.nextElementSibling;
                    otherAnswer.style.display = 'none';
                    q.querySelector('.arrowDown').style.display = 'block';
                    q.querySelector('.arrowUp').style.display = 'none';
                }
            });

            answer.style.display = 'block';
        }

        const arrowDown = this.querySelector('.arrowDown');
        const arrowUp = this.querySelector('.arrowUp');

        if (arrowDown.style.display === 'block' || arrowDown.style.display === '') {
            arrowDown.style.display = 'none';
            arrowUp.style.display = 'block';
        } else {
            arrowDown.style.display = 'block';
            arrowUp.style.display = 'none';
        }
    });
});

//  carousel 

document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML(
        "beforeend",
        `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
        </div>
    `
    );

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            activateCarouselItem(i);
        });
    });

    carousel.querySelector(".prev-arrow-button").addEventListener("click", () => {
        const currentIndex = getCurrentIndex();
        const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        activateCarouselItem(newIndex);
    });

    carousel.querySelector(".next-arrow-button").addEventListener("click", () => {
        const currentIndex = getCurrentIndex();
        const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
        activateCarouselItem(newIndex);
    });

   
    function activateCarouselItem(index) {
        items.forEach((item) =>
            item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
            button.classList.remove("carousel__button--selected")
        );

        items[index].classList.add("carousel__item--selected");
        buttons[index].classList.add("carousel__button--selected");
    }

    
    function getCurrentIndex() {
        return Array.from(items).findIndex((item) =>
            item.classList.contains("carousel__item--selected")
        );
    }
    
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
    setInterval(() => {
        const currentIndex = getCurrentIndex();
        const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
        activateCarouselItem(newIndex);
      }, 5000);
});

// header-scroll
    window.addEventListener('scroll', function () {
        var header = document.querySelector('.header');
        var scrollPosition = window.scrollY;

        var scrollThreshold = 100;

        
        if (scrollPosition > scrollThreshold) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
    });

    // navbar

    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    const toggleButton = document.querySelector(".toggle-button");
    const firstBar = document.querySelector(".first-bar");
    const secondBar = document.querySelector(".second-bar");
    const thirdBar = document.querySelector(".third-bar");
    
    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
    
    document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle-button");
      const firstBar = document.querySelector(".first-bar");
      const thirdBar = document.querySelector(".third-bar");
    
      let isOpen = false;
    
      toggleButton.addEventListener("click", function () {
        isOpen = !isOpen;
    
        if (isOpen) {
          secondBar.style.transform = "rotate(-45deg)";
          firstBar.style.width = "50%";
          thirdBar.style.width = "50%";
          firstBar.style.transform = "translateY(50%) translateX(0) rotate(225deg)";
          thirdBar.style.marginBottom = "8px";
          thirdBar.style.transform =
            "translateY(-50%) translateX(0) rotate(225deg)";
        } else {
          thirdBar.style.marginBottom = "0px";
          secondBar.style.transform = "rotate(0)";
          firstBar.style.width = "50%";
          thirdBar.style.width = "50%";
          firstBar.style.transform = "translateY(0) translateX(0) rotate(0)";
          thirdBar.style.transform = "translateY(0) translateX(0) rotate(0)";
        }
      });
    });

