var fadeInInterval, fadeOutInterval;

const fadeOut = (element, timing = 7) => {

    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);

    element.fadeOut = timing => {
        var newValue = 1;
        element.style.opacity = 1;

        fadeOutInterval = setInterval(() => {

            if (newValue > 0) {
                newValue -= 0.01;
            } else if (newValue < 0) {
                element.style.opacity = 0;
                element.style.display = 'none';
                clearInterval(fadeOutInterval);
            }

            element.style.opacity = newValue;

        }, timing);

    }

    element.fadeOut(timing);
}

const fadeIn = (element, timing = 7) => {

    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);

    element.fadeIn = timing => {
        var newValue = 0;

        element.style.display = 'flex';
        element.style.opacity = 0;

        fadeInInterval = setInterval(() => {

            if (newValue < 1) {
                newValue += 0.01;
            } else if (newValue === 1) {
                clearInterval(fadeInInterval);
            }

            element.style.opacity = newValue;

        }, timing);

    }

    element.fadeIn(timing);
}