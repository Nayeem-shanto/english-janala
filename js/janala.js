console.log("File Connected");

const loadLessons =() =>{
fetch("https://openapi.programming-hero.com/api/levels/all")
.then(response => response.json())
.then(json => displayLessons(json.data));
}
/* 4 ta step e ekta jinish ke ui te display korte hoy 
    1. get the container and empty it.
    2. get into every lessons.
    3. create elements.
    4. append to the container
*/
const displayLessons =(lessons)=>{
 console.log(lessons);
const levelContainer = document.getElementById("level-container");
levelContainer.innerHTML= '';
for(let lesson of lessons){
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML=`
        <button class="btn btn-soft btn-primary">
                    <i class="fa-solid fa-book-open"></i>lessons -${lesson.level_no}
                  </button>
    
    `;
    levelContainer.append(btnDiv)
}
}
loadLessons();