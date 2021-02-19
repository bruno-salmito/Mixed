/* Script JS  */
const alertBtn = document.querySelectorAll(".alert-btn");

alertBtn.forEach(function (btn) {
    //Click button
    btn.addEventListener("click", function () {
        const target = this.getAttribute("data-target");
        const alertBox = document.getElementById(target);
        alertBox.classList.add("show");
        const closeAlert = alertBox.querySelector(".close-alert");

        // Close box
        closeAlert.addEventListener("click", function () {
            alertBox.classList.remove("show");
        })

        // Hide Box when clicked outside of box
        alertBox.addEventListener("click", function (e) {
            if (e.target === this) {
                alertBox.classList.remove("show");
            }
        })
    })
})