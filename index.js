import data from "./ProjectData.json" with {type : "json"};

// for(let x = 0; x < Projects.length; x++){
//     let item = Projects[x]
//     // console.log(x)
//     // console.log(item)
//     // console.log(item.length)
//     if(item[1].length > 0){
//         let lan = document.createElement("li")
//         // console.log(item[0])
//         lan.textContent = item[0]
//         project_table.appendChild(lan)

//         let container = document.createElement("ul")
//         project_table.appendChild(container)
//         for(let i = 1; i < item.length; i++){
//             let li = document.createElement("li")
//             let url = document.createElement("a")
//             // console.log(`${item[1]}`)
//             url.innerText = item[i][0]
//             url.href = `Project.html?project=${item[i][1]}`
//             container.appendChild(li)
//             li.appendChild(url)
//         }
//         // project_table.appendChild(li)
//         // return
//         }
//     else{
//         continue
//         console.log("Not projects in this language")
//     }
// }
    // console.log(Object.keys(data))
    // console.log(Object.values(data))
    // console.log(Object.keys(data).length)

for(let i = 0; i < Object.keys(data).length; i++){
    // console.log(Object.keys(data)[i])
    // console.log(data[Object.keys(data)[i]])
    
    // console.log(Object.keys(data)[i])
    // console.log(i)
    // console.log(Projects[i][1][1])
    // console.log(Projects[i])

    // Image
    let img = document.createElement("img")
    // console.log(data[Object.keys(data)[i]])
    console.log(data[Object.keys(data)[i]]["alt"])
    img.src = data[Object.keys(data)[i]]["img"][0]["src"]
    img.alt = data[Object.keys(data)[i]]["img"][0]["alt"]
    img.innerHTML = Object.keys(data)[i]

    let img_backg = document.createElement("div")
    img_backg.appendChild(img)

    // Text
    let text_backg = document.createElement("div")

    let text = document.createElement("p")
    text.textContent = data[Object.keys(data)[i]]["name"]
    text_backg.appendChild(text)

    // Button
    let button = document.createElement("button")
    // button.id = "ProjectButton"
    let headbackg = document.createElement("div")

    headbackg.id = "headDiv"
    button.appendChild(headbackg)
    img_backg.id = "imgDiv"
    button.appendChild(img_backg)
    text_backg.id = "textDiv"
    button.appendChild(text_backg)

    // Link
    let a = document.createElement("a")
    a.href = `Project.html?project=${Object.keys(data)[i]}`
    a.className = "ProjectButton"
    a.appendChild(button)
    document.getElementById("ProjectListSection").appendChild(a)
}