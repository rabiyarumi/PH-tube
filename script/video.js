




// card demo
// const cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaag",
//     "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
//     "title": "Sunrise Reverie",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
//             "profile_name": "Ava Johnson",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "16950"
//     },
//     "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
// }


//video functionallity




//creat video catagories
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML= "";
  //condition for empty catagories
  if(videos.length == 0){
    videoContainer.classList.remove("grid")
    videoContainer.innerHTML= `
    <div class= "min-h-[300px] flex flex-col gap-5 justify-center items-center ">
      <img src="./asset/Icon.png" >
      <p class=" text-2xl text-black font-bold text-center "> Oops!! Sorry, There is no content here  </p>
    </div>
    `
    return;
  }
  else{
    videoContainer.classList.add("grid")
  }

  //loop for cards
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact"
    card.innerHTML = `
    <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class=" h-full w-full object-cover" />

      ${video.others.posted_date?.length == 0 ? "" : `<span class=" absolute bottom-2 right-2 bg-black text-white text-sm rounded px-2 ">${timeString(video.others.posted_date)}</span>`}
      
  </figure>
  <div class="px-0 py-2 flex gap-3">
    <div class="">
    <img 
    class="h-10 w-10 rounded-full object-cover"
    src="${video.authors[0].profile_picture}" 
    />
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class=" flex gap-2 items-center">
    <p class="text-sm text-gray-500">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified === true ? `<img
    class="w-5 h-5"
    src=" https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png " />` : '' }
    </div>
    <p class="text-sm text-gray-500">${video.others.views}</p>
    </div>
  </div>
        `;
    videoContainer.appendChild(card)
  });
};




//creat display categoriwes
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    // console.log(item)

    //creat a button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button id="btn-${item.category_id}" class= " btn category-btn" onclick="loadCategoryVideos(${item.category_id})">
    ${item.category}
    </button>
    `

    //add button to catagory container
    categoryContainer.append(buttonContainer);
  });
};
loadCategories();
loadVideos();
// displayCategories()
