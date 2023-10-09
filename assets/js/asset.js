const employee = document.querySelector('.branch')
const submit  = document.querySelector('.submit')


const displayBranches = (values) =>{
    branch.forEach(element =>{
        element.style.display = "none"
        const name = element.children[1].innerHTML.toUpperCase();
        const position = element.children[2].innerHTML.toUpperCase();
        const job_type = element.children[3].innerHTML.toUpperCase();

        if (name.includes(values) || position.includes(values) || job_type.includes(values)){
            element.style.display = "block"
        }
    })
}

searchBranch.addEventListener('input', (e) =>{
    displayBranches(e.target.value.toUpperCase())
})