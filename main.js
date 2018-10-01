$("#btn1").on("click", function() {
  const profile = $("#section_a").position().top;

  $("html, body").animate(
    {
      scrollTop: profile
    },
    900
  );
});
