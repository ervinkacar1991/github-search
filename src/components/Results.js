import React from "react";

const Results = (props)=>{
    const{repos}=props
    console.log('repos is ',  repos);

const listRepos = repos.map((item)=>{
    <li>{item}</li>
})

    return 

}

export default Results