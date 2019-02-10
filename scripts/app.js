//ajax call to get data from api
$(document).ready(function(){

    // let respose = [];
    // $.ajax({
    //     type: "POST",
    //     url: url,
    //     data: data,
    //     success: function( data ) {
    //         respose = JSON.parse(data);
    //         console.log('data received from the server');
    //     },
    //     dataType: JSON
    //   });

    let htmlCode="";
    let response = [{
        "field": "Name",
        "data": "Magesh"
    },
    {
        "field": "School",
        "data": "Devi Academy"
    },
    {
        "field": "Employment",
        "data": "Sumyag"
    }];


    for (let i=0; i<response.length; i++) {
    let fieldName = response[i]['field'];
    let fieldData = response[i]['data'];
    htmlCode += `<div class=form-group row> 
                    <label for="field-${i}" class="col-sm-2 col-form-label">${fieldName}</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="field-${i}" value="${fieldData}">
                    </div>
                 </div>
                 <br> <br> <br>`
    };

    htmlCode+= `<center> 
                <button type="submit" class="btn btn-primary">Submit</button> 
                <button type="button" class="btn btn-danger">Cancel</button>
                <center>`;
    $("form").append(htmlCode);
});