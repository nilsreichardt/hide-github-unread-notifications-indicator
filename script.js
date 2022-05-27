// The HTML element looks like "<span class="mail-status unread "
// data-target="notification-indicator.modifier"></span>". We search by the
// class names.
const matches = document.getElementsByClassName('mail-status unread');
for (const element of matches) {
    // Removing the unread notifications indicator from the DOM.
    element.remove();
}