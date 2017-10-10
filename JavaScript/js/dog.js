define([
  'dojo/_base/declare', 'dojo/_base/lang'
],
function(
  declare, lang
)
{
  /* Constants go here*/

  /**
   * User Module Class
   * @class dog
   */
  var dog = declare([],
  {

    constructor: function(/**/ kwArgs)
    {
      // Mix this object into the kwArgs given into the constructor
      lang.mixin(this, kwArgs);
    },
    /*
    * DON NOT EDIT THIS SPEAK FUNCTION AND DON'T MAKE A NEW ONE IN THIS FILE
    */
    speak: function()
    {
      // DONT EDIT THIS RETURN!!!
      return "Meow";
    }    
  });
  return dog;
});
