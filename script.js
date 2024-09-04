const accordians=document.querySelectorAll('.accrordian')

accordians.forEach(accor=>{
    const icon= accor.querySelector('.accrordian__question__icon')
    const ans=accor.querySelector('.accrordian__answer')

  
    accor.addEventListener('click',(e)=>{
        accordians.forEach((single)=>{
            if(accor !== single){
                const icon= single.querySelector('.accrordian__question__icon')
                const ans=single.querySelector('.accrordian__answer')
                icon.classList.remove('active')
                ans.style.maxHeight='0';
            }
        })
        
        
            icon.classList.toggle('active')
            if(icon.classList.contains('active'))
            ans.style.maxHeight=ans.scrollHeight+'px';
            else {
            ans.style.maxHeight='0';
            }
        
        
    })
})