function check_input() { // login_form.php 
    if (!document.loginform.id.value) {
        alert("아이디를 입력하세요");
        document.loginform.id.focus();
        return;
    }
    if (!document.loginform.pw.value) {
        alert("비밀번호를 입력하세요");
        document.loginform.pw.focus();
        return;
    }
    document.loginform.submit();
}

function check_userset() { //set_user.php
    if (!document.create_user.id.value) {

    }
    if (!document.create_user.pw.value) {

    }
    if (!document.crete_user.pw2.value) {

    }
    if (!document.create_user.email_front.value) {

    }
    if (!document.create_user.email_end.value) {

    }
    document.create_user.submit();
}

function set_user() {
    $.ajax({
        url: "set_user.php",
        type: "post",
        success: function(data) {
            $('#status_target').html(data);
        }
    })
}

$(function() {
    $('#user').click(function() { // #user 가져오기
        $.ajax({
            url: "user.php",
            type: "post",
            datatype: "html",
            success: function(data) {
                $('#status_target').html(data);
            }
        });
    });
    $('#home').click(function() { // #gear 가져오기
        $.ajax({
            url: "home.php",
            type: "post",
            datatype: "html",
            success: function(data) {
                $('#status_target').html(data);
            }
        });
    });
    $('#gear').click(function() { // home.php
        $.ajax({
            url: "gear.php",
            type: "post",
            datatype: "html",
            success: function(data) {
                $('#status_target').html(data);
            }
        });
    });
});