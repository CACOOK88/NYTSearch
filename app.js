// click function for search
$('#add-articles').on('click', function(e) {
    e.preventDefault();
    console.log("clicked");

    var search = $('#search-input').val();
    var recordNumber = $('#number-input').val();
    var startYear = $('#start-input');
    var endYear = $('#end-year');
    console.log(recordNumber);


    // key 6a8fa4e71f6a42288de758a939bcd3f5
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ search +'&api-key=6a8fa4e71f6a42288de758a939bcd3f5'
    'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+search+'&begin_date='+startYear+'0101&end_date='+endYear+'0101&api-key=6a8fa4e71f6a42288de758a939bcd3f5'


    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response);
        var results = response.response.docs;
        console.log(results);

        for ( var i = 0; i < recordNumber; i++) {
            var articleDiv = $('<div>').addClass('card');
            var articleHeader = $('<div>').addClass('card-header') 
            var articleSummary = $('<div>').addClass('card-body')

            articleHeader.text(results[i].headline.print_headline);
            articleSummary.text(results[i].snippet);
            articleDiv.append(articleHeader, articleSummary);
            $('.articles').append(articleDiv);
        }
    })


});

$('#clear-results').on('click', function() {
    $('.articles').empty();
})
