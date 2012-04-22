
function nextArticle(articles){
    if(articles.length == 0) return(null);

    var date = new Date();
    return(articles[date.getMinutes() % articles.length]);
}
