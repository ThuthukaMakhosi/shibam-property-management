function changeStatusColor(select) {
    select.className = "status-dropdown " + select.value;
}

window.onload = function() {
    document.querySelectorAll(".status-dropdown").forEach(function(select) {
        changeStatusColor(select);
    });
};