// js/icons.js

function createIconLink(href, tooltip, iconClass, containerId, labelText = "") {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn("Container not found:", containerId);
        return;
    }

    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.className = "tooltip-link";
    a.setAttribute("data-tooltip", tooltip);

    const icon = document.createElement("i");
    icon.className = iconClass;
    icon.style.verticalAlign = "middle";

    a.appendChild(icon);

    if (labelText) {
        a.appendChild(document.createTextNode(" " + labelText));
    }

    container.appendChild(a);
}

// 快捷封装函数：根据内容类型生成不同图标
function addDoiIcon(containerId, href, tooltip = "DOI link", label = "") {
    createIconLink(href, tooltip, "ai ai-doi ai-1x", containerId, label);
}
function addBilibiliIcon(containerId, href, tooltip = "Watch demo videos on Bilibili", label = "") {
    createIconLink(href, tooltip, "fa-brands fa-bilibili", containerId, label);
}


function addZenodoIcon(containerId, href, tooltip = "Raw data on Zenodo", label = "") {
    createIconLink(href, tooltip, "ai ai-zenodo ai-2x", containerId, label);
}

function addYoutubeIcon(containerId, href, tooltip = "Watch demo videos on YouTube", label = "") {
    createIconLink(href, tooltip, "fa-brands fa-youtube", containerId, label);
}

function addPdfIcon(containerId, href, tooltip = "Full text", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-file-pdf", containerId, label);
}

function addSuppIcon(containerId, href, tooltip = "Supplementary materials", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-paperclip", containerId, label);
}

function addNewsIcon(containerId, href, tooltip = "News", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-bullhorn", containerId, label);
}
