
fetch('https://pijush-app.herokuapp.com/furniture')
.then((response) => response.json())
.then((data) =>
{console.log(data)
   display(data)
});
const main=document.getElementById("main")

function display(arr){
    arr.map((element,index)=>{
        var div1=document.createElement("div")
        var description=document.createElement("h3")
        var price=document.createElement("h5")
        var year=document.createElement("h5")
        var image=document.createElement("img")
        var button=document.createElement('button')
         button.addEventListener("click",event=>{
            event.preventDefault()
            const data=element
            fetch("https://pijush-app.herokuapp.com/wishlisted",{
                method:"POST",
                headers:{
                'Content-Type':"application/json"
                },
                body:JSON.stringify(data)
            })
         }

         )
        div1.setAttribute("class","div1");
        image.setAttribute("class","image")
        image.src="https://via.placeholder.com/350x150"
        description.textContent=element.Description
        price.textContent="Price:"+" "+element.Price
        year.textContent= "Year:"+" "+element.year
        button.textContent="Add to wishlist"
        div1.append(image,description,price,year,button)
        main.append(div1)

 
    })
  
}