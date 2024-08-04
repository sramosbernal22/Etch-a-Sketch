


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
                    
                    box.addEventListener("mouseover",() =>{
                        var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
                        box.style.backgroundColor = randomColor;
                    })
                    box.addEventListener("mouseleave",() =>{
                        var whiteColor = "#ffffff"
                        box.style.backgroundColor = whiteColor;
                    })
                    
                    
                }
            } 
    }

    //Original 16 by 16
    createGrid(16, container);
   
    //Button Dimensions Section
    const button = document.querySelector(".dimensions");
    button.addEventListener("click", () =>{
        let size = -1
        while(isNaN(size) || size <= 0 || size > 100)
        {
            size = prompt("Input size dimensions from 1-100");
        }
        createGrid(size, container);
    });


    


}
);

