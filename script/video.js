console.log('skjjifihijfijsodjfoli')

//creat load categoriwes
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
}

//creat display categoriwes
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach((item) => {
        console.log(item)

        //creat a button
        const button = document.createElement('button');
        button.classList = "btn bg-red-500 text-white text-lg";
        button.innerText = item.category;

        //add button to catagory container
        categoryContainer.append(button)
    })
}
loadCategories()
displayCategories()