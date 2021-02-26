(function() {
  var flip_card, open_env;

  $(".js-first-flip, .flip-btn").on("click", function() {
    flip_card();
    return $('.cards-btn').css({
      opacity: 1
    });
  });

  $(".js-open-env").on("click", function() {
    return open_env();
  });

  flip_card = function() {
    return $(".env-card--inner").toggleClass("is-flipped");
  };

  open_env = function() {
    $(".section--cards").addClass("is-opened");
    return $(".env-btn").fadeOut();
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFNBQUEsRUFBQTs7RUFBQSxDQUFBLENBQUUsMkJBQUYsQ0FBOEIsQ0FBQyxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxRQUFBLENBQUEsQ0FBQTtJQUN2QztXQUNILENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxHQUFoQixDQUFvQjtNQUFDLE9BQUEsRUFBUztJQUFWLENBQXBCO0VBRjBDLENBQTNDOztFQUlBLENBQUEsQ0FBRSxjQUFGLENBQWlCLENBQUMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsUUFBQSxDQUFBLENBQUE7V0FDMUI7RUFEMEIsQ0FBOUI7O0VBR0EsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO1dBQ1gsQ0FBQSxDQUFFLGtCQUFGLENBQXFCLENBQUMsV0FBdEIsQ0FBa0MsWUFBbEM7RUFEVzs7RUFHWixRQUFBLEdBQVcsUUFBQSxDQUFBLENBQUE7SUFDVixDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxRQUFyQixDQUE4QixXQUE5QjtXQUNBLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxPQUFkLENBQUE7RUFGVTtBQVZYIiwic291cmNlc0NvbnRlbnQiOlsiJChcIi5qcy1maXJzdC1mbGlwLCAuZmxpcC1idG5cIikub24gXCJjbGlja1wiLCAtPlxuXHRkbyBmbGlwX2NhcmRcblx0JCgnLmNhcmRzLWJ0bicpLmNzcyh7b3BhY2l0eTogMX0pXG5cbiQoXCIuanMtb3Blbi1lbnZcIikub24gXCJjbGlja1wiLCAtPlxuXHRkbyBvcGVuX2VudlxuXHRcdFx0XG5mbGlwX2NhcmQgPSAoKS0+IFxuXHQkKFwiLmVudi1jYXJkLS1pbm5lclwiKS50b2dnbGVDbGFzcyBcImlzLWZsaXBwZWRcIlxuXG5vcGVuX2VudiA9ICgpLT5cblx0JChcIi5zZWN0aW9uLS1jYXJkc1wiKS5hZGRDbGFzcyBcImlzLW9wZW5lZFwiXG5cdCQoXCIuZW52LWJ0blwiKS5mYWRlT3V0KClcblx0XHRcbiJdfQ==
//# sourceURL=coffeescript