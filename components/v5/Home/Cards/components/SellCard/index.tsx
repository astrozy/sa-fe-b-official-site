import Image from 'next/image'

import useTrailLink from '../../../../../../hooks/useTrail'
import FreeButton from '../../../../FreeButton'
import Description from '../Description'
import SubTitle from '../SubTitle'
import Title from '../Title'

const SellCard = () => {
  const freeLink = useTrailLink()
  return (
    <div className="flex flex-col items-center mb-[28px] md:flex-row md:w-[1440px] md:mb-[120px]">
      <div className="flex flex-1 mb-[20px] md:mb-0">
        <Image
          width={1570}
          height={1200}
          src="https://media.cdn.ishopastro.com/upload/images/3.png_2022-12-22-08-13-26.png"
          alt="快速建站"
          loading={'lazy'}
        />
      </div>
      <div className="flex flex-col flex-1 px-[20px] md:px-0">
        <div className="md:pr-[120px]">
          <Title>营销能力</Title>
          <div className="mb-[20px]">
            <SubTitle>联盟营销</SubTitle>
            <Description>
              联盟营销可帮助商家, 通过CPS的模式与KOC、KOL进行合作, 获取社交和社媒的流量。支持商家招募自己的分销员,
              设置商品佣金等, 并通过线上系统进行推广订单追踪, 与推广者建立信任关系, 并清晰记录佣金
            </Description>
          </div>
          <div className="mb-[20px] md:mb-[40px]">
            <SubTitle>推荐有礼</SubTitle>
            <Description>
              通过推荐有礼, 可发展客户为店铺进行推广, 获取社群裂变流量。商家以折扣码为激励, 鼓励店铺的客户进行分享,
              分享与被分享双方均可获得优惠
            </Description>
          </div>
          <div className="flex">
            <FreeButton href={freeLink('', '')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellCard
