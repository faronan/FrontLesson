"use strict";
function onSearch() {
    var inputKeyword = document.getElementById('inputKeyword');
    var content = document.getElementById('resultContent');
    var url = 'https://api.github.com/search/repositories?q=' + inputKeyword.value + '&sort=stars&order=desc';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.onload = function () {
        content.innerHTML = '';
        for (var index in request.response.items) {
            var item = request.response.items[index];
            var div = document.createElement('div');
            var lang = "[" + (item.language || 'note') + "]";
            var title = item.full_name;
            var link = "<a href=" + item.html_url + ">" + item.html_url + "</a>";
            div.innerHTML = (Number(index) + 1) + '.' + lang + title + link;
            content.appendChild(div);
        }
    };
    request.send();
}
