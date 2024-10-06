function timeString(time){
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minutes = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour}hrs ${minutes}min ${remainingSecond}sec ago`
  }
  
  //creat load categoriwes
  const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then((res) => res.json())
      .then((data) => displayCategories(data.categories))
      .catch((error) => console.log(error));
  };

//creat load Videos
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
      .then((res) => res.json())
      .then((data) => displayVideos(data.videos))
      .catch((error) => console.log(error));
  };
  

const remoeveActiveClass = () => {
  const buttons = document.getElementsByClassName("category-btn");
console.log(buttons);
for (let btn of buttons){
  btn.classList.remove("active")
}
}

//onclick function
const loadCategoryVideos = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    //active button functionallity
    .then((data) => {
      //remove active button from all
      remoeveActiveClass();
      const activeBtn = document.getElementById(`btn-${id}`)
      console.log(activeBtn)
      activeBtn.classList.add("active");
      displayVideos(data.category)
    })
    .catch((error) => console.log(error));

} 
