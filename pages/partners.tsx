import type { NextPage } from 'next'

import Header from '../components/v2/Header'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import Banner from '../components/v5/Partners/Banner'
import Form from '../components/v5/Partners/Form'
import TryNow from '../components/v5/TryNow'

// 渠道合作
const Partners: NextPage = () => {
  return (
    <>
      <Header />
      {/* 背景 */}
      <div className="flex absolute top-0 left-0 w-screen h-[150px] bg-[#003892] overflow-hidden" />
      <div className="relative">
        <Menu theme="light" />
        <Banner />
        <Form />
        <TryNow />
        <Footer />
      </div>
      <FixedButton
        onClick={() => {
          const usernameInput = document.getElementById('username')
          if (usernameInput) {
            usernameInput.focus()
            usernameInput.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest'
            })
          }
        }}
      />
    </>
  )
}

export default Partners
