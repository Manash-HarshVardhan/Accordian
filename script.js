const accordians=document.querySelectorAll('.accrordian')

accordians.forEach(accor=>{
    const icon= accor.querySelector('.accrordian__firstpart__icon')
    const ans=accor.querySelector('.accrordian__secpart')

  
    accor.addEventListener('click',(e)=>{
        accordians.forEach((single)=>{
            if(accor !== single){
                const icon= single.querySelector('.accrordian__firstpart__icon')
                const ans=single.querySelector('.accrordian__secpart')
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