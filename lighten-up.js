$(function() {

  btn_lighten = $('#btn-lighten');
  btn_darken = $('#btn-darken');
  input_text = $("#in-color-text");
  out_color = $('#out-color');
  out_text = $('#out-text');


  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
  }
  function componentToHex(c) {
    var hex = Math.floor(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }


  function validate_input() {
    // alert('Input is Valid');
  }

  function set_output(color) {
    console.log('color: ' + color);
    out_color.css("background", color);
    out_text.html(color);
  }

  function lighten() {
    var in_hex;
    if(out_text.is(':empty'))
      in_hex = input_text.val();
    else
      in_hex = out_text.html();

    console.log(in_hex);
    var in_rgb = hexToRgb(in_hex);
    console.log(in_rgb);
    r = in_rgb[0] + (in_rgb[0] * 0.05);
    g = in_rgb[1] + (in_rgb[1] * 0.05);
    b = in_rgb[2] + (in_rgb[2] * 0.05);
    var out_hex = rgbToHex(r, g, b);
    console.log(out_hex);
    set_output(out_hex);
  }

  function darken() {
    var in_hex;
    if(out_text.is(':empty'))
      in_hex = input_text.val();
    else
      in_hex = out_text.html();

    console.log(in_hex);
    var in_rgb = hexToRgb(in_hex);
    console.log(in_rgb);
    r = in_rgb[0] - (in_rgb[0] * 0.05);
    g = in_rgb[1] - (in_rgb[1] * 0.05);
    b = in_rgb[2] - (in_rgb[2] * 0.05);
    var out_hex = rgbToHex(r, g, b);
    console.log(out_hex);
    set_output(out_hex);
  }

  btn_lighten.click(function() {
    validate_input();
    lighten();
  });

  btn_darken.click(function() {
    validate_input();
    darken();
  });

});