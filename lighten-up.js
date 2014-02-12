$(function() {

  btn_lighten = $('#btn-lighten');
  btn_darken = $('#btn-darken');
  input_text = $("#in-color-text");
  out_color = $('#out-color-first');
  out_text = $('#out-text-first');


  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
  }
  function componentToHex(c) {
    var hex = Math.round(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
      var hr = componentToHex(r);
      var hg = componentToHex(g);
      var hb = componentToHex(b);
      console.log("hr: " + hr);
      console.log("hg: " + hg);
      console.log("hb: " + hb);
      return "#" + hr + hg + hb;
  }


  function validate_input() {
    // alert('Input is Valid');
  }

  function set_output(color) {
    console.log('color: ' + color);
    out_color.css("background", color);
    out_text.val(color);
  }

  function lighten() {
    var in_hex, out_hex, r, g, b;
    if(! out_text.val())
      in_hex = input_text.val();
    else
      in_hex = out_text.val();

    console.log("hex input: " + in_hex);
    var in_rgb = hexToRgb(in_hex);
    console.log("rgb input: " + in_rgb.toString());
    r = in_rgb[0] + (in_rgb[0] * 0.05);
    g = in_rgb[1] + (in_rgb[1] * 0.05);
    b = in_rgb[2] + (in_rgb[2] * 0.05);
    console.log("rgb output: " + [r, g, b].toString());
    if (r > 255 || b > 255 || g > 255)
      out_hex = in_hex;
    else
      out_hex = rgbToHex(r, g, b);
    console.log("hex output: " + out_hex);
    set_output(out_hex);
  }
  function is_proportional(in_hex, out_hex) {
    //If any one of the components did not change, the proportions are off
    // and should not be calculated;
    var r1, r2, g1, g2, b1, b2, result;
    r1 = in_hex.substring(1,3);
    g1 = in_hex.substring(3,5);
    b1 = in_hex.substring(5,7);
    r2 = out_hex.substring(1,3);
    g2 = out_hex.substring(3,5);
    b2 = out_hex.substring(5,7);
    result = (r1 != r2 && g1 != g2 && b1 != b2);
    console.log(result);
    return result

  }
  function darken() {
    var in_hex, out_hex, r, g, b;
    if(! out_text.val())
      in_hex = input_text.val();
    else
      in_hex = out_text.val();

    console.log(in_hex);
    var in_rgb = hexToRgb(in_hex);
    console.log(in_rgb);
    r = in_rgb[0] - (in_rgb[0] * 0.05);
    g = in_rgb[1] - (in_rgb[1] * 0.05);
    b = in_rgb[2] - (in_rgb[2] * 0.05);
    
    out_hex = rgbToHex(r, g, b);
    if (!is_proportional(in_hex, out_hex))
      out_hex = in_hex;
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