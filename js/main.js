// Find hamburger menu
// add event click to Toggle class open
// toggle:thêm hoặc xóa


const hamburgerMenu = document.getElementById('hamburgerMenu');

// hàm kiểm tra hamburger menu có dữ liệu
//hamburgerMenu.addEventListener(tên sự kiện,hàm)
if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function () {
        //do when hamburgerMenu clicked
        hamburgerMenu.classList.toggle('open');

        const menuList = document.getElementById('menuList');
        if (menuList) {
            menuList.classList.toggle('open');

        }
    });
}

// Khi thực hiện scroll
window.onscroll = function () {
    scrollToTop();
};

// hàm scroll
function scrollToTop() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById('myButton').style.opacity = '1';
    } else {
        document.getElementById('myButton').style.opacity = '0';
    }
}

document.getElementById('myButton').addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});