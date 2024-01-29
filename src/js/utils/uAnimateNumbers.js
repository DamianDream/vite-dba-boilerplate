
// TODO: check numbers animation function
// https://www.traffbraza.com/

// набегающие цифры
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
      
    let nums = document.querySelectorAll(".num-anim");
      let preloadNum = document.querySelector(".num-preload");
      animateValue(preloadNum, 0, 100, 1000);
    
      setInterval(animate, 100)
    
    function inView(elem) {
      var elementHeight = elem.clientHeight;
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      var scrollPosition = scrollY + windowHeight;
      var elementPosition = elem.getBoundingClientRect().top + scrollY + elementHeight;
      if (scrollPosition > elementPosition) {
        return true;
      }
      return false;
    }
    function animate() {
      nums.forEach(elem => {
        if (inView(elem)) {
                animateValue(elem, 0, +(elem.textContent), 1000);
            elem.classList.remove("num-anim")
            nums = document.querySelectorAll(".num-anim");
        }
      })
    }
