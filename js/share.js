// share.js
// 功能：在特定 <ol> 的每个 <li> 后自动添加分享图标
// 点击图标后：复制链接 + 页面跳转 + 显示底部提示
// 样式与 Jiaxin 的 base.css 完全一致（含 tooltip 风格）

(function initCopyToast() {
    // 创建提示框并加入页面底部
    const toast = document.createElement('div');
    toast.id = 'copy-toast';
    toast.className = 'copy-toast';
    toast.textContent = 'Copied to clipboard';
    document.body.appendChild(toast);
})();

// 显示底部“Copied to clipboard”提示
function showCopyToast() {
    const toast = document.getElementById('copy-toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// 在特定 <ol class="share-enabled"> 中添加分享按钮
function enableSharingOnList(selector = 'ol.share-enabled') {
    // document.querySelectorAll(`${selector} > li`).forEach(li => {
    // 同时匹配 ol 和 ul 下的 li
    document.querySelectorAll("ol.share-enabled > li, ul.share-enabled > li").forEach(li => {
        const anchorId = li.id;
        if (!anchorId) return;

        const fullUrl = `${location.origin}${location.pathname}#${anchorId}`;

        // 创建 <i> 元素作为图标，并添加 tooltip
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-share-nodes share-tooltip';
        icon.setAttribute('data-tooltip', 'Click to copy the link');

        icon.onclick = () => {
            navigator.clipboard.writeText(fullUrl).then(() => {
                showCopyToast();
            });
            location.hash = anchorId;
        };

        li.appendChild(icon);
    });
}

// 页面加载完毕后自动执行
document.addEventListener('DOMContentLoaded', () => {
    enableSharingOnList(); // 默认作用于 <ol class="share-enabled">
});
