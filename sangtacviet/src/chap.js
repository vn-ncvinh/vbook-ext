function execute(url) {
    var browser = Engine.newBrowser()
    browser.launch(url + '/', 20000)
    browser.waitUrl(".*?sajax=readchapter.*?", 20000)
    const doc = browser.html(2000)
    var content = doc.select("#maincontent").first().html();
    var content = content.replace(/&(amp|quot|lt|gt);/g, "");
    var content = content.replace(/&nbsp;/g, " ");
    var content = content.replace(/(nbsp|amp|quot|lt|gt|bp);/g, "");
    var content = content.replace("@Bạn đang đọc bản lưu trong hệ thống", "");
    var content = content.replace("UUKANSHU đọc sách www.uukanshu.com", "");
    var content = content.replace("69 sách a www.69shu.org, đổi mới nhanh nhất Chương mới nhất!", "");
    var content = content.replace(/<\/?i.*?>/g, "");
    var content = content.replace(/\s{2,}/g, " ");
    var content = content.replace(/<div\s+class="ad_content">[\S\s]*?<\/div>/gi, " ");
    browser.close()
    return Response.success(content);
}