// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*< !--JavaScript để điều khiển mở rộng / thu nhỏ Sidebar-- >*/
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("mainContent");

    // Kiểm tra trạng thái Sidebar và chuyển đổi class 'collapsed'
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("collapsed");
}
