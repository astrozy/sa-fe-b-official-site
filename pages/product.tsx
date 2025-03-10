import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useContainer } from 'unstated-next'

import Header from '../components/v2/Header'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import useTrailLink from '../hooks/useTrail'
import detectionStore from '../store/detectionStore'

// 产品方案
const Product: NextPage = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)
  const freeLink = useTrailLink()
  const freeLinkDTC = freeLink('website_dtc', '')

  return (
    <>
      <Header
        description="shopastro, 星盘跨境, 提供一站式跨境私域增长解决方案, 您可方便快捷的建设DTC/B2B的站点或者可直接使用星盘的智数营销产品“白鲸营销”。--shopastro星盘跨境"
        keywords="试用产品, 一站式, 跨境私域增长, 解决方案, DTC建站套餐, B2B建站, 白鲸营销"
      />
      <div className="hidden md:flex items-center justify-center absolute top-0 left-0 w-screen overflow-hidden">
        <Image
          src="https://media.cdn.ishopastro.com/upload/images/20230131-102858.jpeg_2023-01-31-02-32-43.jpg"
          width={2135}
          height={1329}
          quality={100}
          alt="bg"
        />
      </div>
      <div className="flex md:hidden items-center justify-center absolute top-0 left-0 w-screen overflow-hidden">
        <Image
          src=" https://media.cdn.ishopastro.com/upload/images/20230131-105614.png_2023-01-31-02-56-42.png"
          width={750}
          height={1145}
          quality={100}
          alt="bg"
        />
      </div>
      <div className="relative">
        <Menu />
        {/* 选择产品 */}
        <div className="flex flex-col md:items-center">
          <div className="flex flex-col px-[20px] py-[40px] md:py-[80px] md:w-[1200px]">
            <div className="mb-[20px] text-[40px] leading-[48px] text-[#0E1E46] font-[700] md:text-[48px] md:leading-[58px]">
              请选择试用产品
            </div>
            <div className="flex flex-col mb-[20px] text-[16px] leading-[24px] text-[#535D77] md:mb-[60px] md:text-[18px] md:leading-[28px]">
              <span>星盘跨境提供一站式跨境私域增长解决方案,您可方便快捷的建设DTC/B2B的站点</span>
              <span>或者可直接使用星盘的智数营销产品“白鲸营销”。</span>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex flex-col mb-[20px] p-[20px] border border-[#EEF0F0] rounded-[12px] md:w-[350px] bg-white">
                <div className="mb-[8px] text-[20px] leading-[30px] font-[700] text-[#122B6D]">DTC建站</div>
                <span className="w-full mb-[8px]">
                  <Image
                    src="https://media.cdn.ishopastro.com/svg/shopastrohome/b6d9aa778fbf08c6b433949f03f45107.svg"
                    width={290}
                    height={178}
                    layout="responsive"
                    alt="icon"
                  />
                </span>
                <div className="mb-[16px] text-[14px] leading-[26px] font-[700] text-[#18214D]">
                  简单几步, 直达消费者, 跨境生意马上开启
                </div>
                <Link href={freeLinkDTC} passHref>
                  <div className="flex items-center justify-between w-[148px] px-[18px] py-[12px] bg-[#004DD1] rounded-[8px] cursor-pointer">
                    <span className="text-[14px] leading-[16px] text-[#FFF] font-[700]">免费试用</span>
                    <span className="w-[22px] h-[22px]">
                      <Image
                        src="https://media.cdn.ishopastro.com/svg/shopastrohome/aae57df8a5df86da3a336aea64203573.svg"
                        width={22}
                        height={22}
                        layout="responsive"
                        alt="icon"
                      />
                    </span>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col mb-[20px] p-[20px] border border-[#EEF0F0] rounded-[12px] md:w-[350px] bg-white">
                <div className="mb-[8px] text-[20px] leading-[30px] font-[700] text-[#122B6D]">B2B建站</div>
                <span className="w-full mb-[8px]">
                  <Image
                    src="https://media.cdn.ishopastro.com/svg/shopastrohome/dc5db7a784167d06e315d011b3c1ce5e.svg"
                    width={290}
                    height={178}
                    layout="responsive"
                    alt="icon"
                  />
                </span>
                <div className="mb-[16px] text-[14px] leading-[26px] font-[700] text-[#18214D]">
                  高效B2B出海, 从这里开始
                </div>
                <div
                  className="flex items-center justify-between w-[148px] px-[18px] py-[12px] bg-[#004DD1] rounded-[8px] cursor-pointer"
                  onClick={() => {
                    setShowMoadl(true)
                    setButtonType('topbanner-b2b')
                  }}
                >
                  <span className="text-[14px] leading-[16px] text-[#FFF] font-[700]">立即咨询</span>
                  <span className="w-[22px] h-[22px]">
                    <Image
                      src="https://media.cdn.ishopastro.com/svg/shopastrohome/aae57df8a5df86da3a336aea64203573.svg"
                      width={22}
                      height={22}
                      alt="icon"
                    />
                  </span>
                </div>
              </div>

              <div className="flex flex-col mb-[20px] p-[20px] border border-[#EEF0F0] rounded-[12px] md:w-[350px] bg-white">
                <div className="mb-[8px] text-[20px] leading-[30px] font-[700] text-[#122B6D]">白鲸营销</div>
                <span className="w-full mb-[8px]">
                  <Image
                    src="https://media.cdn.ishopastro.com/svg/shopastrohome/282b2f2b0d76178ff4803b834f1c33ab.svg"
                    width={290}
                    height={178}
                    layout="responsive"
                    alt="icon"
                  />
                </span>
                <div className="mb-[16px] text-[14px] leading-[26px] font-[700] text-[#18214D]">
                  一站式的面向品牌站独立站的营销SaaS
                </div>
                <div
                  className="flex items-center justify-between w-[148px] px-[18px] py-[12px] bg-[#004DD1] rounded-[8px] cursor-pointer"
                  onClick={() => {
                    setShowMoadl(true)
                    setButtonType('topbanner-beluga')
                  }}
                >
                  <span className="text-[14px] leading-[16px] text-[#FFF] font-[700]">立即咨询</span>
                  <span className="w-[22px] h-[22px]">
                    <Image
                      src="https://media.cdn.ishopastro.com/svg/shopastrohome/aae57df8a5df86da3a336aea64203573.svg"
                      width={22}
                      height={22}
                      alt="icon"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 联系我们 */}
        <div className="flex flex-col md:items-center bg-[#FDFDFD] pt-[40px] md:pt-[80px]">
          <div className="flex flex-col px-[20px] md:w-[1200px] md:flex-row md:justify-between">
            <div className="flex flex-col md:mr-[32px] md:mb-[80px]">
              <div className="mb-[24px] text-[40px] leading-[48px] text-[#0E1E46] font-[700] md:text-[48px] md:leading-[58px]">
                有任何问题？
              </div>
              <div className="mb-[24px] text-[16px] leading-[24px] text-[#535D77]">
                如果您对我们的产品有任何疑问, 或需要任何的帮助和支持, 请微信直聊。
              </div>
              <div className="flex flex-col items-center justify-center w-[148px] mb-[24px] px-[32px] py-[12px] border rounded-[6px]">
                <span className="text-[18px] leading-[26px]">微信直聊</span>
                <span className="w-[124px] h-[124px] p-[12px] bg-[#FFF]">
                  <Image
                    src="https://media.cdn.ishopastro.com/upload/images/20230217-171938.jpeg_2023-02-17-09-21-33.jpg"
                    width={150}
                    height={150}
                    alt="icon"
                  />
                </span>
              </div>
            </div>
            <div className="flex w-full md:w-[410px] items-end">
              <Image
                src="https://media.cdn.ishopastro.com/upload/images/20221216-012315.png_2022-12-15-17-23-53.png"
                width={682}
                height={578}
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Product
