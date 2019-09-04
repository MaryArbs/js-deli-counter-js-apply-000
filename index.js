var katzDeliLine = [];
function takeANumber (katzDeliLine, name) {
katzDeliLine.push(name)
return "Welcome, " + name + ". You are number " + katzDeliLine.length + "in line."
takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
}
function nowServing(x) {
  if (x.length ===o) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice (0,1);
    return "Currently serving " + name + ".";
  }
}
function currentline (x) {
  var line = []
  if (x.length===0) {
    return "The line is currently empty."
  } else {
    for (i = 0; i < x.length; i++) {
      line += (i + 1) + ". " + x [i] + ","
    }
    line = line.slice (0, line.length -2)
return "The line is currently:" + line
}
}
