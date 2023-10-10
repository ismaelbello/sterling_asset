const branch = document.querySelector('.branch')



const displayBranches = (values) =>{
    branch.forEach(element =>{
        element.style.display = "none"
        const name = element.children[1].innerHTML.toUpperCase();
        const location = element.children[2].innerHTML.toUpperCase();
        const asset_type = element.children[3].innerHTML.toUpperCase();

        if (name.includes(values) || position.includes(values) || asset_type.includes(values)){
            element.style.display = "block"
        }
    })
}

searchBranch.addEventListener('input', (e) =>{
    displayBranches(e.target.value.toUpperCase())
})