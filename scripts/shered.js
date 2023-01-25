const backdrop=document.querySelector('.backdrop');
const modal=document.querySelector('.modal');
console.log(backdrop);
/*backdrop.style.display="block";*/
const selectPlanBtn=document.querySelectorAll('.paln button');
console.log(selectPlanBtn)
for(i=0;i<selectPlanBtn.length;i++){
    selectPlanBtn[i].addEventListener('click',()=>{
        backdrop.style.display="block";
        modal.style.display="block";

    })    


}