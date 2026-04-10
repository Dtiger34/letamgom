import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>Về Liên Tâm Gốm</h1>
          <p>Hoa sen từ trầm tích, chạm đến lòng người</p>
        </div>
      </div>

      <div className="container">
        <section className="about-story">
          <h2>Câu Chuyện Của Chúng Tôi</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Liên Tâm Gốm được hình thành từ quan niệm rằng gốm sứ không chỉ là vật phẩm mang giá trị sử dụng hay trang trí, mà còn là nơi lưu giữ văn hóa, tâm linh và chiều sâu tinh thần của con người Việt.
              </p>
              <p>
                Mỗi tác phẩm gốm là sự kết tinh của đất, thời gian và bàn tay người nghệ nhân, đồng thời phản ánh mối liên kết giữa con người và không gian sống.
              </p>
              <p>
                Tên gọi "Liên Tâm" mang ý nghĩa cốt lõi của dự án. Liên là hoa sen – họa tiết chủ đạo và biểu tượng tiêu biểu của gốm Chu Đậu, đại diện cho sự thanh cao và khả năng vươn lên từ trầm tích đất. Tâm là lòng người, nơi cảm nhận, chiêm nghiệm và cộng hưởng giá trị tinh thần của nghệ thuật. Sự kết hợp giữa Liên và Tâm thể hiện triết lý xuyên suốt của dự án: nghệ thuật chỉ thực sự có ý nghĩa khi chạm đến cảm xúc và nội tâm con người.
              </p>
              <p>
                Trong bối cảnh sản xuất công nghiệp ngày càng phát triển, nhiều giá trị của gốm thủ công truyền thống có nguy cơ bị mai một. Liên Tâm Gốm ra đời như một nỗ lực tái định vị gốm Chu Đậu, kết hợp kỹ thuật truyền thống với tư duy thiết kế đương đại, nhằm tạo ra những tác phẩm vừa mang giá trị thẩm mỹ, vừa có chiều sâu văn hóa và tinh thần.
              </p>
            </div>
            <div className="story-image">
              <img src="/image/banner-about.jpg" alt="Liên Tâm Gốm" />
            </div>
          </div>
        </section>

        <section className="about-inspiration">
          <h2>Lấy Cảm Hứng Từ</h2>
          <div className="inspiration-content">
            <p>
              Lấy cảm hứng từ trầm tích quý của vùng Chí Linh, nơi hội tụ giá trị địa chất, lịch sử và phong thủy, Liên Tâm Gốm xem mỗi lớp đất không chỉ là nguyên liệu, mà còn là ký ức văn hóa và năng lượng tích tụ qua thời gian.
            </p>
            <p>
              Thông qua kỹ thuật gốm truyền thống Chu Đậu, những trầm tích ấy được chuyển hóa thành tác phẩm nghệ thuật gốm phong thủy cao cấp, mang tính dẫn khí, tạo sự cân bằng và an định cho không gian sống.
            </p>
          </div>
        </section>

        <section className="about-philosophy">
          <h2>Triết Lý Thiết Kế</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Bảo Tồn Di Sản</h3>
              <p>
                Kỹ thuật gốm truyền thống Chu Đậu (Hải Dương) được lưu giữ và phát triển qua mỗi tác phẩm. Chúng tôi cam kết góp phần bảo tồn di sản văn hóa Việt Nam và ngôn ngữ thủ công truyền thống, chống lại sự mai một của những giá trị quý báu.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Kết Hợp Truyền Thống & Hiện Đại</h3>
              <p>
                Sự hòa quyện giữa kỹ thuật truyền thống và tư duy thiết kế đương đại tạo nên sự độc đáo, phù hợp với lối sống và thẩm mỹ của khách hàng hiện đại. Mỗi tác phẩm là cây cầu nối giữa quá khứ và hiện tại.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Tâm Linh & Văn Hóa</h3>
              <p>
                Mỗi sản phẩm mang ý nghĩa phong thủy và giá trị tinh thần sâu sắc. Thông qua các họa tiết hoa sen thanh lọc năng lượng, chúng tôi tạo sự cân bằng và an định cho không gian sống, kết nối con người với nội tâm của chính mình.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Phân Khúc Cao Cấp</h3>
              <p>
                Mỗi tác phẩm là độc bản hoặc phiên bản giới hạn được tạo nên với chất lượng cao cấp. Chúng tôi hướng tới phân khúc khách hàng trân trọng giá trị văn hóa, tính cá nhân hóa và sự bền vững.
              </p>
            </div>
          </div>
        </section>

        <section className="about-process">
          <h2>Quy Trình Sản Xuất</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Lựa Chọn Đất</h3>
              <p>Sử dụng đất từ Chí Linh, nơi hội tụ giá trị địa chất, lịch sử và phong thủy.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Thiết Kế</h3>
              <p>Thiết kế tác phẩm dựa trên lâu đài truyền thống và xu hướng đương đại.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Tạo Hình</h3>
              <p>Tạo hình thủ công bằng các kỹ thuật truyền thống của làng gốm Chu Đậu.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Hoàn Thiện</h3>
              <p>Trang trí và vẽ chi tiết, mang tính cá nhân hóa cho mỗi tác phẩm.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Nung Lửa</h3>
              <p>Nung ở nhiệt độ cao để tạo độ bền vững và vẻ đẹp thẩm mỹ cuối cùng.</p>
            </div>
          </div>
        </section>

        <section className="about-values">
          <h2>Những Giá Trị Cốt Lõi</h2>
          <ul className="values-list">
            <li><strong>Tính Cá Nhân Hóa:</strong> Mỗi tác phẩm độc bản được thiết kế riêng biệt, phù hợp với nhu cầu, sở thích và không gian sống độc đáo của khách hàng.</li>
            <li><strong>Bền Vững:</strong> Cam kết sử dụng nguyên liệu tự nhiên từ Chí Linh và quy trình sản xuất thân thiện với môi trường, bảo vệ tài nguyên cho thế hệ tương lai.</li>
            <li><strong>Kết Nối Tinh Thần:</strong> Kết nối con người với không gian sống thông qua giá trị phong thủy, mang năng lượng dẫn khí tích cực và sự an định đến mỗi ngôi nhà.</li>
            <li><strong>Sự Chân Thành:</strong> Mỗi tác phẩm được tạo nên với tâm huyết, chân thành và sự kính trọng đối với nghề thủ công truyền thống.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
