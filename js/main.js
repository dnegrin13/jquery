$(document).ready(function() {

    console.log("ok")
    // ici on lit la valeur du h1
    let coucou = $("#coucou").html()
    console.log(coucou)
    // ici on modifie la valeur du h1
    $("#coucou").html("jo est méchant avec le formateur")
    // ici je récupère tous les li
    console.log($('li'))
    //eq permet d'accéder à l'index d'un tableau d'élément jquery
    // chat devient tardigrade
    $('li').eq(1).html('tardigrade')
    $('li').eq(0).css("color", "red")
    $('li').css({
        "list-style" : "none",
        "font-size" : "2em"
    })

    $("#btn").on('click', function() {
        $(this).css("background-color", "chartreuse")
    })

    $('p').first().css("color", "blue")

    $('.cacher').each(function(index) {
         $(this).on("mouseover", hover).on("mouseleave", nohover)
    });

    function hover() {
        $(this).addClass("orange")
        $(this).removeClass("violet")
    }

    function nohover() {
        $(this).addClass("violet")
        $(this).removeClass("orange")
    }

    //ee218c41b9c4871dc323fd126109095ddd45e59558fd58dc6971b056a98de75e

    let ctx = $('#chart')

    $('#ajax').on('click', function(){
        $.ajax("https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=EUR&limit=60&api_key=ee218c41b9c4871dc323fd126109095ddd45e59558fd58dc6971b056a98de75e")
        .done(function(res){
            let data = res.Data.Data
            console.log(data)

            let time = [];
            let valueMaxBTC = [];
            let valueMinBTC = [];
            data.forEach(element => {
                time.push(convertTimesStamp(element.time))
                valueMaxBTC.push(element.high)
                valueMinBTC.push(element.low)
            });

            console.log(time)

            new Chart(ctx, {
                type: 'line',
                data: {
                  labels: time,
                  datasets: [{
                    label: 'value of Bitcoin until 2 mouth',
                    data: valueMaxBTC,
                    borderWidth: 1
                  },
                  {
                    label: 'value of Bitcoin until 2 mouth',
                    data: valueMinBTC,
                    borderWidth: 1
                  }],
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }
              });

        })
    })

    function convertTimesStamp(time) {
        let date = new Date(time*1000)
        let year = date.getFullYear();
        let month = date.getMonth() < 10 ? "0" + date.getMonth():date.getMonth();
        let day = date.getDay()< 10 ? "0" + date.getDay():date.getDay();
        return `${day}/${month}/${year}`;
    }


})