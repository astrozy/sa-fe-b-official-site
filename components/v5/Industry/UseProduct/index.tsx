import Link from 'next/link'

import useTrailLink from '../../../../hooks/useTrail'

type IProps = {
  isMobile: boolean
}

const UseProduct = (props: IProps) => {
  const { isMobile } = props
  const freeLink = useTrailLink()
  const link = isMobile ? `/user/register` : freeLink('beluga_industry', 'beluga')

  return (
    <div
      className="flex justify-center items-center h-[220px] relative"
      style={{
        backgroundImage: `url(${
          isMobile
            ? 'https://media.cdn.ishopastro.com/svg/sa-fe-b-background/mobile.svg'
            : 'https://media.cdn.ishopastro.com/svg/sa-fe-b-background/pc.svg'
        })`,
        backgroundSize: 'cover !important',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        width: '100%',
        paddingTop: '15.28%'
      }}
    >
      <div className="flex absolute top-[0] h-[100%] flex-col md:flex-row items-center justify-center text-center px-[56px]">
        <div className="text-[#fff] md:text-[32px] text-[24px] font-[600] mb-[24px] md:mb-0 md:mr-[32px]">
          用白鲸行业情报，获得更有效的营销增长
        </div>
        <Link href={link} passHref>
          <div className="rounded-[8px] md:cursor-pointer border-[1px] border-[#d9d9d9] flex items-center justify-center text-[16px] md:text-[18px] text-[#2A2A2A] font-[500] h-[40px] md:h-[56px] w-[128px] bg-[#fff]">
            立即体验
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UseProduct
