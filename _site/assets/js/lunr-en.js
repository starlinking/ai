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
    
  
    idx.add({
      title: "AI Deep Learning Frameworks",
      excerpt: "Framework GitHub Stars (12/26/17) Supporter TensorFlow 83,495 Google CNTK 13,451 Microsoft MXNET 12,531 Amazon Pytorch 10,547 Facebook Caffe2 6,620 Facebook...",
      categories: ["DL"],
      tags: ["AI","machine learning","deep learning"],
      id: 2
    });
    
  
    idx.add({
      title: "Linux Distributions",
      excerpt: "CentOS/RHEL-based Distribution Description RHEL Red Hat Linux for commercial market CentOS A free, enterprise-class, community-supported distro. Scientific Linux Co-developed by...",
      categories: ["Linux"],
      tags: ["CentOS/RHEL-based","Debian-based"],
      id: 3
    });
    
  
    idx.add({
      title: "Debian-based",
      excerpt: "File Systems\n\nPackage Management\n\nSystem Configuration\n\nNetwork Configuration\n\nSystem Monitoring\n\nKernel and Driver Configuration\n\nSecurity and Authentication\n\n\n\n\n  分享上述Linux指令，其有助於提升實務上的工作效率。\n\n\n\n\n",
      categories: ["Linux"],
      tags: ["Debian-based"],
      id: 4
    });
    
  
    idx.add({
      title: "CentOS/RHEL-based",
      excerpt: "File Systems ###https://goo.gl/vhW1xD / ├── bin user binaries ├── boot boot loader files ├── dev device files ├── etc configuration...",
      categories: ["Linux"],
      tags: ["CentOS/RHEL-based"],
      id: 5
    });
    
  
    idx.add({
      title: "Useful Open Source Tools",
      excerpt: "Windows Descriptions Rufus Create bootable USB drives the easy way Linux Descriptions ooooo Create bootable USB drives the easy way...",
      categories: ["Utilities"],
      tags: ["Windows","Linux","Mac"],
      id: 6
    });
    
  
    idx.add({
      title: "Best Practices for KVM",
      excerpt: "KVM Learn about the best practices for Kernel-based Virtual Machine (KVM), including device virtualization for guest operating systems, over-committing processor...",
      categories: ["KVM"],
      tags: ["Linux"],
      id: 7
    });
    
  
    idx.add({
      title: "Prerequisites to start Machine Learning",
      excerpt: "Prerequisites In general, it would be very helpful to speed up your exploration if you have good bases at programming...",
      categories: ["ML"],
      tags: ["ML","Programming","Linear Algebra","Statistics","Probability"],
      id: 8
    });
    
  
    idx.add({
      title: "Quick Connect for Serial and SSH",
      excerpt: "To create a simple select menu for quick connect serial devices and SSH Over the NET. Bash Shell Scripting ###...",
      categories: ["Code"],
      tags: ["Programming","Bash","Python"],
      id: 9
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Getting Started",
        "url": "http://172.17.5.42:4000/techpubs/ml/Getting_Started/",
        "excerpt": "Machine Learning: Use data to compute hypothesis g that appromimates target f Data Mining: Use (huge) data to find property...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Machine Learning Project Checklist",
        "url": "http://172.17.5.42:4000/techpubs/ml/MLPC/",
        "excerpt": "Frame the problem and look at the big picture. Get the data. Explore the data to gain insights. Prepare the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "AI Deep Learning Frameworks",
        "url": "http://172.17.5.42:4000/techpubs/dl/Frameworks/",
        "excerpt": "Framework GitHub Stars (12/26/17) Supporter TensorFlow 83,495 Google CNTK 13,451 Microsoft MXNET 12,531 Amazon Pytorch 10,547 Facebook Caffe2 6,620 Facebook...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Linux Distributions",
        "url": "http://172.17.5.42:4000/techpubs/linux/Linux/",
        "excerpt": "CentOS/RHEL-based Distribution Description RHEL Red Hat Linux for commercial market CentOS A free, enterprise-class, community-supported distro. Scientific Linux Co-developed by...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Debian-based",
        "url": "http://172.17.5.42:4000/techpubs/linux/Debian-Like/",
        "excerpt": "File Systems\n\nPackage Management\n\nSystem Configuration\n\nNetwork Configuration\n\nSystem Monitoring\n\nKernel and Driver Configuration\n\nSecurity and Authentication\n\n\n\n\n  分享上述Linux指令，其有助於提升實務上的工作效率。\n\n\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CentOS/RHEL-based",
        "url": "http://172.17.5.42:4000/techpubs/linux/RedHat-Like/",
        "excerpt": "File Systems ###https://goo.gl/vhW1xD / ├── bin user binaries ├── boot boot loader files ├── dev device files ├── etc configuration...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Useful Open Source Tools",
        "url": "http://172.17.5.42:4000/techpubs/utilities/Tools/",
        "excerpt": "Windows Descriptions Rufus Create bootable USB drives the easy way Linux Descriptions ooooo Create bootable USB drives the easy way...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Best Practices for KVM",
        "url": "http://172.17.5.42:4000/techpubs/kvm/KVM/",
        "excerpt": "KVM Learn about the best practices for Kernel-based Virtual Machine (KVM), including device virtualization for guest operating systems, over-committing processor...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Prerequisites to start Machine Learning",
        "url": "http://172.17.5.42:4000/techpubs/ml/Prerequisites4ML/",
        "excerpt": "Prerequisites In general, it would be very helpful to speed up your exploration if you have good bases at programming...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Quick Connect for Serial and SSH",
        "url": "http://172.17.5.42:4000/techpubs/code/QConnect/",
        "excerpt": "To create a simple select menu for quick connect serial devices and SSH Over the NET. Bash Shell Scripting ###...",
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
