function update(value) {
    //Type the code here.
    document.myForm.screen.value += value;
  
  }
  
  function result(VALUE) {
    document.myForm.screen.value = eval(document.myForm.screen.value);
  }
  
  function form_reset() {
    //Type the code here.
    document.myForm.screen.value = '';
  }

  function back() {
    var value = document.myForm.screen.value;
    document.myForm.screen.value = value.substr(0, value.length - 1);
}
