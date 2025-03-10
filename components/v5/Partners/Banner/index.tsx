import Image from 'next/image'

const Banner = () => {
  function handleClickJoin() {
    const usernameInput = document.getElementById('username')
    if (usernameInput) {
      usernameInput.focus()
      usernameInput.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      })
    }
  }

  return (
    <div className="flex flex-col w-screen md:items-center">
      <div className="flex flex-col relative px-[20px] py-[40px] overflow-hidden md:flex-row md:w-[1200px] md:py-[80px]">
        <div className="flex flex-col mb-[20px] md:justify-center md:w-[576px] md:mb-0 md:mr-[38px]">
          <h1 className="mb-[16px] text-[28px] leading-[40px] font-[700] md:mb-[32px] md:text-[36px] md:leading-[42px]">
            <span className="text-[#FFF]">欢迎成为</span>
            <span className="text-[#FE8953]">星盘跨境合作伙伴</span>
          </h1>
          <div className="text-[16px] leading-[26px] text-[#FFF] font-[700] md:mb-[48px]">
            我们期待伙伴们的加入, 一起助力中国品牌出海！
          </div>
          <div className="hidden md:flex cursor-pointer" onClick={handleClickJoin}>
            <span className="px-[54px] py-[18px] text-[18px] leading-[26px] text-[#FFF] font-[700] bg-[#FE8953] rounded-[12px]">
              立即加入
            </span>
          </div>
        </div>
        <div className="md:w-[670px]">
          <Image
            width={1340}
            height={860}
            quality={100}
            src="https://media.cdn.ishopastro.com/upload/images/20221222-143124.png_2022-12-22-06-32-44.png"
            alt="banner"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
