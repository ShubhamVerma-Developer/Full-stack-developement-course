

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});

$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");
// $("button").remove();