
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Update the time every 1s
setInterval(() => {
    // Get updated time values
    const now_ = new Date();
    const h = now_.getHours();
    const m = now_.getMinutes();
    const s = now_.getSeconds();
    
    // Add leading zeros if necessary
    hour.textContent = `${h < 10 ? "0" : ""}${h} : `;
    minute.textContent = `${m < 10 ? "0" : ""}${m} : `;
    second.textContent = `${s < 10 ? "0" : ""}${s}s`;
}, 1000);