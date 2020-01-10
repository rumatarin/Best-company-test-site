import "./../sass/main.scss";
import "jquery";
import "svgxuse";
import $ from "jquery";
import "./slider.js";
window.jQuery = $;
window.$ = $;

$(document).ready(function() {
  // form validation

  $(".form").submit(function(e) {
    e.preventDefault();
    let $name = $("#name").val();
    let $tel = $("#tel").val();
    let $email = $("#email").val();
    let $placeholder = "Поле обязательно для заполнения";

    $(".error").removeAttr("placeholder");
    $(".error").removeClass();

    if ($name.length < 1) {
      $("#name").addClass("error");
      $(".error").attr("placeholder", $placeholder);
    }
    if ($tel.length < 1) {
      $("#tel").addClass("error");
      $(".error").attr("placeholder", $placeholder);
    }
    if ($email.length < 1) {
      $("#email").addClass("error");
      $(".error").attr("placeholder", $placeholder);
    }
    if ($email.length < 1) {
      $("#email").addClass("error");
      $(".error").attr("placeholder", $placeholder);
    }
  });

  // feedback form reweal
  const $feedbackForm = $(".feedback");
  const $feedbackOpenBtn = $(".header__feedback-link");
  const $feedbackCloseBtn = $(".form__closeBtn");
  const $feedbackOverlay = $(".feedback__overlay");

  $feedbackOpenBtn.on("click", function(e) {
    e.preventDefault();
    $feedbackForm.addClass("feedback__active");
  });

  $feedbackCloseBtn.on("click", function(e) {
    $feedbackForm.removeClass("feedback__active");
  });

  $feedbackOverlay.on("click", function(e) {
    $feedbackForm.removeClass("feedback__active");
  });
});
