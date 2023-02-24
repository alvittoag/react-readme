import assets from "../../constant/assets";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";

type Props = {
  image: string;
  title: string;
};

const Book = ({ image, title }: Props) => {
  const [liked, setLiked] = useState<boolean>(false);
  const isLogin = useAppSelector((state) => state.user.isLogin);

  return (
    <div>
      <img src={image} alt="buku" />
      <h1 className="text-[20px] mt-[24px]">{title}</h1>
      <div className="flex items-center gap-7">
        <button className="mt-[20px] bg-[#313552] text-[24px] px-[40px] text-white py-2">
          Baca Sinopsis
        </button>
        <div className="mt-5" onClick={() => setLiked((liked) => !liked)}>
          {isLogin ? (
            <img src={assets.liked} alt="" />
          ) : liked ? (
            <img src={assets.liked} />
          ) : (
            <img src={assets.like} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
