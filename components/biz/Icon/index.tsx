import React from 'react'
import { Box } from '../../common'

const iconStyle = {
  display: 'inline-block',
  fontSize: 0,
}
export const CustomIcon: React.FC<{ width?: number; verticalAlign?: string; color?: string; className?: string }> = (
  props
) => {
  const { width, verticalAlign, color, className } = props
  const fWidth = width ? width : 24
  const style = {
    ...iconStyle,
    verticalAlign,
  }
  return (
    <Box sx={style} className={className}>
      <svg width={fWidth} height={fWidth} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 15C8.80222 15 8.60888 15.0586 8.44443 15.1685C8.27998 15.2784 8.15181 15.4346 8.07612 15.6173C8.00043 15.8 7.98063 16.0011 8.01921 16.1951C8.0578 16.3891 8.15304 16.5673 8.29289 16.7071C8.43275 16.847 8.61093 16.9422 8.80491 16.9808C8.99889 17.0194 9.19996 16.9996 9.38268 16.9239C9.56541 16.8482 9.72159 16.72 9.83147 16.5556C9.94135 16.3911 10 16.1978 10 16C10 15.7348 9.89464 15.4804 9.70711 15.2929C9.51957 15.1054 9.26522 15 9 15ZM2 14C1.73478 14 1.48043 14.1054 1.29289 14.2929C1.10536 14.4804 1 14.7348 1 15V17C1 17.2652 1.10536 17.5196 1.29289 17.7071C1.48043 17.8946 1.73478 18 2 18C2.26522 18 2.51957 17.8946 2.70711 17.7071C2.89464 17.5196 3 17.2652 3 17V15C3 14.7348 2.89464 14.4804 2.70711 14.2929C2.51957 14.1054 2.26522 14 2 14ZM22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V17C21 17.2652 21.1054 17.5196 21.2929 17.7071C21.4804 17.8946 21.7348 18 22 18C22.2652 18 22.5196 17.8946 22.7071 17.7071C22.8946 17.5196 23 17.2652 23 17V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14ZM17 7H13V5.72C13.3023 5.54549 13.5536 5.29491 13.7291 4.99317C13.9045 4.69143 13.9979 4.34903 14 4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2107 2.96086 10 3.46957 10 4C10.0021 4.34903 10.0955 4.69143 10.2709 4.99317C10.4464 5.29491 10.6977 5.54549 11 5.72V7H7C6.20435 7 5.44129 7.31607 4.87868 7.87868C4.31607 8.44129 4 9.20435 4 10V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V10C20 9.20435 19.6839 8.44129 19.1213 7.87868C18.5587 7.31607 17.7956 7 17 7ZM13.72 9L13.22 11H10.78L10.28 9H13.72ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V10C6 9.73478 6.10536 9.48043 6.29289 9.29289C6.48043 9.10536 6.73478 9 7 9H8.22L9 12.24C9.05475 12.4619 9.18385 12.6583 9.36579 12.7966C9.54774 12.9349 9.77157 13.0067 10 13H14C14.2284 13.0067 14.4523 12.9349 14.6342 12.7966C14.8162 12.6583 14.9452 12.4619 15 12.24L15.78 9H17C17.2652 9 17.5196 9.10536 17.7071 9.29289C17.8946 9.48043 18 9.73478 18 10V19ZM15 15C14.8022 15 14.6089 15.0586 14.4444 15.1685C14.28 15.2784 14.1518 15.4346 14.0761 15.6173C14.0004 15.8 13.9806 16.0011 14.0192 16.1951C14.0578 16.3891 14.153 16.5673 14.2929 16.7071C14.4327 16.847 14.6109 16.9422 14.8049 16.9808C14.9989 17.0194 15.2 16.9996 15.3827 16.9239C15.5654 16.8482 15.7216 16.72 15.8315 16.5556C15.9414 16.3911 16 16.1978 16 16C16 15.7348 15.8946 15.4804 15.7071 15.2929C15.5196 15.1054 15.2652 15 15 15Z"
          fill={color ? color : '#333333'}
        />
      </svg>
    </Box>
  )
}

