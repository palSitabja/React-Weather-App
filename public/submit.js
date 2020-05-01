console.log('Client side js loaded');

const WeatherForm=document.querySelector('form')
WeatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=document.querySelector('input').value
    console.log(location);
    //const url='/weather?address='+location
    //const url='/weather'
    const url="https://api.openweathermap.org/data/2.5/onecall?lat=22&lon=88&units=metric&appid=6226226e2bae20ed065fa44c0394687f"
    fetch(url).then((response)=>{
        console.log(response);
        response.json().then((data)=>{
            if(data.error){
                console.log(data+"\nerror");
            }else{
                console.log(data);
                
            }
        })
    })
})
