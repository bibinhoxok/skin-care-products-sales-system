const blogPosts = [
    {
      id: 1,
      title: "Quy Trình Chăm Sóc Da Cơ Bản Cho Người Mới Bắt Đầu",
      excerpt:
        "Hướng dẫn chi tiết về quy trình chăm sóc da cơ bản dành cho người mới, giúp bạn xây dựng thói quen chăm sóc da đúng cách từ đầu.",
      date: "15/03/2024",
      readTime: "8 phút",
      author: "Minh Tâm",
      tags: ["quyTrinhDuongDaSang", "quyTrinhDuongDaToi", "suaRuaMat", "toner"],
      videoId: "MihWtTw3Lk4",
      details: {
        skinTypes: ["Mọi loại da"],
        steps: [
          "Làm sạch da bằng sữa rửa mặt phù hợp",
          "Sử dụng toner để cân bằng độ pH",
          "Dưỡng ẩm giúp da mềm mịn",
          "Bảo vệ da với kem chống nắng vào ban ngày",
        ],
        recommendations: ["Dùng sản phẩm dịu nhẹ", "Không rửa mặt quá nhiều lần"],
      },
    },
    {
      id: 2,
      title: "Cách Chọn Kem Chống Nắng Phù Hợp Với Từng Loại Da",
      excerpt:
        "Tìm hiểu cách chọn kem chống nắng phù hợp với từng loại da khác nhau, từ da khô, da dầu đến da hỗn hợp và da nhạy cảm.",
      date: "10/03/2024",
      readTime: "6 phút",
      author: "Thu Hà",
      tags: ["kemChongNang", "daKho", "daDau"],
      videoId: "ic7UbSunYnY",
      details: {
        skinTypes: ["Da dầu", "Da khô", "Da nhạy cảm"],
        sunscreenTypes: {
          physical: "Chứa Zinc Oxide và Titanium Dioxide, tạo lớp bảo vệ tự nhiên.",
          chemical: "Hấp thụ tia UV, ít để lại vệt trắng trên da.",
        },
        recommendations: [
          "Da dầu: Dùng kem chống nắng kiềm dầu, không chứa cồn khô.",
          "Da khô: Chọn loại có thành phần dưỡng ẩm như Hyaluronic Acid.",
          "Da nhạy cảm: Dùng kem chống nắng vật lý để tránh kích ứng.",
        ],
      },
    },
    {
      id: 3,
      title: "Bí Quyết Trị Mụn Hiệu Quả Với Các Sản Phẩm Tự Nhiên",
      excerpt:
        "Khám phá các phương pháp trị mụn hiệu quả bằng các sản phẩm tự nhiên, an toàn và dễ tìm trong nhà bếp của bạn.",
      date: "05/03/2024",
      readTime: "7 phút",
      author: "Thanh Thảo",
      tags: ["dieuTriMun", "serum", "daDau"],
      videoId: "_koe-l9RBb0",
      details: {
        causes: ["Tắc nghẽn lỗ chân lông", "Dầu thừa", "Vi khuẩn P.acnes"],
        naturalRemedies: [
          "Mật ong: Chống vi khuẩn, làm dịu da.",
          "Nghệ: Chống viêm, làm mờ thâm.",
          "Trà xanh: Giảm dầu thừa và se khít lỗ chân lông.",
        ],
      },
    },
    {
      id: 4,
      title: "Cách Chăm Sóc Da Trong Mùa Đông Khô Hanh",
      excerpt:
        "Những mẹo hữu ích giúp bảo vệ và dưỡng ẩm cho làn da của bạn trong những tháng mùa đông khô hanh và lạnh giá.",
      date: "01/03/2024",
      readTime: "5 phút",
      author: "Hoàng Anh",
      tags: ["daKho", "kemDuong", "dauDuong"],
      videoId: "PAp-cycebkk",
      details: {
        challenges: ["Da mất nước", "Bong tróc", "Nứt nẻ"],
        careTips: [
          "Uống đủ nước để giữ ẩm từ bên trong.",
          "Sử dụng kem dưỡng ẩm chứa ceramides.",
          "Tránh nước nóng khi rửa mặt, vì có thể làm mất độ ẩm tự nhiên.",
        ],
      },
    },
    {
      id: 5,
      title: "Hướng Dẫn Tẩy Trang Đúng Cách Cho Từng Loại Da",
      excerpt:
        "Tìm hiểu cách tẩy trang hiệu quả và an toàn cho từng loại da, giúp loại bỏ hoàn toàn lớp trang điểm và bụi bẩn.",
      date: "25/02/2024",
      readTime: "6 phút",
      author: "Lan Anh",
      tags: ["tayTrang", "suaRuaMat"],
      videoId: "KvQfrR_lHoM",
      details: {
        skinTypes: ["Da dầu", "Da khô", "Da nhạy cảm"],
        bestProducts: {
          oil: "Dành cho da khô, giúp hòa tan lớp trang điểm.",
          micellar: "Dành cho da nhạy cảm, làm sạch nhẹ nhàng.",
          foam: "Dành cho da dầu, giúp kiểm soát bã nhờn.",
        },
      },
    },
    {
      id: 6,
      title: "Cách Sử Dụng Toner Hiệu Quả Trong Quy Trình Chăm Sóc Da",
      excerpt:
        "Khám phá vai trò quan trọng của toner trong quy trình chăm sóc da và cách sử dụng đúng để đạt hiệu quả tối ưu.",
      date: "20/02/2024",
      readTime: "5 phút",
      author: "Minh Ngọc",
      tags: ["toner", "quyTrinhDuongDaSang", "quyTrinhDuongDaToi"],
      videoId: "5epG_Ku9LbI",
      details: {
        benefits: [
          "Cân bằng độ pH của da.",
          "Hỗ trợ hấp thụ các sản phẩm dưỡng da sau đó.",
          "Làm sạch sâu, loại bỏ cặn bẩn còn sót lại.",
        ],
        applicationTips: ["Dùng bông tẩy trang thấm toner, lau nhẹ nhàng.", "Tránh cồn khô nếu da nhạy cảm."],
      },
    },
    {
      id: 7,
      title: "Bí Quyết Trị Thâm Mụn Hiệu Quả Tại Nhà",
      excerpt:
        "Những phương pháp trị thâm mụn hiệu quả mà bạn có thể thực hiện tại nhà với các nguyên liệu dễ tìm.",
      date: "15/02/2024",
      readTime: "7 phút",
      author: "Thanh Tâm",
      tags: ["dieuTriTham", "dieuTriMun", "serum"],
      videoId: "Qm7z6AlT6J4",
      details: {
        causes: ["Tăng sắc tố sau viêm", "Tia UV làm thâm nặng hơn"],
        treatments: [
          "Vitamin C: Giúp làm sáng da, mờ thâm.",
          "Niacinamide: Giảm viêm và làm đều màu da.",
          "AHA/BHA: Tẩy tế bào chết, kích thích tái tạo da.",
        ],
      },
    },
    {
      id: 8,
      title: "Cách Tẩy Tế Bào Chết An Toàn Cho Da Nhạy Cảm",
      excerpt:
        "Hướng dẫn cách tẩy tế bào chết nhẹ nhàng và an toàn cho làn da nhạy cảm, giúp da sáng mịn mà không gây kích ứng.",
      date: "10/02/2024",
      readTime: "6 phút",
      author: "Hà Linh",
      tags: ["tayTeBaoChet", "daKho"],
      videoId: "NCYXX4-ulm0",
      details: {
        exfoliationTypes: {
          physical: "Sử dụng hạt scrub nhẹ, tránh chà xát mạnh.",
          chemical: "Dùng AHA hoặc BHA để làm sạch sâu mà không gây tổn thương.",
        },
        recommendations: ["Tẩy tế bào chết 1-2 lần/tuần", "Tránh vùng da nhạy cảm như quanh mắt."],
      },
    },
  ];
  
  export default blogPosts;