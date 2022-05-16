function sendQueryMail(a) {
    a.preventDefault();
    var b = validateNotEmpty($("#fname"), "Name is required"), c = validEmail($("#email")), d = validateMobile($("#phone")), e = validateNotEmpty($("#message"), "Message is required");
    b && c && d && e ? jQuery.ajax({
        url: "email_managment/mail.php",
        type: "POST",
        dataType: "text",
        data: $("#query-form").serialize(),
        beforeSend: function(a) {
            $("#RequestTOCall").text("");  
     $("#RequestTOCall").append("<img src='/images/btn-loader.gif'/>");
        },
        success: function(a) {
           if(a=='1'){
               $("#RequestTOCall").text("Thank you for sharing the details!");
               $("#RequestTOCall").remove();
               $("#btn-msg").html("<h5> Thank you for sharing the details!</h5>");
           }else{
      $("#RequestTOCall").text(" Submit");
           }
            $("#query-form")[0].reset();
        }
    }) : console.log("Oops", "Something is wrong please put correct informaiton.", "error");
}

function validateNotEmpty(a, b) {
    return $(a).removeClass("error"), $(a).next("div[for='" + a.attr("id") + "']").remove(), 
    !(a.val().length < 1) || ($(a).addClass("error"), $(a).after("<div class='error-message text-danger' style='font-size:14px' for='" + a.attr("id") + "'>" + b + "</div>"), 
    !1);
}

function validEmail(a) {
    return $(a).removeClass("error"), $(a).next("div[for='" + a.attr("id") + "']").remove(), 
    a.val().length < 1 ? ($(a).addClass("error"), $(a).after("<div class='error-message text-danger' style='font-size:14px' for='" + a.attr("id") + "'>Email id is required</div>"), 
    !1) : !!isValidEmail(a.val()) || ($(a).addClass("error"), $(a).after("<div class='error-message text-danger' style='font-size:14px' for='" + a.attr("id") + "'>E-mail must be valid</div>"), 
    !1);
}

function isValidEmail(a) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(a);
}

function validateMobile(a) {
    return $(a).removeClass("error"), $(a).next("div[for='" + a.attr("id") + "']").remove(), 
    a.val().length < 1 ? ($(a).addClass("error"), $(a).after("<div class='error-message text-danger' style='font-size:14px' for='" + a.attr("id") + "'>Phone No. is required</div>"), 
    !1) : !!isValidPhone(a.val()) || ($(a).addClass("error"), $(a).after("<div class='error-message text-danger' style='font-size:14px' for='" + a.attr("id") + "'>Please enter valid Phone number</div>"), 
    !1);
}

function isValidPhone(a) {
    return /^([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})+$/.test(a);
}

function isValidPin(a) {
    return /^([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})+$/.test(a);
}

function isNumber(a) {
    var b = a.which ? a.which : a.keyCode;
    return !(46 != b && b > 31 && (b < 48 || b > 57));
}
 $("input , textarea , select").on("change , keypress , keydown,", function() {
    $(this).next(".text-danger").remove();
});