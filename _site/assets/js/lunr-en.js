var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Getting Started",
      excerpt: "Machine Learning: Use data to compute hypothesis g that appromimates target f Data Mining: Use (huge) data to find property...",
      categories: ["ML"],
      tags: ["AI","machine learning","deep learning"],
      id: 0
    });
    
  
    idx.add({
      title: "Machine Learning Project Checklist",
      excerpt: "Frame the problem and look at the big picture. Get the data. Explore the data to gain insights. Prepare the...",
      categories: ["ML"],
      tags: ["AI","machine learning","deep learning"],
      id: 1
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Getting Started",
        "url": "http://172.17.4.236:4000/techpubs/ml/Getting_Started/",
        "excerpt": "Machine Learning: Use data to compute hypothesis g that appromimates target f Data Mining: Use (huge) data to find property...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Machine Learning Project Checklist",
        "url": "http://172.17.4.236:4000/techpubs/ml/MLPC/",
        "excerpt": "Frame the problem and look at the big picture. Get the data. Explore the data to gain insights. Prepare the...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
