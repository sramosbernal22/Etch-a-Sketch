


document.addEventListener("DOMContentLoaded", () =>{
    const container = document.querySelector(".container");
    function createGrid(size, container)
    {
        container.innerHTML = ''
        for (let i = 0; i < size; i++)
            {
                let row = document.createElement("div");
                row.classList.add("row");
                container.appendChild(row);
                for (let i = 0; i < size; i++)
                {
                    let box = document.createElement("div");
                    box.classList.add("box");
                    row.appendChild(box);
                }
            } 
    }

    //Original 16 by 16
    createGrid(16, container);
   
    //Button Dimensions Section
    const button = document.querySelector(".dimensions");
    button.addEventListener("click", () =>{
        let size = prompt("Input size dimensions");
        createGrid(size, container);
    });





}
);

