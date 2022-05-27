const matches = document.getElementsByClassName('mail-status unread');
if (matches.length != 0) {
    for (const element of matches) {
        element.remove();
    }
}