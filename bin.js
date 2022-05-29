const quaters = {
    "first":"",
    "second":"",
    "third":"",
    "fourth":"",
}

 
 $('#m_q').on('change', function() {

    if (quaters["first"].length > 0  ) { 
        $('#'+quaters["first"]).removeClass("selected-quarter");
         let quarter_name = quaters["first"].split("-")[0]
        $('#'+quaters["first"]).text(quarter_name.toUpperCase());
        
        quaters["first"] = "";
    }
    
    
    quaters["first"] = this.value
    
    
    $('#'+quaters["first"]).addClass("selected-quarter");
    
    $("#c1_q").val(0);
    $("#c2_q").val(0);
    $("#c3_q").val(0);
    
    Print()
});


$('#c1_q').on('change', function() {

    let selected_q = this.value+"-1";

    let mother = null ;

    if (quaters["first"].length == 0  ) {
        alert("Invalid first quarter item")
        return
    } else if (quaters["second"].length > 0  ) {
        
        $('#'+quaters["second"]).removeClass("selected-quarter");
        quaters["second"] = "";
        // mother object
        
    }

    mother = $('#'+ quaters["first"]) ;
    mother.html('');
    quaters["second"] = selected_q
    
    mother.html(select_table(this.value, 0, 150 ));

    $('#'+quaters["first"]).removeClass("selected-quarter");

    $('#'+quaters["second"]).addClass("selected-quarter");

    $("#c2_q").val(0);
    $("#c3_q").val(0);
    
   
});



$('#c2_q').on('change', function() {

    let selected_q = this.value+"-2";

    let mother = null ;

    if (quaters["second"].length == 0  ) {
        alert("Invalid second quarter item")
        return
    } else if (quaters["third"].length > 0  ) {
        $('#'+quaters["third"]).removeClass("selected-quarter");
        quaters["third"] = "";
    }

    mother = $('#'+ quaters["second"]) ;
    mother.html('');
    quaters["third"] = selected_q

    mother.html(select_table(this.value, 1, 75 ));
    
    $('#'+quaters["second"]).removeClass("selected-quarter");
    $('#'+quaters["third"]).addClass("selected-quarter");
    
    $("#c3_q").val(0);
    
});



$('#c3_q').on('change', function() {
    let selected_q = this.value+"-3";

    
    let mother = null ;
    
    if (quaters["third"].length == 0  ) {
        alert("Invalid third quarter item")
        return
    }  else if (quaters["fourth"].length > 0  ) {
        $('#'+quaters["fourth"]).removeClass("selected-quarter");
        quaters["fourth"] = "";
    }

    mother = $('#'+ quaters["third"]) ;
    mother.html('');
    quaters["fourth"] = selected_q
    
    mother.html(select_table(this.value, 2, 34 ));
    
    $('#'+quaters["third"]).removeClass("selected-quarter");
    
    $('#'+quaters["fourth"]).addClass("selected-quarter");
    
});



 

function select_table(q_str, mother_id, square ) {

let own = mother_id + 1;


let table = ''
if ( q_str == 'nh' || q_str == 'sh' ) {


let width = square * 2 
let height = square
table = ` <table border="1">
<tr>
    <td width="${width}" height="${height}" id="nh-${own}"> 
        NH
    </td>
</tr>
<tr>
    <td  width="${width}" height="${height}" id="sh-${own}"> 
        SH
    </td>
</tr>
</table>
`;
}
else if ( q_str == 'wh' || q_str== 'eh' ) {

let height = square * 2
let width = square

table = ` <table border="1">
<tr height="${height}" width="${width}">
    <td width="50%px" height="100%" id="wh-${own}"> 
        WH
    </td>
    <td  height="${height}" width="${width}" id="eh-${own}"> 
        EH
    </td>
</tr>
</table>
`;
} else {
let height = square
let width = square    
table = ` <table border="1">
<tr>
    <td height="${height}" width="${width}" id="nw-${own}"> 
        NW
    </td>
    <td height="${height}" width="${width}" id="ne-${own}">
        NE
    </td>
</tr>
<tr>
    <td height="${height}" width="${width}" id="sw-${own}"> 
        SW
    </td>
    <td height="${height}" width="${width}" id="se-${own}">
        SE
    </td>
</tr>
</table>
`;
}


return table;
}

