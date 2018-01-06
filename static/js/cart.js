"use strict";var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var addToCartBtn=document.getElementById("detail-add-to-cart"),productId=document.getElementById("detail-product-id"),errorText=document.getElementById("detail-product-error"),deleteFromCartBtn=document.getElementsByClassName("cart-delete-item"),selectedProductSize=document.getElementsByClassName("size-item"),orderName=document.getElementById("order-user-name"),orderEmail=document.getElementById("order-user-email"),orderTelephone=document.getElementById("order-user-telephone"),orderComment=document.getElementById("order-user-comment"),orderBtnSend=document.getElementById("order-user-submit"),order=void 0,id=void 0!=productId?productId.innerText:void 0,currentProductSize=void 0;0!=selectedProductSize.length&&(currentProductSize=!0===selectedProductSize[0].checked?selectedProductSize[0].innerText:void 0);function getCurrentSize(e){var t=document.getElementsByClassName(e),r=[],n=!0,o=!1,a=void 0;try{for(var i,d=t[Symbol.iterator]();!(n=(i=d.next()).done);n=!0){var l=i.value;l.checked&&r.push(l.innerText)}}catch(e){o=!0,a=e}finally{try{!n&&d.return&&d.return()}finally{if(o)throw a}}return r.length>0?r:null}function errorSet(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.innerText=t.length>0?t:""}function getSpan(e,t){var r=!0,n=!1,o=void 0;try{for(var a,i=e.childNodes[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var d=a.value,l=t.toUpperCase();if(d.nodeName==l)return d}}catch(e){n=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw o}}}if(selectedProductSize){var _iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _step3,_loop=function(){var e=_step3.value;e.control.addEventListener("change",function(t){currentProductSize=!0===t.target.checked?t.target.labels[0].innerText:null,e.control.classList.contains("item_in_cart")?(addToCartBtn.classList.add("in-cart"),getSpan(addToCartBtn,"span").innerText="Удалить из корзины"):(addToCartBtn.classList.remove("in-cart"),getSpan(addToCartBtn,"span").innerText="Добавить в корзину")})},_iterator3=selectedProductSize[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0)_loop()}catch(e){_didIteratorError3=!0,_iteratorError3=e}finally{try{!_iteratorNormalCompletion3&&_iterator3.return&&_iterator3.return()}finally{if(_didIteratorError3)throw _iteratorError3}}}if(addToCartBtn)try{addToCartBtn.addEventListener("click",function(){null!=currentProductSize?addToCartBtn.classList.contains("in-cart")?$.ajax({url:"../cart/deleteProductInCart",type:"POST",data:{id:id,size:currentProductSize}}).done(function(){window.location.reload()}).fail(function(){errorSet(errorText,"Ошибка при удалении из корзины")}):$.ajax({url:"../cart/addProduct",type:"POST",data:{id:id,size:currentProductSize}}).done(function(){window.location.reload()}).fail(function(){errorSet(errorText,"Ошибка добавления в корзину")}):errorSet(errorText,"Выберите размер")})}catch(e){errorSet(errorText,"Ошибка")}if(deleteFromCartBtn)try{for(var i=0;i<deleteFromCartBtn.length;i++)deleteFromCartBtn[i].addEventListener("click",function(e){var t=e.target.dataset,r=t.id,n=t.size;$.ajax({url:"../cart/deleteProductInCart",type:"POST",data:{id:r,size:n}}).done(function(){window.location.reload()}).fail(function(){console.log("error")})})}catch(e){console.log(e)}var Validation=function(){function e(){_classCallCheck(this,e),this.emailPattern=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,this.namePattern=/^[a-zA-ZА-Яа-яЁё]+$/i,this.telephonePattern=/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,this.textPattern=/^[a-zA-ZА-Яа-яЁё\d\s%,.?!#$№:*()]+$/g}return _createClass(e,[{key:"errorText",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{if(e){document.getElementById(e).innerText=t}}catch(e){console.log(e)}}},{key:"validationEmail",value:function(e){var t=this;return new Promise(function(r,n){e.match(t.emailPattern)?r(e):n("Ошибка при заполнении поля Почта")})}},{key:"validationName",value:function(e){var t=this;return new Promise(function(r,n){"string"==typeof e&&(e.match(t.namePattern)&&e.length>3&&e.length<=40?r(e):n("Ошибка при заполнении поля Имя"))})}},{key:"validationText",value:function(e){var t=this;return new Promise(function(r,n){"string"==typeof e&&(e.match(t.textPattern)&&e.length>3&&e.length<=500?r(e):n("Ошибка при заполнении поля Комментарий"))})}},{key:"validationTelephone",value:function(e){var t=this;return new Promise(function(r,n){"string"==typeof e&&(e.match(t.telephonePattern)?r(e):n("Ошибка при заполнении поля Контактный телефон"))})}}]),e}(),Order=function(e){_inherits(t,Validation);function t(e,r,n,o,a,i){_classCallCheck(this,t);var d=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return d.url=i,d.orderName=e,d.orderEmail=r,d.orderTelephone=n,d.orderComment=o,d.orderBtnSend=a,d}return _createClass(t,[{key:"init",value:function(){var e=this;this.orderBtnSend.addEventListener("click",function(t){t.preventDefault(),e.orderCheck()})}},{key:"getEmail",value:function(){if(void 0!=this.orderEmail&&0!=this.orderEmail.value.length)return this.orderEmail.value;this.errorText("error","Заполните поле Почта")}},{key:"getName",value:function(){if(void 0!=this.orderName&&0!=this.orderName.value.length)return this.orderName.value;this.errorText("error","Заполните поле Имя")}},{key:"getTelephone",value:function(){if(void 0!=this.orderTelephone&&0!=this.orderTelephone.value.length)return this.orderTelephone.value;this.errorText("error","Заполните поле Контактный телефон")}},{key:"getText",value:function(){if(void 0!=this.orderComment&&0!=this.orderComment.value.length)return this.orderComment.value;this.errorText("error","Заполните поле Комментарий")}},{key:"orderSend",value:function(e,t){return new Promise(function(r,n){$.ajax({url:e,type:"POST",data:{data:t}}).done(function(e){var t=JSON.parse(e);r(parseInt(t))}).fail(function(){rej("Ошибка при отправке данных")})})}},{key:"orderCheck",value:async function(){try{var e={name:await this.validationName(this.getName()),email:await this.validationEmail(this.getEmail()),telephone:await this.validationTelephone(this.getTelephone()),text:await this.validationText(this.getText())};this.errorText("error","");1==await this.orderSend(this.url,e)?window.location="/":this.errorText("error","Ошибка при отправке данных")}catch(e){this.errorText("error",e)}}}]),t}();orderName&&orderEmail&&orderTelephone&&orderComment&&orderBtnSend&&(order=new Order(orderName,orderEmail,orderTelephone,orderComment,orderBtnSend,"addOrder")).init();