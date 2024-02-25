// Hover on mouse in and out
exports.MouseOver = (e) => {
  e.target.style.color = "blue";
};

exports.MouseOut = (e) => {
  e.target.style.color = "";
};

exports.MouseOverImage = (e)=>{
  e.target.style.padding = "0px"
}
exports.MouseOutImage = (e)=>{
  e.target.style.padding = "1px"
}
