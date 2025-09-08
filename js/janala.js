console.log("File Connected");

const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((json) => displayLessons(json.data));
};
/* 4 ta step e ekta jinish ke ui te display korte hoy 
    1. get the container and empty it.
    2. get into every lessons.
    3. create elements.
    4. append to the container
*/
const displayLessons = (lessons) => {
  console.log(lessons);
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button onclick="loadWord(${lesson.level_no})" class="btn btn-soft btn-primary">
                    <i class="fa-solid fa-book-open"></i>lessons -${lesson.level_no}
                  </button>
    
    `;
    levelContainer.append(btnDiv);
  }
};
loadLessons();

const loadWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  // console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((json) => displayWords(json.data));
};

const displayWords = (words) => {
  /* get the container and make it empty */
  const wordContainer = document.getElementById("word-container");
  console.log(wordContainer);
  wordContainer.innerHTML = "";

  if(words.length ===0){
    wordContainer.innerHTML = `
    <div class="default-text text-center bg-white col-span-full py-5 rounded-2xl">
    <img class="mx-auto" src="./assets/alert-error.png" alt="">
    <h3 class="font-bangla font-semibold">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h3>
    <h1 class="font-bangla font-bold text-2xl">নেক্সট Lesson এ যান</h1>
  </div>
    
    `;
    return;
  }

  /* loop chalaite hobe shob gula item ke pawar jonno */
  /*   for(let word of words){
        console.log(word);
        
    } */

  words.forEach((word) => {
    console.log(word);
    /* ekta new element create korte hobe.. */
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
   <div class="word-card bg-white py-15 px-5 space-y-4 text-center rounded-2xl shadow-md">
        <h2 class="font-bold text-3xl">${word.word ? word.word: "word not found"}</h2>
        <p class="font-bangla font-semibold text-xl">Meaning /Pronounciation</p>
        <h2 class="font-semibold text-xl">${word.meaning ? word.meaning:"meaning not found"}/${word.pronunciation? word.pronunciation:"Pronounciation not found"}</h2>

        <div class="word-card-btn flex justify-between px-5 ">
          <button class="bg-[#1A91FF10] hover:bg-[#1A91FF80] p-5"><i class="fa-solid fa-circle-info"></i></button>
          <button class="bg-[#1A91FF10] hover:bg-[#1A91FF80] p-5" ><i class="fa-solid fa-volume-high "></i></button>
        </div>
      </div>
   `;
    /* container er kase append korbo */
    wordContainer.append(newDiv);
  });
};
