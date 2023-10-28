import React from 'react'
import "./details.css"
import { Box } from '@mui/material'

const DetailsHeader = ({ }) => {
  return (
    <Box sx={{width: {xs: 180, sm: 230, md: 270, lg: 290}, mx: "auto", opacity: .87}}>
      <svg viewBox="0 0 241 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5512 55.94C18.5512 55.94 18.3112 53.36 16.0912 53.36C15.9112 53.36 15.7312 53.42 15.5512 53.42C12.9112 53.84 9.19117 57.44 6.61117 61.94C5.29117 64.16 4.09117 67.52 4.09117 69.32C4.09117 70.1 4.33117 70.58 4.87117 70.58C5.59117 70.58 6.91117 69.62 9.07117 67.1C16.3912 58.64 18.5512 55.94 18.5512 55.94ZM24.8512 47.9C30.0112 38.96 37.7512 23.96 38.8912 21.26C39.7312 19.22 41.1112 16.4 41.1112 15.2C41.1112 14.84 40.9912 14.66 40.6912 14.66H40.6312C39.1912 14.78 35.8912 20.18 35.8912 20.18C30.9112 28.04 24.8512 47.9 24.8512 47.9ZM20.4112 53.78C25.1512 40.34 29.1712 28.22 35.1112 18.26C37.9912 13.46 40.0912 12.08 41.4712 12.08C42.6712 12.08 43.2712 13.22 43.2712 13.94C43.2712 14.06 43.2712 14.18 43.2112 14.3V14.72C43.2112 27.02 21.7312 56.3 21.7312 56.3L17.3512 68.18C13.4512 78.92 11.5312 91.82 11.5312 97.7C11.5312 98.42 11.5312 98.96 11.5912 99.44C12.0712 104.06 14.8912 105.5 15.9712 105.5C16.6912 105.5 17.4112 106.16 17.4112 106.82C17.4112 107.18 17.2312 107.48 16.8112 107.72C16.6312 107.84 16.3912 107.9 16.1512 107.9C15.0712 107.9 13.8712 106.58 13.8712 106.58C11.1112 103.64 10.5712 98.3 10.5712 98.3C10.5112 97.58 10.5112 96.86 10.5112 96.14C10.5112 84.02 16.2112 65.36 18.5512 60.32C18.5512 60.32 10.0912 70.58 6.07117 72.5C5.35117 72.86 4.63117 73.04 4.03117 73.04C2.05117 73.04 0.791168 71.24 0.791168 68.42C0.791168 67.34 1.03117 66.14 1.39117 64.76C3.07117 58.7 6.73117 52.04 12.4912 50.48C13.2712 50.24 13.9912 50.18 14.7112 50.18C18.7912 50.18 20.4112 53.78 20.4112 53.78Z" fill="black" class="details-head-1"></path>
      <path d="M36.4199 60.5C40.2599 57.2 41.6999 55.22 41.6999 54.68C41.6999 54.56 41.6399 54.5 41.5199 54.5C40.3199 54.68 39.1799 56.9 36.4199 60.5ZM45.2999 54.02C45.2999 54.26 45.3599 54.44 45.3599 54.68C45.3599 59.72 37.2599 62.96 35.5799 63.62C35.5799 63.98 35.5199 64.4 35.5199 64.82C35.5199 66.26 35.7599 67.94 36.4799 69.02C37.2599 70.22 38.5799 70.76 40.2599 70.76C48.5399 70.76 65.0999 58.28 65.1599 58.22C65.3999 58.04 65.6399 57.98 65.8799 57.98C66.6599 57.98 67.3199 58.7 67.3199 59.42C67.3199 59.72 67.1399 60.02 66.8399 60.26C66.7199 60.32 50.5799 71.96 40.7399 71.96C38.1599 71.96 35.9999 71.18 34.6799 69.14C33.5399 67.46 33.1199 65.66 33.1199 63.92C33.1199 60.56 34.7999 57.38 36.7799 55.04C37.8599 53.78 39.0599 52.82 40.1399 52.22C40.9799 51.74 41.7599 51.5 42.5399 51.5C42.9599 51.5 43.3799 51.56 43.7399 51.74C44.5799 52.1 45.1799 52.88 45.2999 54.02Z" fill="black" class="details-head-2"></path>
      <path d="M81.6712 26.12C84.6712 22.46 91.4512 10.1 92.9512 5.9C93.3112 4.82001 93.4912 4.16001 93.4912 3.92001C93.4912 3.86001 93.4312 3.80001 93.4312 3.80001C92.5312 3.80001 81.8512 25.58 81.6712 26.12ZM36.1312 34.46C37.9912 34.64 40.6912 34.7 44.0512 34.7C51.0712 34.7 61.3312 34.28 74.7112 33.2C82.5112 14.96 90.6712 0.980011 94.4512 0.980011H94.5712C95.7112 1.40001 96.1912 2.42001 96.1912 3.86001C96.1912 10.7 84.4312 27.02 80.1112 32.96C85.3912 32.6 121.031 29.42 127.031 29.42C127.451 29.42 127.751 29.42 127.871 29.48C128.111 29.84 128.231 30.14 128.231 30.44C128.231 32.6 123.251 34.22 123.251 34.22C123.011 34.34 122.771 34.4 122.531 34.4C121.691 34.4 121.031 33.68 121.031 32.84C121.031 32.6 121.091 32.36 121.211 32.12C121.211 32.12 93.1312 33.32 79.2112 34.46C74.3512 41.24 58.9912 77.3 58.9912 94.04C58.9912 98.96 60.3712 102.26 63.7312 102.56C64.4512 102.62 64.7512 103.1 64.7512 103.58C64.7512 104.24 64.2112 104.96 63.5512 104.96C63.4312 104.96 63.3112 104.96 63.1912 104.9C59.7112 103.4 58.2712 98.9 58.2712 92.6C58.2712 78.32 65.7112 54.62 73.9912 34.88C64.2712 34.94 52.3912 35.36 43.6312 35.36C36.7912 35.36 31.8712 35.06 31.5112 34.16C31.4512 34.04 31.3912 33.92 31.3912 33.8C31.3912 33.02 32.7112 32.72 33.4912 32.72H33.8512C34.7512 32.72 36.1312 33.08 36.1312 34.46Z" fill="black" class="details-head-3"></path>
      <path d="M93.5915 59.12C92.7515 59.96 92.3915 60.26 91.3715 61.22C86.6315 65.72 81.2315 70.76 78.6515 70.76C78.5915 70.76 78.4715 70.7 78.3515 70.7C77.6915 70.58 77.2115 70.22 76.7915 69.74C76.3115 69.14 76.1315 68.42 76.1315 67.58C76.1315 67.28 76.1315 66.98 76.1915 66.68C76.3115 65.72 76.6715 64.52 77.2715 63.32C79.0115 59.48 82.7315 54.98 87.3515 53.6C88.5515 53.24 89.6315 53.12 90.5915 53.12C92.4515 53.12 93.8315 53.72 94.7315 54.62C96.5315 53.12 98.6315 51.62 99.7715 51.62C99.9515 51.62 100.131 51.68 100.251 51.74C101.031 51.86 101.451 52.64 101.451 53.96C101.451 55.4 100.971 57.44 99.9515 60.02C99.2915 61.82 98.9915 63.32 98.9915 64.52C98.9915 67.64 100.971 68.78 103.911 68.78C111.531 68.78 125.691 60.74 127.791 58.1C128.151 57.38 128.571 57.14 128.931 57.14C129.471 57.14 129.831 57.62 129.831 58.28C129.831 58.64 129.711 59 129.411 59.36C128.691 60.38 112.611 69.8 103.251 69.8C99.4115 69.8 96.7115 68.18 96.7115 63.68C96.7115 62.48 96.8915 61.1 97.3115 59.42C97.6715 57.14 98.4515 55.04 98.4515 54.56V54.5C98.4515 54.5 97.5515 55.34 96.1715 56.66C96.4115 57.38 96.4115 58.1 96.4115 58.46V58.7C95.8715 59.48 95.1515 59.84 94.4915 59.84C94.2515 59.84 94.0115 59.78 93.7715 59.66L93.5915 59.12ZM91.3115 57.56C91.0115 57.32 90.7115 57.26 90.3515 57.26C87.4715 57.26 82.4315 63.8 82.4315 65.18C82.4315 65.36 82.5515 65.48 82.7915 65.48C83.9315 65.48 87.5315 62.6 91.3115 57.56Z" fill="black" class="details-head-4"></path>
      <path d="M134.648 55.28C134.648 55.28 130.808 62.24 130.808 66.44C130.808 67.7 131.168 68.72 132.008 69.26C132.308 69.5 132.788 69.56 133.388 69.56C140.408 69.56 166.988 58.1 166.988 58.1C167.468 57.74 167.888 57.62 168.308 57.62C169.388 57.62 170.168 58.46 170.168 59.06C170.168 59.18 170.168 59.3 170.048 59.42C169.988 59.42 142.328 71.48 132.308 71.48C130.808 71.48 129.668 71.24 129.128 70.58C127.448 69.5 126.848 67.46 126.848 65.18C126.848 60.98 128.888 55.88 129.968 54.02C130.448 53 131.288 52.58 132.188 52.58C133.448 52.58 134.708 53.48 134.708 54.74C134.708 54.92 134.708 55.1 134.648 55.28ZM136.808 41.24C137.588 41.54 138.068 42.38 138.068 43.4C138.068 43.82 138.008 44.24 137.828 44.66C137.408 45.92 136.388 46.76 135.428 46.76C135.248 46.76 135.068 46.76 134.888 46.7C134.108 46.4 133.628 45.56 133.628 44.54C133.628 44.12 133.688 43.7 133.868 43.28C134.348 42.02 135.368 41.18 136.328 41.18C136.508 41.18 136.628 41.18 136.808 41.24Z" fill="black" class="details-head-5"></path>
      <path d="M172.78 53.96C176.5 50.54 193 23.9 193 17.54C193 17.24 192.94 17 192.88 16.82C192.7 16.46 192.58 16.28 192.46 16.28H192.4C191.8 16.28 190.72 17.24 189.34 18.8C187.78 20.6 185.98 23.24 184.12 26.42C180.4 32.78 175.6 46.04 172.78 53.96ZM170.92 59.36C166.48 73.58 164.26 83.96 164.26 89.78C164.26 91.64 164.5 93.08 164.92 93.98C165.52 95.24 166.42 95.84 167.5 95.84C176.32 95.84 198.94 59.54 199 59.42C199.6 58.52 200.26 58.16 200.8 58.16C201.46 58.16 201.94 58.64 201.94 59.48V59.54C201.88 59.66 178.18 96.68 167.32 96.68C165.7 96.68 164.38 95.84 163.42 93.92C162.82 92.66 162.58 90.68 162.58 88.28C162.58 72.56 174.22 36.32 182.2 25.34C184.12 22.04 186.04 19.28 187.66 17.36C189.52 15.26 191.2 14.06 192.58 14.06H192.64C193.66 14.12 194.44 14.78 194.92 16.04C195.16 16.7 195.28 17.48 195.28 18.38C195.28 29.18 178.18 54.5 170.92 59.36Z" fill="black" class="details-head-6"></path>
      <path d="M208.259 56C208.259 55.94 211.739 50.96 211.739 49.28C211.739 48.92 211.619 48.68 211.259 48.68C210.959 48.68 210.539 48.8 209.999 49.1C208.799 49.7 206.699 51.56 204.839 54.02C203.579 55.7 203.099 57.26 203.099 58.76C203.099 62.66 206.639 66.2 209.519 70.88C215.039 66.92 219.779 63.98 225.899 60.98C229.379 59.24 233.939 57.02 238.079 55.52C239.459 55.64 240.179 56.78 240.179 57.86C240.179 58.52 239.879 59.18 239.279 59.54C235.139 60.02 231.479 61.64 228.059 63.32C221.879 66.32 216.119 68.9 210.539 72.98C211.619 74.96 212.099 77.3 212.099 79.64C212.099 88.64 205.319 98.84 197.279 98.84C196.499 98.84 195.719 98.72 194.939 98.54C192.539 98 191.579 95.66 191.579 93.26C191.579 92.36 191.759 91.46 191.999 90.62C193.259 86.6 198.299 79.64 208.439 72.02C206.159 68.18 199.979 63.32 199.979 57.68C199.979 56 200.519 54.26 201.899 52.4C204.119 49.4 207.599 47.6 208.919 46.94C210.299 46.34 211.379 46.1 212.219 46.1C213.839 46.1 214.559 47 214.739 48.44C214.799 48.74 214.799 49.04 214.799 49.4C214.799 53.06 212.819 57.68 212.819 57.74C212.339 58.4 211.559 58.64 210.779 58.64C209.519 58.64 208.199 57.86 208.199 56.54C208.199 56.36 208.199 56.18 208.259 56ZM209.279 73.88C200.219 80.84 195.419 87.8 194.279 91.34C194.099 91.88 193.979 92.54 193.979 93.14C193.979 94.1 194.339 95 195.479 95.3C196.019 95.48 196.559 95.54 197.159 95.54C203.639 95.54 210.119 85.7 210.119 78.14C210.119 76.58 209.879 75.14 209.279 73.88Z" fill="black" class="details-head-7"></path>
      </svg>
    </Box>


  )
}

export default DetailsHeader