import Image from "next/image";
import React from "react";

function CommitmentBox({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="flex flex-col max-w-[400px] rounded-xl p-5 px-8 min-h-[400px]  border-1 border-white text-white">
      <Image
        src="/homeIcon.svg"
        alt="home icon"
        width={50}
        height={50}
        className="mb-4 ml-2"
      />
      <div
        className="text-3xl mt-3 mb-6 font-classica"
        dangerouslySetInnerHTML={{ __html: heading }}
      ></div>
      <div className="text-xl/relaxed text-[#918F8F] ">{description}</div>
    </div>
  );
}

export default CommitmentBox;
