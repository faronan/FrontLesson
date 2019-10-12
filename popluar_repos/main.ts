function onSearch() {
    const inputKeyword = document.getElementById('inputKeyword') as HTMLInputElement;
    const content = document.getElementById('resultContent') as HTMLInputElement;
    const url = 'https://api.github.com/search/repositories?q=' + inputKeyword.value + '&sort=stars&order=desc';
    const request = new XMLHttpRequest();

    request.open('GET', url);
    request.responseType = 'json';

    request.onload = function() {
        content.innerHTML = '';
        for (const index in request.response.items) {
            const item = request.response.items[index];
            const div = document.createElement('div');
            const lang = `[${item.language || 'note'}]`;
            const title = item.full_name;
            const link = `<a href=${item.html_url}>${item.html_url}</a>`;
            div.innerHTML = (Number(index) + 1) + '.' + lang + title + link
            content.appendChild(div);
        }
    }
    request.send();
}