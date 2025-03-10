import queryString from 'query-string'
import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true)
  const [beta, setBeta] = useState('')
  const [code, setCode] = useState<string | (string | null)[] | null>('')
  const [refer, setRefer] = useState('')
  const freeLink = (type: string, origin?: string): string => {
    let link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}`

    if (origin) {
      link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}`
    }
    if (code) {
      link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}&code=${code}`
    }

    if (refer) {
      link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}&refer=${refer}`
    }

    if (code && refer) {
      link = `https://sys.admin.${beta}ishopastro.com/admin/user/store-login?product=${type}&code=${code}&refer=${refer}`
    }

    if (isMobile) {
      link = `/user/register?product=${type}`
      if (code) {
        link = `/user/register?product=${type}&code=${code}`
      }
    }

    return link
  }

  useEffect(() => {
    if (window.innerWidth > 768) setIsMobile(false)
    if (/beta/.test(location.host)) setBeta('beta.')
  }, [])

  useEffect(() => {
    if (location.search.includes('code') || localStorage.getItem('copymasterCode')) {
      setCode(String(queryString.parse(location.search).code) || localStorage.getItem('copymasterCode'))
    }

    if (location.href.includes('?') || sessionStorage.getItem('refer')) {
      setRefer(Buffer.from(location.href).toString('base64') || sessionStorage.getItem('refer') || '')
    }
  }, [])

  return freeLink
}

export default useIsMobile
