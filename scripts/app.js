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
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="field-${i}" name="${fieldName}" value="${fieldData}">
                    </div>
                    <div class="col-sm-2">
                        <div class="form-group">
                        <select class="form-control" id="fieldCategory-${i}" name="${fieldName}_category">
                            <option hidden> Type </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    </div>
                </div>
                 <br> <br> <br>`
    };

    htmlCode += `<center> 
                <button type="submit" class="btn btn-primary">Submit</button> 
                <button type="button" class="btn btn-danger">Cancel</button>
                <center>`;
    $( "form" ).append( htmlCode );

    $( "#ResponseForm" ).submit( function() {
        console.log( $( this ).serializeArray() );
        alert( JSON.stringify( $( this ).serializeArray() ) );
            
        // $.ajax({
        //     type: "POST",
        //     url: url,
        //     data: $( this ).serializeArray(),
        //     success: function( data ) {
        //         respose = JSON.parse(data);
        //         console.log('data received from the server');
        //     },
        //     fail: function(xhr, textStatus, errorThrown){
        //          alert('request failed');
        //     },
        //     dataType: JSON
        //   });        
    })

});