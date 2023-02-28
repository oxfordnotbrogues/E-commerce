(function($) {
     $.shop = function(element) {
        this.$element = $(element); //top level element
        this.init();
     };

     $.shop.prototype = {
        init: function() {
            //initializes properties and methods
        }
     };
     $(function() {
            var shop = new $.shop ("#site"); //object
     });
})(jQyery);
//the object's instance is created when the dom is ready, we can test that everything has worked fine as follows:
$(function() {
var shop = new $.shop("#site");
console.log(shop.$element );
})
//lets define the object properties
$.shop.prototype = {
   init: function() {
      // properties
      this.cartPrefix = "winery-"; //prefix string to be prepended to the carts name in session storage
      this.cartName = this.cartPrefix + "cart"; //cart's name in session storage
      this.shippingRates = this.cartPrefix + " shippingRates"; // shippingRates key in sesion storage
      this.total = this.cartPrefix + "total"; //total key int he session storage
      this.storage = sessionStorage; // shortcut to sessionstorage object

      this.$formAddToCart = this.$element.find("form.add-to-cart"); //forms for adding items to the cart
      this.$formCart = this.$element.find("#shopping-cart"); //shopping cart form
      this.$checkoutCart = this.$element.find("#checkout-cart"); //checkout form cart
      this.$checkoutOrderForm = this.$element.find("#checkout-order-form"); // checkout user details form
      this.$shipping = this.$element.find("#sshipping"); // elements that displays the shipping rates
      this.$subTotal = this.$element.find("#stotal"); //element that displays the subtotal charges
      this.$shoppingCartActions = this.$element.find("shopping-cart-actions"); //cart actions links
      this.$updateCartBtn = this.$shoppingCartActions.find("#update-cart"); //update cart btn
      this.$emptyCartBtn = this.$shoppingCartActions.find("empty-cart"); //empty cart button
      this.$userDetails = this.$element.find("#user-details-content"); //element that displays the users information
      this.$paypalForm = this.$element.find("#paypal-form"); //paypal form
      this.currency = "$euro;"; //HTML entity of the currency to be displayed in layout
      this.currencyString = "$" //currency symbol as text string
      this.paypalCurrency = "Doll" //paypals currency code
      this.paypalBusinessEmail = "your business@email.com;" // your paypals business accounts email address
      this.paypalURL = "https://www.sandbox.paypal.com/cgi-bin/webscr" // url of the paypal form
      //objects containing pattrns for form validation
      /*this.requiredFields = {
         expression: {
            value: /^([w-.] +) @((?:[w]+.)+)([a-z]){2,4}$/
      
         },
         str: {
            value: ""
         }
      };
   }
};*/
//to check whether a jQuery element exists, simply test the length property
if ($element.length) {
   //the element exists
}
//private method (helpers)#
// the first private method _emptyCart simply empties the current session storage in the browser
$.shop.prototype = {
   //empties sesion storage
   _emptyCart: function() {
      this.storage.clear();
   }
};
//to format a number by a set of decimal places, we implement the _formatNumber() method:
formstNumber: function format( num, places) {
var n = num.toFixed(places);
return n;
}
//because not all of the prices in our pages are contained in data attributes, we
// need a specialized method to extract the numeric portion of  string from text nodes.v this method is names extractPrice();
_extractPrice: function extract(element) {
var self = this;
var text = element.text();
var price = text.replace(self.currencyString, "").replace("", "");
return price;
}
//above self is a reference to the $.shop object. you can further bulletproof this method by adding a further routine that strips out all trailing white space
var text = $.trim(element.text());
// jQuery's .trim() method removes all new lines, white spaces(including non-breaking spaces)
// we need two methods to convert strings to numbers and numbers nto strings. this is necessary to perform calculations and display the results on our pages

_convertString: function convert (numstr) {
   var num;
   if ( /^[-+]?[0-9]+.[0-9]+$/.test(numstr) ) {
      num = parseFloat(numstr);
   } else if(/^d+$/.test(numstr) ) {
      num = parseInt(numstr);
   } else {
      num = number(numstr);
   } 
   if ( !NaN(num) ) {
      return num;
   } else {
      console.warn(numstr + "cannot be converted into a number");
      return false;
   }
}
 _convertNumber: function cover(n) {
   var str = n.toString();
   return str;
 }
 //the next step is to define two methods to convert a javascript object into a JSON string and a json string back into a javascript object:
 _toJsonObject : function json(str) {
   var obj = json.parse(str);
   return obj;
 };
 _toJsonString :  function toJss(obj) {
   var str = json.stringify(obj);
   return str;
 }

