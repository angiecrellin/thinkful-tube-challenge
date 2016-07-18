$(function() {



    $('#search-term').submit(function(event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);


    });
})

function getRequest(searchTerm) {
    var params = {
        part: 'snippet',
        key: 'AIzaSyB4If-jQpW3i0FrdasSSE9vhQyenqmHVhI',
        q: searchTerm,
        r: 'json',
        maxResults: 10

    };
    url = 'https://www.googleapis.com/youtube/v3/search';

    $.getJSON(url, params, function(data) {

        console.log(data);

        showResults(data.items);

    });
}

function showResults(results) {
    var html = "";
    $.each(results, function(index, value) {
        html += '<img src = "' + value.snippet.thumbnails.default.url + '" />';
        html += '<p>' + value.snippet.title + '</p>';
        html += '<a href=>'
        console.log(value.snippet.title);





    });
    $('#search-results').html(html);

}
