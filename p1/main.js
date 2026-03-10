$(document).ready(function () {
    $(".menu-bar").click(function () {
      $(".sidebar").slideToggle("slow");
    });
  });
  $(document).ready(function () {
    // Calculate total when ticket count changes
    $("#ticket-count").on("input", function () {
      let price = parseFloat($("#price").text());
      let tickets = parseInt($(this).val());
      let total = price * tickets;
      $("#total-amount").text(total.toFixed(2));
    });
    
    // Show details when artist is double-clicked
    $(".artist").dblclick(function () {
      let name = $(this).data("name");
      let event = $(this).data("event");
      let price = $(this).data("price");
      $("#artist-name").text(name);
      $("#event-details").text(event);
      $("#price").text(price);
      $("#ticket-count").val(1);
      $("#total-amount").text(price); // Initial total
      $(".details").fadeIn(300);
    });

    // Close details panel
    $(".close-btn").click(function () {
      $(".details").fadeOut(300);
    });

    // Search functionality
    $("#search-input").on("keyup", function () {
      let searchTerm = $(this).val().toLowerCase();
      $(".artist").each(function () {
        let artistName = $(this).data("name").toLowerCase();
        let artistEvent = $(this).data("event").toLowerCase();

        if (
          artistName.includes(searchTerm) ||
          artistEvent.includes(searchTerm)
        ) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });

    // Checkout button
    $("#checkout").click(function () {
      let price = parseFloat($("#price").text());
      let tickets = parseInt($("#ticket-count").val());
      let total = price * tickets;

      // Store total in localStorage to use on checkout page
      localStorage.setItem("total-Amount", total.toFixed(2));

      // Store additional details for a better checkout experience
      localStorage.setItem("artist-name", $("#artist-name").text());
      localStorage.setItem("event-details", $("#event-details").text());
      localStorage.setItem("ticket-count", tickets);
      window.location.href = "checkout.html";
    });
    if (localStorage.getItem("isRegistered") === "true") {
        $(".nav").append(
            '<a href="profile.html"><i class="fas fa-user"></i> Profile</a>'
        );
    }
    else {
        alert("Please register to access your profile first!!.");
        window.location.href = "registration.html";
    }
  });