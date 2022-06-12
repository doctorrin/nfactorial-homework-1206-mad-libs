$(document).ready(function(){

    $("#play").click(function(){

      $("#name").text($("#name_form").val());
      $("#job").text($("#job_form").val());
      $("#date").text($("#date_form").val());
      $("#city").text($("#city_form").val());
      $("#speciality").text($("#speciality_form").val());
      $("#fact").text($("#fact_form").val());
      $("#dance").text($("#dance_form").val());
      $("#skill").text($("#skill_form").val());
      $("#love").text($("#love_form").val());
      $("#threat").text($("#threat_form").val());
    })
    
    $("#intro").css({
        "padding": "30px",
        "margin": "50px",
        "background-color": "#aceeeb",
        "border-style": "ridge",
        "text-align": "center",
        "color":"darkslategray",
        "font-size": "15pt",
        "font-family": "monospace",
    });

    $("h1").css({
        "width": "100%",
        "display": "flesx",
        "align-items": "center",
        "justify-content": "center",
        "text-align": "center",
        "font-size": "30pt",
        "font-family": "monospace"
    });

    $("#form").css({
        "font-size": "15pt",
        "font-family": "monospace",
    });

    $("#play").css({
        "margin": "5px",
        "padding": "5px",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "text-align": "center",
        "background-color": "#10ebd5",
        "border-style": "ridge",
        "font-size": "30pt",
        "font-family": "monospace"
    });
    
    $("#btn").css({
        "width": "100%",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "text-align": "center",
        "font-size": "30pt",
        "font-family": "monospace"
    });
})

