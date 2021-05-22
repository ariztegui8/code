const container = document.getElementById('container');
container.setAttribute("class","contenedor");

const timeArg = async()=>{
   
    try {
         const res = await fetch(`http://api.weatherstack.com/current?access_key=7d35196214f391dd2705ef84fa37441a&query=argentina`);
         const {location, current} = await res.json();
        //  console.log(location, current);
 
            location.name, location.country, location.localtime, location.region, current.temperature = container.innerHTML += `
               
             
            
                <table class="container-table">
                    <tr class="container-tr">
                        <th class="item-th">Country</th>
                        <th class="item-th">City</th>
                        <th class="item-th">Region</th>
                        <th class="item-th">Temperature</th>
                        <th class="item-th">Time</th>
                
                    </tr>
    
                    <tr class="container-tr-color">
                        <td class="item-td">${location.country}</td>
                        <td class="item-td">${location.name}</td>
                        <td class="item-td">${location.region}</td>
                        <td class="item-td">${current.temperature}</td>
                        <td class="item-td">${location.localtime}</td>
               
               
                    </tr>

                 </table>
                
        
          
            `  
            
     
     } catch (error) {
        console.log(error)
     }
 };
 





 const timeCol = async()=>{
   
    try {
         const res = await fetch(`http://api.weatherstack.com/current?access_key=7d35196214f391dd2705ef84fa37441a&query=colombia`);
         const {location, current} = await res.json();
         console.log(location, current);
 
            location.name, location.country, location.localtime, location.region, current.temperature = container.innerHTML += `
               
             
            
            
           
            <table class="container-table">
                 <tr class="container-tr">
                    <th class="item-th">Country</th>
                    <th class="item-th">City</th>
                    <th class="item-th">Region</th>
                    <th class="item-th">Temperature</th>
                    <th class="item-th">Time</th>
                
                </tr>
    
                 <tr class="container-tr-color">
                    <td class="item-td">${location.country}</td>
                    <td class="item-td">${location.name}</td>
                    <td class="item-td">${location.region}</td>
                    <td class="item-td">${current.temperature}</td>
                    <td class="item-td">${location.localtime}</td>
               
               
                 </tr>

             </table>
        
    
           
        
        
          
             `  
            
     
     } catch (error) {
        console.log(error)
     }
 };


 const timeVen = async()=>{
   
    try {
         const res = await fetch(`http://api.weatherstack.com/current?access_key=7d35196214f391dd2705ef84fa37441a&query=Venezuela`);
         const {location, current} = await res.json();
        //  console.log(location, current);
 
            location.name, location.country, location.localtime, location.region, current.temperature = container.innerHTML += `
               
             
            
                <table class="container-table">
                    <tr class="container-tr">
                        <th class="item-th">Country</th>
                        <th class="item-th">City</th>
                        <th class="item-th">Region</th>
                        <th class="item-th">Temperature</th>
                        <th class="item-th">Time</th>
                
                    </tr>
    
                    <tr class="container-tr-color">
                        <td class="item-td">${location.country}</td>
                        <td class="item-td">${location.name}</td>
                        <td class="item-td">${location.region}</td>
                        <td class="item-td">${current.temperature}</td>
                        <td class="item-td">${location.localtime}</td>
               
               
                    </tr>

                 </table>
        
        
          
            `  
            
     
     } catch (error) {
        console.log(error)
     }
 };

 timeArg();

 timeCol();
 
 timeVen();

 

 