function execute(url) {
    const doc = Http.get(url).html()
    var coverImg = doc.select(".detail-info img").first().attr("src");
    if (coverImg.startsWith("//")) {
        coverImg = "http:" + coverImg
    }
    return Response.success({
        name: doc.select("h1.title-detail").first().text(),
        cover: coverImg,
        author: doc.select(".author a").first().text(),
        description: doc.select(".detail-content p").html(),
        detail: doc.select(".list-info").html(),
        host: "http://nhattruyengo.com/",
        ongoing: doc.select(".detail-info .status").html().indexOf("Đang tiến hành") >= 0
    });
}