export const TradeIcon: React.FC<{ width?: number; verticalAlign?: string; color?: string; className?: string }> = (
  props
) => {
  const { width, verticalAlign, color, className } = props
  const fWidth = width ? width : 24
  const style = {
    ...iconStyle,
    verticalAlign,
  }
  return (
    <Box sx={style} className={className}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.2 17.3L19.2 15.3C18.8 14.9 18.2 14.9 17.8 15.3C17.4 15.7 17.4 16.3 17.8 16.7L18.1 17H15.5C14.9 17 14.5 17.4 14.5 18C14.5 18.6 14.9 19 15.5 19H18.1L17.8 19.3C17.6 19.5 17.5 19.7 17.5 20C17.5 20.6 17.9 21 18.5 21C18.8 21 19 20.9 19.2 20.7L21.2 18.7C21.3 18.6 21.4 18.5 21.4 18.4C21.4 18.3 21.5 18.2 21.5 18C21.5 17.9 21.5 17.7 21.4 17.6C21.4 17.5 21.3 17.4 21.2 17.3ZM8.50002 17H5.90002L6.20002 16.7C6.60002 16.3 6.60002 15.7 6.20002 15.3C5.80002 14.9 5.20002 14.9 4.80002 15.3L2.80002 17.3C2.70002 17.4 2.60002 17.5 2.60002 17.6C2.60002 17.7 2.50002 17.8 2.50002 18C2.50002 18.1 2.50002 18.3 2.60002 18.4C2.70002 18.5 2.70002 18.6 2.80002 18.7L4.80002 20.7C5.00002 20.9 5.20002 21 5.50002 21C5.80002 21 6.00002 20.9 6.20002 20.7C6.60002 20.3 6.60002 19.7 6.20002 19.3L5.90002 19H8.50002C9.10002 19 9.50002 18.6 9.50002 18C9.50002 17.4 9.10002 17 8.50002 17ZM18 9.2C19.4 9.2 20.6 8 20.6 6.6C20.6 5.2 19.4 4 18 4C16.6 4 15.4 5.2 15.4 6.6C15.4 8 16.6 9.2 18 9.2ZM22.7 12.9C20.6 10.3 16.8 9.9 14.2 12C13.9 12.3 13.5 12.6 13.3 12.9C12.9 13.5 12.9 14.3 13.5 14.7C13.7 14.9 14 15 14.3 15H16.2C16.3 14.7 16.5 14.5 16.7 14.2C17.7 13.2 19.3 13.2 20.2 14.2L21 15H21.6C22.3 15 22.9 14.4 22.9 13.7C23 13.4 22.9 13.1 22.7 12.9ZM2.20002 11.9C1.90002 12.2 1.50002 12.5 1.30002 12.8C0.900016 13.4 0.900016 14.2 1.50002 14.6C1.70002 14.9 2.00002 15 2.30002 15H3.00002L3.80002 14.2C4.80002 13.2 6.40002 13.2 7.30002 14.2C7.50002 14.4 7.70002 14.7 7.80002 15H9.70002C10.4 15 11 14.4 11 13.7C11 13.4 10.9 13.1 10.7 12.9C8.60002 10.3 4.80002 9.9 2.20002 11.9ZM6.00002 9.2C7.40002 9.2 8.60002 8 8.60002 6.6C8.60002 5.2 7.40002 4 6.00002 4C4.60002 4 3.40002 5.2 3.40002 6.6C3.40002 8 4.60002 9.2 6.00002 9.2Z"
          fill={color ? color : '#333333'}
        />
      </svg>
    </Box>
  )
}

