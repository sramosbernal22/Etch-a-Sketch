document.addEventListener("DOMContentLoaded", () =>{
    //Render 16 by 16 once DOM is loaded
    const container = document.querySelector(".container");

    for (let i = 0; i < 16; i++)
    {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let i = 0; i < 16; i++)
        {
            let box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    }

    //Button Dimensions Section
    const button = document.querySelector(".dimensions");
    button.addEventListener("click", () =>{
        alert("Hello");

    });



}
);

