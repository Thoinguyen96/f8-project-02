const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const list = $(".feedback-list");
const item = $$(".feedback-item");
const back = $(".feedback__btn-back");
const next = $(".feedback__btn-next");
let index = 0;
back.addEventListener("click", function () {
    index = index - 1;
    if (index < 0) {
        index = item.length - 1;
    }
    list.style.right = index * 100 + "%";
});
next.addEventListener("click", function () {
    index = index + 1;
    if (index > item.length - 1) {
        index = 0;
    }
    list.style.right = index * 100 + "%";
});
// làm phần Our Blog

const blogListAll = $(".blog-list-all");
const blogList = $$(".blog-list");
const blogDot = $$(".blog .dot");
const blogDotActive = $(".blog .dot.active");

blogDot.forEach((dot, index) => {
    dot.onclick = function () {
        $(".blog .dot.active").classList.toggle("active");
        dot.classList.add("active");
        blogListAll.style.right = index * 100 + "%";
    };
});
// slide phần Our popular courses
const popularBack = $(".popular-top .controls-btn-back");
const popularNext = $(".popular-top .controls-btn-next");

const courseListAll = $(".course-list-all");
const courseList = $$(".course-list");
console.log(popularNext);
popularBack.onclick = function () {
    index = index - 1;
    if (index < 0) {
        index = courseList.length - 1;
    }
    courseListAll.style.right = index * 100 + "%";
};
popularNext.onclick = function () {
    index = index + 1;
    if (index > courseList.length - 1) {
        index = 0;
    }
    courseListAll.style.right = index * 100 + "%";
};
