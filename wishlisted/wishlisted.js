fetch(' https://pijush-app.herokuapp.com/wishlisted')
.then((response) => response.json())
.then((data) =>
{
    
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
        var button=document.createElement("button")
        button.textContent="Remove"
    
        
        div1.setAttribute("class","div1");
        image.setAttribute("class","image")
        image.src="https://via.placeholder.com/350x150"
        description.textContent=element.Description
        price.textContent="Price:"+" "+element.Price
        year.textContent= "Year:"+" "+element.year

        div1.append(image,description,price,year,button)
        main.append(div1)

 
    })
 
    
  
}
    


