featuresBtns = document.querySelectorAll('.features-btn'),
featuresSlides = document.querySelectorAll('.features-slide'),
questions = document.querySelectorAll('.ques-box'),
arrowIcons = document.querySelectorAll('.arrow-down'),
answers = document.querySelectorAll('.answer'),


questions.forEach((question, idx)=>{
    question.addEventListener('click',()=>{
        arrowIcons.forEach(icon=>{
            icon.style.color = 'hsl(231, 69%, 60%)';
            icon.style.transform = 'rotate(0deg)';
        });
        answers.forEach(answer=>{
            answer.classList.add('none');
        });

        arrowIcons[idx].style.transform = 'rotate(180deg)';
        arrowIcons[idx].style.color = 'hsl(0, 94%, 66%)';
        answers[idx].classList.remove('none');
    })
})




featuresBtns.forEach((btn, idx)=>{
    btn.addEventListener('click',()=>{
        featuresBtns.forEach(btn=>{
            btn.style.color='hsl(229, 8%, 60%)';
            btn.style.borderBottom ='none';
        })
        btn.style.color = 'hsl(229, 31%, 21%)';
        btn.style.borderBottom = '4px solid hsl(0, 94%, 66%)';
        featuresSlides.forEach(slide=>{
            slide.classList.add('none');
        })
        featuresSlides[idx].classList.remove('none');
    })
})




