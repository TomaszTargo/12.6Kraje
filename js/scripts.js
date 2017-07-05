var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';

    $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<h1>').text(item.name).appendTo(countriesList);
        $('<li>').text(item.altSpellings[2]).appendTo(countriesList);
        $('<li>').text(item.capital).appendTo(countriesList);
        $('<li>').text(item.population).appendTo(countriesList);
    });    
}