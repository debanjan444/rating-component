let array = document.querySelectorAll(".rating-button");
for(var i = 0;i < array.length;i++){
  let target = document.querySelectorAll(".rating-button")[i];
  target.addEventListener("click",function(){
    let object = this.innerHTML;
  document.querySelector(".chosen-rating").innerHTML = object;
  })
}
let target = document.querySelector(".submit-btn");
target.addEventListener("click",function(){
document.querySelector(".container1").style.display = "block";
})