export const PaymentIcon: React.FC<{ width?: number; verticalAlign?: string; color?: string; className?: string }> = (
  props
) => {
  const { width, verticalAlign, color, className } = props
  const fWidth = width ? width : 24
  const style = {
    ...iconStyle,
    verticalAlign,
  }
  return (
    <Box sx={style} className={className}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.50001 10.4999H12C12.2652 10.4999 12.5196 10.3946 12.7071 10.2071C12.8947 10.0195 13 9.76516 13 9.49995C13 9.23473 12.8947 8.98038 12.7071 8.79284C12.5196 8.6053 12.2652 8.49995 12 8.49995H11V7.99995C11 7.73473 10.8947 7.48038 10.7071 7.29284C10.5196 7.1053 10.2652 6.99995 10 6.99995C9.73479 6.99995 9.48044 7.1053 9.2929 7.29284C9.10537 7.48038 9.00001 7.73473 9.00001 7.99995V8.54995C8.39243 8.67332 7.85237 9.01805 7.48466 9.51721C7.11696 10.0164 6.94785 10.6344 7.01015 11.2512C7.07246 11.868 7.36174 12.4397 7.82184 12.8553C8.28194 13.2708 8.88003 13.5006 9.50001 13.4999H10.5C10.6326 13.4999 10.7598 13.5526 10.8536 13.6464C10.9473 13.7402 11 13.8673 11 13.9999C11 14.1326 10.9473 14.2597 10.8536 14.3535C10.7598 14.4473 10.6326 14.4999 10.5 14.4999H8.00001C7.73479 14.4999 7.48044 14.6053 7.2929 14.7928C7.10537 14.9804 7.00001 15.2347 7.00001 15.4999C7.00001 15.7652 7.10537 16.0195 7.2929 16.2071C7.48044 16.3946 7.73479 16.4999 8.00001 16.4999H9.00001V16.9999C9.00001 17.2652 9.10537 17.5195 9.2929 17.7071C9.48044 17.8946 9.73479 17.9999 10 17.9999C10.2652 17.9999 10.5196 17.8946 10.7071 17.7071C10.8947 17.5195 11 17.2652 11 16.9999V16.4499C11.6076 16.3266 12.1476 15.9818 12.5154 15.4827C12.8831 14.9835 13.0522 14.3655 12.9899 13.7487C12.9276 13.1319 12.6383 12.5602 12.1782 12.1446C11.7181 11.7291 11.12 11.4993 10.5 11.4999H9.50001C9.3674 11.4999 9.24022 11.4473 9.14645 11.3535C9.05269 11.2597 9.00001 11.1326 9.00001 10.9999C9.00001 10.8673 9.05269 10.7402 9.14645 10.6464C9.24022 10.5526 9.3674 10.4999 9.50001 10.4999ZM21 11.9999H18V2.99995C18.0007 2.82374 17.9548 2.65047 17.867 2.49769C17.7792 2.34491 17.6526 2.21805 17.5 2.12995C17.348 2.04218 17.1755 1.99597 17 1.99597C16.8245 1.99597 16.652 2.04218 16.5 2.12995L13.5 3.84995L10.5 2.12995C10.348 2.04218 10.1755 1.99597 10 1.99597C9.82447 1.99597 9.65203 2.04218 9.50001 2.12995L6.50001 3.84995L3.50001 2.12995C3.34799 2.04218 3.17554 1.99597 3.00001 1.99597C2.82447 1.99597 2.65203 2.04218 2.50001 2.12995C2.3474 2.21805 2.22079 2.34491 2.13299 2.49769C2.04518 2.65047 1.99931 2.82374 2.00001 2.99995V18.9999C2.00001 19.7956 2.31608 20.5587 2.87869 21.1213C3.4413 21.6839 4.20436 21.9999 5.00001 21.9999H19C19.7957 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8947 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM5.00001 19.9999C4.73479 19.9999 4.48044 19.8946 4.2929 19.7071C4.10536 19.5195 4.00001 19.2652 4.00001 18.9999V4.72995L6.00001 5.86995C6.15435 5.95056 6.32589 5.99266 6.50001 5.99266C6.67413 5.99266 6.84567 5.95056 7.00001 5.86995L10 4.14995L13 5.86995C13.1543 5.95056 13.3259 5.99266 13.5 5.99266C13.6741 5.99266 13.8457 5.95056 14 5.86995L16 4.72995V18.9999C16.0027 19.3411 16.0636 19.6793 16.18 19.9999H5.00001ZM20 18.9999C20 19.2652 19.8947 19.5195 19.7071 19.7071C19.5196 19.8946 19.2652 19.9999 19 19.9999C18.7348 19.9999 18.4804 19.8946 18.2929 19.7071C18.1054 19.5195 18 19.2652 18 18.9999V13.9999H20V18.9999Z"
          fill={color ? color : '#333333'}
        />
      </svg>
    </Box>
  )
}

