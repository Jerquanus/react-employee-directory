
// convert Jquery 
// use promise.

const Api = new Promise( (resolve, reject) =>{
    fetch('https://randomuser.me/api/?results=50') 
    .then((response) => response.json())
    .then((response) => {
      resolve (response.results) 
      
    })
   
});
   
export default Api;

// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });