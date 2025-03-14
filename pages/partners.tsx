import type { NextPage } from 'next'
import Image from 'next/image'

import Header from '../components/v2/Header'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import Banner from '../components/v5/Partners/Banner'
import Form from '../components/v5/Partners/Form'
import useIsMobile from '../hooks/useIsMobile'

// 渠道合作
const Partners: NextPage = () => {
  const isMobile = useIsMobile()

  return (
    <>
      <Header
        title="欢迎成为shopastro 星盘跨境的渠道合作&生态联盟服务商！"
        description="shopastro, 星盘跨境, 品牌出海一站式数智化解决方案; 欢迎成为星盘服务商;"
        keywords="星盘服务商, 合作伙伴, 助力助力中国品牌出海, 立即加入;"
      />
      {/* 背景 */}
      <div className="flex absolute top-0 left-0 w-screen h-[460px] md:h-[700px] overflow-hidden">
        <Image
          className={'h-full'}
          width={2872}
          height={1236}
          quality={100}
          src="https://media.cdn.ishopastro.com/upload/images/20221229-101726.png_2022-12-29-02-22-39.png"
          alt="bg"
        />
      </div>
      <div className="relative pb-[70px] md:pb-0">
        <Menu theme="light" />
        <Banner />
        <Form />
        <Footer />
      </div>
      {!isMobile && (
        <FixedButton
          text="立即加入"
          onClick={() => {
            const usernameInput = document.getElementById('username')
            if (usernameInput) {
              usernameInput.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
              })
            }
          }}
        />
      )}
    </>
  )
}

export default Partners
