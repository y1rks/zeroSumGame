let interval;

function setButtonState() {
    const buttons = document.getElementsByName("button");

    let onCount = 0;
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            onCount++;
        }
    }

    if (onCount >= 15) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].checked = false;
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            for (let c = 0; c < 20; c++) {
                const randVal = Math.round(Math.random() * (buttons.length - 1));
                if (!buttons[randVal].checked) {
                    buttons[randVal].checked = true;
                    buttons[i].checked = false;
                    break;
                }
            }
        }
	}
}


document.addEventListener('DOMContentLoaded', function() {
    interval = setInterval(setButtonState, 1200);

    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].checked = true;
    // }
});