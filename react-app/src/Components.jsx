import React from "react";


function FunctionalComponent(){
    return <h2> This is Functional Component</h2>
}

class ClassComponent extends React.Component{
    render(){
        return <h2> This is Class component</h2>
    }
}

function Components(){
    return(
        <div>
            <FunctionalComponent />
            <ClassComponent />
        </div>
    );
}

export default Components;