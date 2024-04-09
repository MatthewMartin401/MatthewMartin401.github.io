// const content = {
//         "Python" : {
//             indexName : "Python example 1",
//             name : "Python-22"
//         },
//         "JavaScript" : {
//             indexName : "JS example 1",
//             name : "Python-22"
//         },
//         "React" : {
//             indexName : "React example 1",
//             name : "Python-22"
//         },
//         "UE4" : {
//             indexName : "UE4 example 1",
//             name : "Python-22"
//         },
//     }

const { exact } = require("prop-types");

// class listProjects extends HTMLElement{
//     constructor(target){
//         self.target = target
//         super();
//     }
// }

function Load_projects({projects}){
    const content = ["example", "of", "jsx"]
    console.log("Load_Projects")
    return(
        <div>
            {content.map(item => {
                return(
                    <li>
                        {item}
                    </li>
                )
            })}
        </div>
    )
}

export default Load_projects;