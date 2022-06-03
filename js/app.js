const selectR = document.getElementById('region');
const rd = document.getElementById('rd');
const selectd = document.getElementById('departement');
const dd = document.getElementById('dd')
let n=0
const nomd=['Ain','Allier','Ardèche','Calvados','Eure','Côte-d\'Or','Doubs','Jura']
selectR.addEventListener('change',()=>{
    rd.remove()
    if(n===0){
        selectd.disabled = !selectd.disabled;
        n++
    }
    dd.textContent='selectionnez un departement'
    dd.style.display='block'
    selectd.selectedIndex=0
    if(selectR.options[0].selected===true){
        selectd.options[1].textContent=nomd[0];
        selectd.options[1].value=nomd[0];
        selectd.options[2].textContent=nomd[1];
        selectd.options[2].value=nomd[1];
        selectd.options[3].textContent=nomd[2];
        selectd.options[3].value=nomd[2];
        selectd.options[3].style.display='block';
    }else if(selectR.options[1].selected===true){
        selectd.options[1].textContent=nomd[3];
        selectd.options[1].value=nomd[3];
        selectd.options[2].textContent=nomd[4];
        selectd.options[2].value=nomd[4];
        selectd.options[3].style.display='none';
        selectd.options[3].value='';
        selectd.options[3].textContent='';
    }
    else{
        selectd.options[1].textContent=nomd[5];
        selectd.options[1].value=nomd[5];
        selectd.options[2].textContent=nomd[6];
        selectd.options[2].value=nomd[6];
        selectd.options[3].textContent=nomd[7];
        selectd.options[3].value=nomd[7];
        selectd.options[3].style.display='block';
    }
})
selectd.addEventListener('change',()=>{
    dd.style.display='none'
})
