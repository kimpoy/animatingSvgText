  //for the svg
  let textPath = document.querySelector('#text-path');
        
  function updateTextPathOffset(offset){
      textPath.setAttribute('startOffset', offset)
  }

  function onScroll(){
      requestAnimationFrame(function(){
          updateTextPathOffset(window.scrollY * 1)
      })
  }

  window.addEventListener('scroll', onScroll);


  // for h1 items
  //getting the class of items we want to animate
  const title = document.querySelectorAll('.anim');


  //IntersectionObserver observes the changes in the intersection so that we can manipulate that data and animate some elements
  observer = new IntersectionObserver(entries => {
      
      for(let entry of entries){
          if(entry.isIntersecting == true){
              entry.target.classList.add('animate');
          
          }
          else{
              entry.target.classList.remove('animate');
          }
          //we can also use this
          // if(entry.intersectionRatio > 0){
          //     entry.target.style.animation = `reveal 1s forwards`;
          // }
          // else{
          //     entry.target.style.animation = 'none';
          // }
      }
  });

  for(let i of title){
      observer.observe(i);
  }
