let articles = document.querySelector(".Featured-works__articles")
let article = document.querySelectorAll(".Featured-works__article")
let leftArrow = document.querySelector('.arrow-left')
let rightArrow = document.querySelector('.arrow-right')

// window.addEventListener('resize',addSlider)

 function addSlider(){
    
    let innerWidth = window.innerWidth;
    let articlesSize = articles.offsetWidth;
    console.log(innerWidth);
    let count=0
     if(innerWidth<700){
        leftArrow.classList.add('icon-arrow-left')
        rightArrow.classList.add('icon-arrow-right')
        articles.style.display = 'flex'
        articles.style.width = innerWidth*article.length+'px'
        article.forEach(item=>item.style.width=articlesSize/article.length+'px')
        
        console.log(article[0].style.width , articles.offsetWidth);
        articles.style.overflow = 'hidden'
        rightArrow.addEventListener('click',function(){
           console.log('нажал');
           if(count<article.length){count++
         articles.style.transform = 'translate(-'+count*innerWidth+'px)'
           }else{
              count=0
              articles.style.transform = 'translate(-'+count*innerWidth+'px)'
           }
        })
     }else{
      leftArrow.classList.remove('icon-arrow-left')
      rightArrow.classList.remove('icon-arrow-right')
        articles.style.display = 'block'
     }
   }
 
