(function($){
  /**
   * Finds the first input with the autofocus property and focuses it.
   */
  $.fn.autofocus = function jQuery_fn_autofocus(){
    this.find(':input:visible[autofocus]').first().focus();
    return this;
  };
})(jQuery);
