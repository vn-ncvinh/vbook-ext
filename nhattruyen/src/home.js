function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: "http://nhattruyengo.com//tim-truyen", script: "gen.js"},
        {title: "Truyện mới", input: "http://nhattruyengo.com//tim-truyen?status=-1&sort=15", script: "gen.js"},
        {title: "Top all", input: "http://nhattruyengo.com//tim-truyen?status=-1&sort=10", script: "gen.js"},
        {title: "Top tháng", input: "http://nhattruyengo.com//tim-truyen?status=-1&sort=11", script: "gen.js"},
        {title: "Top tuần", input: "http://nhattruyengo.com//tim-truyen?status=-1&sort=12", script: "gen.js"},
        {title: "Top ngày", input: "http://nhattruyengo.com//tim-truyen?status=-1&sort=13", script: "gen.js"},
        {title: "Theo dõi", input: "http://nhattruyengo.com//tim-truyen?status=-1&sort=20", script: "gen.js"},
        {title: "Bình luận", input: "http://nhattruyengo.com//tim-truyen?status=-1&sort=25", script: "gen.js"}
    ]);
}