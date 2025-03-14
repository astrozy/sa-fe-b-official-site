import Image from 'next/image'
import Link from 'next/link'
import { useContainer } from 'unstated-next'

import useTrailLink from '../../../../hooks/useTrail'
import detectionStore from '../../../../store/detectionStore'
import { bannerData } from './data'

const BelugaBanner = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)
  const freeLink = useTrailLink()
  return (
    <div className="flex flex-col justify-center relative w-screen bg-[#F5F6FA]">
      {/* bg */}
      <div className="absolute top-[128px] left-[50%] transform translate-x-[-50%] w-screen overflow-hidden md:top-[410px] md:left-0 md:translate-x-0">
        <div className="w-[1439px] md:w-auto">
          <Image
            src="https://media.cdn.ishopastro.com/upload/images/20221227-145807.png_2022-12-27-06-58-41.png"
            width={2878}
            height={894}
            alt="bg1"
          />
        </div>
      </div>
      <div className="flex flex-col items-center relative py-[40px] overflow-hidden md:py-[80px]">
        <div className="relative w-[239px] h-[39px] mb-[40px]">
          <Image
            width={239}
            height={37}
            quality={100}
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/64f6aaf04e35facb31aa17b3170289fb.svg"
            alt="beluga logo"
          />
        </div>
        <h1 className="flex flex-col mb-[40px] px-[28px] text-[40px] leading-[48px] text-[#0E1E46] text-center font-[700] md:mb-[42px] md:text-[48px] md:leading-[58px]">
          <span>星盘白鲸：面向品牌独立站的</span>
          <span className="text-[#FE8952]">一站式营销SaaS</span>
        </h1>
        {/* 功能 */}
        <div className="flex flex-col px-[20px] mb-[40px] md:flex-row">
          {bannerData.map((data, index) => {
            const name = data?.name

            const btnElement = (
              <div
                className="flex item-center cursor-pointer"
                onClick={() => {
                  if (!name) {
                    setShowMoadl(true)
                    setButtonType('topbanner')
                  }
                }}
              >
                <span
                  className={`flex-1 py-[7px] bg-[${
                    name ? '#FE8953' : '#004DD1'
                  }] text-[16px] md:text-[18px] leading-[26px] text-[#FFF] font-[700] text-center rounded-[8px]`}
                >
                  {name ? '免费试用' : '立即咨询'}
                </span>
              </div>
            )

            return (
              <div
                key={index}
                className="flex flex-col py-[28px] mb-[30px] border border-white bg-[#fff] rounded-[12px] last:mb-0 md:w-[300px] md:mr-[38px] md:last:mr-0 md:mb-0"
              >
                <div className="mb-[12px] text-[22px] leading-[30px] text-[#18214D] text-center font-[700]">
                  {data.title}
                </div>
                <div className="mb-[20px] px-[40px] text-[16px] md:text-[14px] leading-[24px] text-[#3E4462] text-opacity-80 text-center md:px-[20px]">
                  {data.info}
                </div>
                <div className="md:w-[300px] px-[20px]">
                  <Image width={520} height={400} quality={100} src={data.image} alt={data.title} />
                </div>
                <div className="md:w-[300px] px-[40px]">
                  {data?.name ? <Link href={freeLink(data?.name, 'beluga')}>{btnElement}</Link> : btnElement}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BelugaBanner