export const NoteIcon: React.FC<{ width?: number; verticalAlign?: string; color?: string; className?: string }> = (
  props
) => {
  const { width, verticalAlign, color, className } = props
  const fWidth = width ? width : 24

  const style = {
    ...iconStyle,
    verticalAlign,
  }
  return (
    <Box sx={style} className={className}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 14H8C7.73478 14 7.48043 14.1054 7.29289 14.2929C7.10536 14.4804 7 14.7348 7 15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16H16C16.2652 16 16.5196 15.8946 16.7071 15.7071C16.8946 15.5196 17 15.2652 17 15C17 14.7348 16.8946 14.4804 16.7071 14.2929C16.5196 14.1054 16.2652 14 16 14ZM16 10H10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11C9 11.2652 9.10536 11.5196 9.29289 11.7071C9.48043 11.8946 9.73478 12 10 12H16C16.2652 12 16.5196 11.8946 16.7071 11.7071C16.8946 11.5196 17 11.2652 17 11C17 10.7348 16.8946 10.4804 16.7071 10.2929C16.5196 10.1054 16.2652 10 16 10ZM20 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H18C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7956 21 19V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4ZM19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H11V7C11 7.26522 11.1054 7.51957 11.2929 7.70711C11.4804 7.89464 11.7348 8 12 8C12.2652 8 12.5196 7.89464 12.7071 7.70711C12.8946 7.51957 13 7.26522 13 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19V19Z"
          fill={color ? color : '#333333'}
        />
      </svg>
    </Box>
  )
}

export const FireIcon: React.FC<{ style: React.CSSProperties }> = ({ style }) => {
  return (
    <svg style={style} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.61668 14.6667C6.61668 14.6667 0.703681 13.366 3.34651 6.91071C3.34651 6.91071 3.94651 7.62804 3.86401 7.97321C3.86401 7.97321 4.33435 6.34387 5.34951 5.37054C6.22118 4.53421 7.10685 2.18304 6.29001 1.33337C6.29001 1.33337 10.3358 2.18304 10.7862 6.43304C10.7862 6.43304 11.3037 5.07887 12.3662 4.94504C12.3662 4.94504 12.0395 5.68904 12.3662 6.80504C12.3662 6.80504 15.7175 12.5417 9.94185 14.4807C9.94185 14.4807 11.6732 12.5149 8.00151 9.14137C8.00151 9.14137 7.13585 10.948 6.61818 11.5847C6.61668 11.5864 5.17251 13.2054 6.61668 14.6667V14.6667Z"
        fill="#F52121"
      />
    </svg>
  )
}

