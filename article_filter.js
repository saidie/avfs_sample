
var AVfS.VisitedArticles = [];
var AVfS.ArticleCacheLimit = 30;

function nextArticle(articles){
    if(articles.length == 0) return(null);

    for(var i = 0; i < articles.length; ++i){
        if(AVfS.VisitedArticles.indexOf(articles[i].id) == -1){
            AVfS.VisitedArticles.push(articles[i].article_id);

            // Discard old cache
            while(AVfS.VisitedArticles.length > AVfS.ArticleCacheLimit)
                AVfS.VisitedArticles.shift();

            return(articles[i]);
        }
    }
    // Clean cache
    AVfS.VisitedArticles = [articles[0].article_id];
    return(articles[0]);
}
