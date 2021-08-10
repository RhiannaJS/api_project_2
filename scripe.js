const baseUrl = "https://calendarific.com/api/v2/holidays?api_key=6c707a03c7891be2c584482526c8b31d9aee9158&country=US&year=2022&type=national"

let table = document.querySelector(".tbody")


fetch(baseUrl)
    .then(response => response.json())
    .then(data => appendData(data.response))
    .then(data => console.log(data));
    

function appendData(data){
    
    for(let i = 0; i < data.holidays.length; i++){
        let tr = document.createElement ('tr')
        let tdHoliday = document.createElement ('td')
        let tdDate = document.createElement ('td')
        let tdDescription = document.createElement ('td')

        tdHoliday.innerHTML = data.holidays[i].name;
        tdDate.innerHTML = data.holidays[i].date.iso;
        tdDescription.innerHTML = data.holidays[i].description;
        table.appendChild(tr)
        tr.appendChild(tdHoliday);
        tr.appendChild(tdDate);
        tr.appendChild(tdDescription);

        table.setAttribute("class", "table-info table-striped")
        tdHoliday.classList.add("table-warning")
        tdDate.classList.add("table-warning")
        tdDescription.classList.add("table-warning")
        
    }
}
  


