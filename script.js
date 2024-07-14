document.addEventListener("DOMContentLoaded", () =>{
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

}
);

