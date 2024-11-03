import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Tạp chí" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Orebi</span>{" "}
          là nơi bạn có thể tìm thấy những bài viết chuyên sâu về xu hướng thời trang và phong cách sống. Chúng tôi cam kết mang đến những nội dung bổ ích và truyền cảm hứng, giúp bạn khám phá và thể hiện cá tính của mình một cách tự tin. Hãy cùng khám phá những chủ đề thú vị và làm mới phong cách của bạn mỗi ngày!
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Tiếp tục mua sắm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
