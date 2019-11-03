function onSubmit(){
  $(`.js-submit`).click(event => {
      event.preventDefault();
      let breed = $(`.js-submit`).val();
      getDog(breed);
    });
}
function getDog(breed){
    fetch('https://dog.ceo/api/breed' + breed + '/images/random')
    .then(response=> response.json())
    .then(responseJson => {
        console.log(responseJson);
        if(responseJson.status !== 'success'){
            throw Error(responseJson.message);
        }
        else{
            $(`.js-dogs`).html(`<img src"${responseJson.message}" alt="picture of ${breed}" class="results-img">`)
        }
    })
    .catch(error => {
        console.log("an error occurred " + error.message);
        $(`.js-dogs`).html(`<p>an error occurred: = ${error.message}</p>`)
    });
}
$(onSubmit);