 function change_route(){

    const option_r = document.getElementById("options").value;
    var requisition = "login";

    return {
      req: requisition,
      option: option_r
    }

  }
  