export const Loading: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <svg style={style} width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.0425 8.29067C20.0425 8.52491 20.1355 8.74956 20.3012 8.91519C20.4668 9.08083 20.6914 9.17388 20.9257 9.17388C21.1599 9.17388 21.3846 9.08083 21.5502 8.91519C21.7158 8.74956 21.8089 8.52491 21.8089 8.29067C21.8089 8.05643 21.7158 7.83179 21.5502 7.66615C21.3846 7.50052 21.1599 7.40747 20.9257 7.40747C20.6914 7.40747 20.4668 7.50052 20.3012 7.66615C20.1355 7.83179 20.0425 8.05643 20.0425 8.29067V8.29067Z"
        fill="white"
      />
      <path
        d="M22.0742 13.5051C22.0742 13.8343 22.205 14.1501 22.4378 14.3829C22.6706 14.6157 22.9864 14.7465 23.3156 14.7465C23.6449 14.7465 23.9606 14.6157 24.1934 14.3829C24.4262 14.1501 24.557 13.8343 24.557 13.5051C24.557 13.1758 24.4262 12.8601 24.1934 12.6273C23.9606 12.3945 23.6449 12.2637 23.3156 12.2637C22.9864 12.2637 22.6706 12.3945 22.4378 12.6273C22.205 12.8601 22.0742 13.1758 22.0742 13.5051V13.5051Z"
        fill="white"
      />
      <path
        d="M20.5186 19.7039C20.5186 20.1172 20.6828 20.5137 20.9751 20.806C21.2674 21.0982 21.6638 21.2625 22.0771 21.2625C22.4905 21.2625 22.8869 21.0982 23.1792 20.806C23.4715 20.5137 23.6357 20.1172 23.6357 19.7039C23.6357 19.2905 23.4715 18.8941 23.1792 18.6018C22.8869 18.3095 22.4905 18.1453 22.0771 18.1453C21.6638 18.1453 21.2674 18.3095 20.9751 18.6018C20.6828 18.8941 20.5186 19.2905 20.5186 19.7039Z"
        fill="white"
      />
      <path
        d="M14.5273 23.3516C14.5273 23.8193 14.7132 24.2679 15.0439 24.5987C15.3747 24.9294 15.8233 25.1152 16.291 25.1152C16.7588 25.1152 17.2074 24.9294 17.5381 24.5987C17.8689 24.2679 18.0547 23.8193 18.0547 23.3516C18.0547 22.8838 17.8689 22.4352 17.5381 22.1045C17.2074 21.7737 16.7588 21.5879 16.291 21.5879C15.8233 21.5879 15.3747 21.7737 15.0439 22.1045C14.7132 22.4352 14.5273 22.8838 14.5273 23.3516Z"
        fill="white"
      />
      <path
        d="M7.69971 22.2249C7.69971 22.784 7.92182 23.3203 8.31719 23.7156C8.71255 24.111 9.24878 24.3331 9.80791 24.3331C10.367 24.3331 10.9033 24.111 11.2986 23.7156C11.694 23.3203 11.9161 22.784 11.9161 22.2249C11.9161 21.6658 11.694 21.1295 11.2986 20.7342C10.9033 20.3388 10.367 20.1167 9.80791 20.1167C9.24878 20.1167 8.71255 20.3388 8.31719 20.7342C7.92182 21.1295 7.69971 21.6658 7.69971 22.2249V22.2249Z"
        fill="white"
      />
      <path
        d="M3.16309 16.2859C3.16309 16.5987 3.22469 16.9084 3.34438 17.1974C3.46407 17.4863 3.6395 17.7489 3.86065 17.97C4.08181 18.1912 4.34436 18.3666 4.63331 18.4863C4.92227 18.606 5.23197 18.6676 5.54473 18.6676C5.85749 18.6676 6.16719 18.606 6.45614 18.4863C6.7451 18.3666 7.00765 18.1912 7.2288 17.97C7.44996 17.7489 7.62539 17.4863 7.74508 17.1974C7.86476 16.9084 7.92637 16.5987 7.92637 16.2859C7.92637 15.9732 7.86476 15.6635 7.74508 15.3745C7.62539 15.0856 7.44996 14.823 7.2288 14.6019C7.00765 14.3807 6.7451 14.2053 6.45614 14.0856C6.16719 13.9659 5.85749 13.9043 5.54473 13.9043C5.23197 13.9043 4.92227 13.9659 4.63331 14.0856C4.34436 14.2053 4.08181 14.3807 3.86065 14.6019C3.6395 14.823 3.46407 15.0856 3.34438 15.3745C3.22469 15.6635 3.16309 15.9732 3.16309 16.2859V16.2859Z"
        fill="white"
      />
      <path
        d="M4.51416 9.17373C4.51416 9.52132 4.58262 9.86551 4.71564 10.1866C4.84866 10.5078 5.04363 10.7996 5.28941 11.0454C5.5352 11.2911 5.82699 11.4861 6.14812 11.6191C6.46925 11.7521 6.81344 11.8206 7.16104 11.8206C7.50863 11.8206 7.85282 11.7521 8.17395 11.6191C8.49508 11.4861 8.78687 11.2911 9.03266 11.0454C9.27844 10.7996 9.47341 10.5078 9.60643 10.1866C9.73945 9.86551 9.80791 9.52132 9.80791 9.17373C9.80791 8.47174 9.52904 7.79849 9.03266 7.30211C8.53627 6.80572 7.86303 6.52686 7.16104 6.52686C6.45904 6.52686 5.7858 6.80572 5.28941 7.30211C4.79303 7.79849 4.51416 8.47174 4.51416 9.17373V9.17373Z"
        fill="white"
      />
      <path
        d="M11.7109 5.6437C11.7109 6.37833 12.0028 7.08287 12.5222 7.60233C13.0417 8.12179 13.7462 8.41362 14.4809 8.41362C15.2155 8.41362 15.92 8.12179 16.4395 7.60233C16.959 7.08287 17.2508 6.37833 17.2508 5.6437C17.2508 4.90907 16.959 4.20453 16.4395 3.68507C15.92 3.16561 15.2155 2.87378 14.4809 2.87378C13.7462 2.87378 13.0417 3.16561 12.5222 3.68507C12.0028 4.20453 11.7109 4.90907 11.7109 5.6437V5.6437Z"
        fill="white"
      />
    </svg>
  )
}
