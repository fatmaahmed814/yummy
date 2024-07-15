
/*function openSideNav() {
    $(".sidenav").animate({
        left: 0
    }, 500)


    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");


    for (let i = 0; i < 5; i++) {
        $(".link li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}

function closeSideNav() {
    let boxWidth = $(".sidenav .navtabs").outerWidth()
    $(".sidenav").animate({
        left: -boxWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".link li").animate({
        top: 300
    }, 500)
}

closeSideNav()
$(".sidenav i.open-close-icon").click(() => {
    if ($(".sidenav").css("left") == "0px") {
        closeSideNav()
    } else {
        openSideNav()
    }
})


async function searchMeal(meal){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    response = await response.json()
    console.log(response.meals);
    ShowMeals(response.meals);
    
}

function ShowMeals(aa){
    let cartoona="";
    for(let i=0; i < aa.length; i++)
        cartoona+=`
        <div class="col-md-3">
            <div class="meals-img position-relative overflow-hidden">
                <img class="w-100" src="${aa[i].strMealThumb}" alt="">
                <div class="meals-hover position-absolute d-flex align-items-center">
                    <h4>${aa[i]. strMeal}</h4>
                </div>
            </div>
        </div>
        `
        ImgData.innerHTML=cartoona
}
searchByMeal("")
*/

let ImgData = document.getElementById("ImgData");
let SearchInputs = document.getElementById("SearchInputs");
let submitBtn;

$(document).ready(() =>{
    searchName("").then(() => {
        $(".loading-screen").fadeOut(500)
        $("body").css("overflow", "visible")

    })
})

function openSideNav() {
    $(".sidenav").animate({
        left: 0
    }, 700)


    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");


    for (let i = 0; i < 5; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}

function closeSideNav() {
    let boxWidth = $(".sidenav .navtabs").outerWidth()
    $(".sidenav").animate({
        left: -boxWidth
    }, 700)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 500)
}

closeSideNav()
$(".sidenav i.open-close-icon").click(() => {
    if ($(".sidenav").css("left") == "0px") {
        closeSideNav()
    } else {
        openSideNav()
    }
})




function ShowMeals(aa) {
    let cartoona = "";

    for(let i = 0; i < aa.length; i++){
        cartoona += `
        <div class="col-md-3">
                <div onclick="getDetails('${aa[i].idMeal}')" class="meals-img position-relative overflow-hidden rounded-3 cursor-pointer">
                    <img class="w-100" src="${aa[i].strMealThumb}" alt="" srcset="">
                    <div class=" meals-hover position-absolute d-flex align-items-center text-black p-3">
                        <h4>${aa[i].strMeal}</h4>
                    </div>
                </div>
        </div>
        `
    }

    ImgData.innerHTML = cartoona
}



async function ShowCategories () {
    ImgData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)
    SearchInputs.innerHTML = "";

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json()

    FirstCategories(response.categories)
    $(".inner-loading-screen").fadeOut(300)

}

function FirstCategories(aa) {
    let cartoona = "";

    for(let i = 0; i < aa.length; i++){
        cartoona += `
        <div class="col-md-3">
                <div onclick="getCategory('${aa[i].strCategory}')" class="meals-img position-relative overflow-hidden rounded-3 cursor-pointer">
                    <img class="w-100" src="${aa[i].strCategoryThumb}" alt="" srcset="">
                    <div class="meals-hover position-absolute text-center text-black p-3">
                        <h4>${aa[i].strCategory}</h4>
                        <p>${aa[i].strCategoryDescription.split(" ").slice(0,15).join(" ")}</p>
                    </div>
                </div>
        </div>
        `
    }

    ImgData.innerHTML = cartoona
}


async function ShowArea() {
    ImgData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    SearchInputs.innerHTML = "";

    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    respone = await respone.json()
    console.log(respone.meals);

    FirstArea(respone.meals)
    $(".inner-loading-screen").fadeOut(300)

}


function FirstArea(aa) {
    let cartoona = "";

    for(let i = 0; i < aa.length; i++){
        cartoona += `
        <div class="col-md-3">
                <div onclick="getArea('${aa[i].strArea}')" class="rounded-4 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h4>${aa[i].strArea}</h4>
                </div>
        </div>
        `
    }

    ImgData.innerHTML = cartoona
}


async function ShowIngredients() {
    ImgData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    SearchInputs.innerHTML = "";

    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    respone = await respone.json()
    console.log(respone.meals);

    FirstIngredients(respone.meals.slice(0, 15))
    $(".inner-loading-screen").fadeOut(300)

}


function FirstIngredients(aa) {
    let cartoona = "";

for(let i = 0; i < aa.length; i++){
        cartoona += `
        <div class="col-md-3">
                <div onclick="getMeals('${aa[i].strIngredient}')" class="rounded-4 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h4>${aa[i].strIngredient}</h4>
                        <p>${aa[i].strDescription.split(" ").slice(0,15).join(" ")}</p>
                </div>
        </div>
        `
    }

    ImgData.innerHTML = cartoona
}


async function getCategory(aa) {
    ImgData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${aa}`)
    response = await response.json()


   ShowMeals(response.meals.slice(0, 15))
    $(".inner-loading-screen").fadeOut(300)

}



async function getArea(aa) {
    ImgData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${aa}`)
    response = await response.json()


    ShowMeals(response.meals.slice(0, 15))
    $(".inner-loading-screen").fadeOut(300)

}


async function getMeals(ingredients) {
    ImgData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    response = await response.json()


    ShowMeals(response.meals.slice(0, 15))
    $(".inner-loading-screen").fadeOut(300)

}

async function getDetails(mealID) {
    closeSideNav()
    ImgData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    SearchInputs.innerHTML = "";
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();

    displayDetails(respone.meals[0])
    $(".inner-loading-screen").fadeOut(300)

}


function displayDetails(meal) {
    
    SearchInputs.innerHTML = "";


    let ingredients = ``

    for(let i = 1; i <= 20; i++){
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",")
    // let tags = meal.strTags.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-3 p-3">${tags[i]}</li>`
    }



    let cartoona = `
    <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`

    ImgData.innerHTML = cartoona
}


function SearchInput() {
    SearchInputs.innerHTML = `
    <div class="row py-3 ">
        <div class="col-md-6 ">
            <input onkeyup="searchName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div>`

    ImgData.innerHTML = ""
}

async function searchName(aa) {
    closeSideNav()
    ImgData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${aa}`)
    response = await response.json()

    response.meals ? ShowMeals(response.meals) : ShowMeals([])
    $(".inner-loading-screen").fadeOut(300)

}

async function searchLetter(aa) {
    closeSideNav()
    ImgData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    term == "" ? term = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${aa}`)
    response = await response.json()

    response.meals ? ShowMeals(response.meals) : ShowMeals([])
    $(".inner-loading-screen").fadeOut(300)

}


function ContactUs() {
    ImgData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}

let nameTouched = false;
let emailTouched = false;
let phoneTouched = false;
let ageTouched = false;
let passwordTouched = false;
let repasswordTouched = false;




function inputsValidation() {
    if (nameTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}
