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
function addBilibiliIcon(containerId, href, tooltip = "Watch demo videos on Bilibili", label = "") {
    createIconLink(href, tooltip, "fa-brands fa-bilibili", containerId, label);
}
function addCodeIcon(containerId, href, tooltip = "Source code for the paper", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-code", containerId, label);
}
function addDoiIcon(containerId, href, tooltip = "DOI link", label = "") {
    createIconLink(href, tooltip, "ai ai-doi ai-1x", containerId, label);
}
function addErrataIcon(containerId, href, tooltip = "Errata for this work", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-bug", containerId, label);
}

function addGithubIcon(containerId, href, tooltip = "Link to GitHub repository", label = "") {
    createIconLink(href, tooltip, "fa-brands fa-github", containerId, label);
}

function addHighlightIcon(containerId, href, tooltip = "Highlighted by the journal", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-fire", containerId, label);
    const container = document.getElementById(containerId);
    if (container && container.lastElementChild) {
        // 设置整个链接的颜色，图标和文字都会继承该颜色
        // container.lastElementChild.style.color = "var(--highlight-red)";
        const highlightRed = getComputedStyle(document.documentElement)
            .getPropertyValue('--highlight-red')
            .trim();
        container.lastElementChild.style.color = highlightRed;
    }
}

function addLinkIcon(containerId, href, tooltip = "Link to the website", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-link", containerId, label);
}

function addNewsIcon(containerId, href, tooltip = "News", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-bullhorn", containerId, label);
    const container = document.getElementById(containerId);
    if (container && container.lastElementChild) {
        // 设置整个链接的颜色，图标和文字都会继承该颜色
        // container.lastElementChild.style.color = "var(--highlight-red)";
        const highlightRed = getComputedStyle(document.documentElement)
            .getPropertyValue('--highlight-red')
            .trim();
        container.lastElementChild.style.color = highlightRed;
    }
}


function addOverleafIcon(containerId, href, tooltip = "Link to Overleaf project", label = "") {
    createIconLink(href, tooltip, "ai ai-overleaf", containerId, label);
}

function addPdfIcon(containerId, href, tooltip = "Full text", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-file-pdf", containerId, label);
}
function addPosterIcon(containerId, href, tooltip = "Poster", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-chalkboard", containerId, label);
}


function addSlideIcon(containerId, href, tooltip = "Presentation slides", label = "") {
    createIconLink(href, tooltip, "fa-brands fa-slideshare", containerId, label);
}

function addSuppIcon(containerId, href, tooltip = "Supplementary materials", label = "") {
    createIconLink(href, tooltip, "fa-solid fa-paperclip", containerId, label);
}

function addYoutubeIcon(containerId, href, tooltip = "Watch demo videos on YouTube", label = "") {
    createIconLink(href, tooltip, "fa-brands fa-youtube", containerId, label);
}


function addZenodoIcon(containerId, href, tooltip = "Raw data on Zenodo", label = "") {
    createIconLink(href, tooltip, "ai ai-zenodo ai-2x", containerId, label);
}