
    $(document).ready(function(){     

      $(".optSelected").hide();
      $(".rdSelected").hide();

      $('#optionsRadios1').click(function () {
        selectBreakfast(1);
      });

      $('#optionsRadios2').click(function () {
          selectBreakfast(2);
      });

      $('#optionsRadios3').click(function () {
          selectBreakfast(3);
      });

      $("#rdVis1").click(function () {
          selectVisiting(1);
      });

      $("#rdVis2").click(function () {
          selectVisiting(2);
      });

      $("#rdVis3").click(function () {
          selectVisiting(3);
      });

      function selectVisiting(id)
      {
          $('#rdVis'+ id).parent().parent().toggleClass("btn btn-outline-success");
          if ($('#rdVis' + id).parent().parent().hasClass("btn btn-outline-success")) {
              $('#rdCheck'+ id).show();
          }
          else {
              $('#rdCheck' + id).hide();
          }
      }

      function selectBreakfast(id)
      {
          $(".optSelected").hide();
          $("#optCheck" + id).show();
          $(".cardBreakfast").find(".form-check").removeClass("btn btn-outline-success");
          $('#optionsRadios' + id).parent().parent().addClass("btn btn-outline-success");
      }

      $('.carousel').carousel({
         interval: false
      }); 

      $("#nameSelection").html("<strong>" + $("ul.carousel-indicators li.active").attr("place") + "</strong>");

      $('#datepicker').datepicker({
        maxViewMode: 0,
        clearBtn: true,
        autoclose: true,
        todayHighlight: true
      });

      $('.carousel').on('slid.bs.carousel', function () {
        $("#nameSelection").html("<strong>" + $("ul.carousel-indicators li.active").attr("place") + "</strong>");
        $("#nameSelection").show();
        $(".carousel-container-caption").slideToggle();
        $(".cardDetail").hide();
      })

      $('.btndestination').mouseup(function(){   
        $("#nameSelection").html("<strong>" + $("ul.carousel-indicators li.active").attr("place") + "</strong>");
        $("#nameSelection").show();
        $(".cardDetail").show();
      });

      $('.img').click(function(){
          $(".carousel-container-caption").slideToggle();
      });
    });
    