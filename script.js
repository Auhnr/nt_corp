document.querySelector('#language-selector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    const notification = document.createElement('div');
    notification.className = 'language-notification';

    if (selectedLanguage === 'ru') {
        document.documentElement.lang = 'ru';
        notification.textContent = 'Язык изменён на русский.';
    } else if (selectedLanguage === 'en') {
        document.documentElement.lang = 'en';
        notification.textContent = 'Language changed to English.';
    }

    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
});
