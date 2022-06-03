const selectR = document.getElementById('region');
const rd = document.getElementById('rd');
const selectd = document.getElementById('departement');
const dd = document.getElementById('dd')
let n=0
const nomd=[]
selectR.addEventListener('change',()=>{
    rd.remove()
    if(n===0){
        selectd.disabled = !selectd.disabled;
        n++
    }
    dd.textContent='selectionnez un departement'
    if(selectR.options[0].selected===true){
        
    }
})