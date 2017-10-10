define([
  'dojo/_base/declare', 'dojo/_base/lang',
  '../js/dog.js'
],
function(
  declare, lang,
  dog
)
{
  /* Constants go here*/

  /**
   * User Module Class
   * @class dog
   */
  var xena = declare([dog],
  {

    name: "Xena",
    color: "brown",
    weight: 8,
    getWeight: function()
    {
      return this.weight + " pounds";
    }

  });
  return xena;
});
