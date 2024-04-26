import data from "./ProjectData.json" with {type : "json"};

const info = data
console.log(data)

//  Gets info from URL Parameters
const URL_Param = new URLSearchParams(window.location.search)
const project = URL_Param.get("project")
// console.log(project)

// Tab Title
const t = document.getElementById("title")
t.innerHTML = info[project]["name"]

// Page Title
document.getElementById("project-title").innerHTML = info[project]["name"]

// Dependancy Info
const dis_libaries = document.getElementById("libraries-used")
console.log(">")
for(let i = 0; i < info[project]["libraries"].length; i++){
    // console.log(i)
    // let new_item = document.createElement("li").innerHTML = info[project]["libraries"][i]
    // dis_libaries.append(new_item)
    let li = document.createElement("li")
    li.textContent = info[project]["libraries"][i]
    console.log(li.textContent)
    dis_libaries.appendChild(li)
}

// Selected Item
    // Image
const selectedImage = document.getElementById("imgSelected")

    // Video
const selectedVideo = document.getElementById("vidSelected")
// const selectedVid = document.getElementById("vidSelected")

const ChangeImage = (x) => {
        // Change to image.
    if (x["src"].toLowerCase().endsWith("png")){
        console.log("img")
        selectedImage.src = x.src
        selectedImage.alt = x.alt

        selectedImage.id = "imgSelected"
        selectedVideo.id = "vidSelected_hid"
    }
        // Change to video.
    else if(x["src"].toLowerCase().startsWith("http")){
        console.log("Vid")
        selectedVideo.src = x.src
        selectedVideo.alt = x.alt
        // selectedVideo.width = 420
        // selectedVideo.height = 315
        console.log(selectedImage.hidden)
        

        selectedImage.id = "imgSelected_hid"
        selectedVideo.id = "vidSelected"
    }
}

    // Hides Image
if(info[project]["img"][0]["src"].toLowerCase().endsWith("png")){
        // Image
    selectedImage.id = "imgSelected"
    selectedImage.src = info[project]["img"][0]["src"]

        // Video
    selectedVideo.id = "vidSelected_hid"
}

    // Hides Video
else if(info[project]["img"][0]["src"].toLowerCase().startsWith("https")){
        // Image
    selectedImage.id = "imgSelected_hid"

        // Video
    selectedVideo.id = "vidSelected"
    selectedVideo.src = info[project]["img"][0]["src"]
}

// Image Gallery
const gallery = document.getElementById("gallery")
for(let i = 0; i < info[project]["img"].length; i++){
    // console.log(info[project]["img"][i]["src"])

    // Create sub image 
    if(info[project]["img"][i]["src"].toLowerCase().endsWith("png")){
        // console.log(true)
        let img = document.createElement("img")
        img.onclick = () => {
            // console.log(img)
            ChangeImage(img)
        }
        img.alt = info[project]["img"][i]["alt"]
        img.src = info[project]["img"][i]["src"]
        img.className = "project-img"
        gallery.appendChild(img)
    }

    // Create sub iframe
    else if(info[project]["img"][i]["src"].toLowerCase().startsWith("https")){
        console.log("Video Loaded")
        let vidImg = document.createElement("img")
        let vid = document.createElement("img")
        vid.src = info[project]["img"][i]["src"]
        vid.alt = info[project]["img"][i]["src"]
        vidImg.onclick = () => {
            ChangeImage(vid)
        }
        vidImg.alt = info[project]["img"][0]["alt"]
        vidImg.src = info[project]["img"][0]["src"]
        vidImg.className = "project-img"
        gallery.appendChild(vidImg)

        // let vid = document.createElement("video")
        // vid.onclick = () =>{
        //     ChangeImage(vid)
        // }
        // vid.alt = info[project]["img"][i]["alt"]
        // vid.src = info[project]["img"][i]["src"]
        // gallery.appendChild(vid)
    }
}

// document.getElementById("description").innerHTML = info[project]["des"]
console.log(info[project]["des"])

const descriptions = document.getElementById("descriptions")
for(let i = 0; i < info[project]["des"].length; i++){
    // Get key
    let key = Object.keys(info[project]["des"][i])

    // Create element
    let ele = document.createElement(key)
    // Add information
    ele.innerText = info[project]["des"][i][key]

    descriptions.appendChild(ele)
}