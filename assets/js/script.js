$(document).ready(function() {
 

    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
       $(".stream2").removeClass('highlight_stream');
       $(".stream3").removeClass('highlight_stream');
         $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
       $(".stream1").removeClass('highlight_stream');
       $(".stream2").removeClass('highlight_stream');
       $(".stream3").removeClass('highlight_stream');
         $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
       $(".stream1").removeClass('highlight_stream');
       $(".stream2").removeClass('highlight_stream');
       $(".stream3").removeClass('highlight_stream');
         $(".stream3").addClass('highlight_stream');
   });


}); 
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
