/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='h-72 flex flex-col text-white mt-auto bg-black'>
      <div className='mt-12 mx-40 flex'>
        <div className='mr-52 flex flex-col gap-4 text-sm'>
          <p>About Us</p>
          <p>Shipping Info</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div className='mr-28 flex flex-col gap-4 text-sm'>
          <p>Customer support & General Enquiries </p>
          <p>support@oneoffnature.com</p>
          <p>Innovation Center</p>
          <p>Knowledge Gateway, Colchester CO4 3ZQ</p>
        </div>
        <div className='flex flex-col gap-6 text-xl font-bold '>
          <p>SIGN UP FOR OUR NEWSLETTER</p>
          <input
            type='text'
            placeholder='Email'
            className='border border-white bg-transparent placeholder:text-white placeholder:text-sm placeholder:font-normal placeholder:p-2'
          />
          <p>FOLLOW US</p>
          <div className='flex gap-3.5 justify-start'>
            <Link
              href='https://www.instagram.com/oneoffnature/?hl=en'
              target='_blank'
            >
              <svg
                width='30'
                height='30'
                viewBox='0 0 20 20'
                fill='white'
                className='hover:fill-inactive-orange'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10 5C9.01109 5 8.04439 5.29324 7.22215 5.84265C6.3999 6.39206 5.75904 7.17295 5.3806 8.08658C5.00216 9.00021 4.90315 10.0055 5.09607 10.9755C5.289 11.9454 5.7652 12.8363 6.46447 13.5355C7.16373 14.2348 8.05464 14.711 9.02455 14.9039C9.99445 15.0969 10.9998 14.9978 11.9134 14.6194C12.827 14.241 13.6079 13.6001 14.1573 12.7779C14.7068 11.9556 15 10.9889 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM10 13C9.40666 13 8.82664 12.8241 8.33329 12.4944C7.83994 12.1648 7.45542 11.6962 7.22836 11.1481C7.0013 10.5999 6.94189 9.99667 7.05764 9.41473C7.1734 8.83279 7.45912 8.29824 7.87868 7.87868C8.29824 7.45912 8.83279 7.1734 9.41473 7.05764C9.99667 6.94189 10.5999 7.0013 11.1481 7.22836C11.6962 7.45542 12.1648 7.83994 12.4944 8.33329C12.8241 8.82664 13 9.40666 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13ZM15 4C14.8022 4 14.6089 4.05865 14.4444 4.16853C14.28 4.27841 14.1518 4.43459 14.0761 4.61732C14.0004 4.80004 13.9806 5.00111 14.0192 5.19509C14.0578 5.38907 14.153 5.56725 14.2929 5.70711C14.4327 5.84696 14.6109 5.9422 14.8049 5.98079C14.9989 6.01937 15.2 5.99957 15.3827 5.92388C15.5654 5.84819 15.7216 5.72002 15.8315 5.55557C15.9414 5.39112 16 5.19778 16 5C16 4.73478 15.8946 4.48043 15.7071 4.29289C15.5196 4.10536 15.2652 4 15 4ZM19.94 6.24C19.9234 5.38542 19.7611 4.53995 19.46 3.74C19.1808 3.01207 18.7516 2.35099 18.2003 1.7997C17.649 1.2484 16.9879 0.819216 16.26 0.54C15.4601 0.238899 14.6146 0.0765676 13.76 0.0599999C12.79 -5.58794e-08 12.47 0 10 0C7.53 0 7.21 -5.58794e-08 6.24 0.0599999C5.38542 0.0765676 4.53995 0.238899 3.74 0.54C3.01207 0.819216 2.35099 1.2484 1.7997 1.7997C1.2484 2.35099 0.819216 3.01207 0.54 3.74C0.238899 4.53995 0.0765676 5.38542 0.0599999 6.24C-5.58794e-08 7.22 0 7.54 0 10C0 12.46 -5.58794e-08 12.78 0.0599999 13.76C0.0765676 14.6146 0.238899 15.4601 0.54 16.26C0.819216 16.9879 1.2484 17.649 1.7997 18.2003C2.35099 18.7516 3.01207 19.1808 3.74 19.46C4.53995 19.7611 5.38542 19.9234 6.24 19.94C7.24 19.94 7.53 20 10 20C12.47 20 12.79 20 13.76 19.94C14.6146 19.9234 15.4601 19.7611 16.26 19.46C16.9879 19.1808 17.649 18.7516 18.2003 18.2003C18.7516 17.649 19.1808 16.9879 19.46 16.26C19.7611 15.4601 19.9234 14.6146 19.94 13.76C19.94 12.76 20 12.46 20 10C20 7.54 20 7.22 19.94 6.24ZM17.94 13.67C17.9225 14.3046 17.8043 14.9324 17.59 15.53C17.4128 16.0023 17.1327 16.4293 16.77 16.78C16.4214 17.1428 15.9936 17.4201 15.52 17.59C14.921 17.8131 14.289 17.9348 13.65 17.95C12.71 17.95 12.42 18 9.99 18C7.56 18 7.28 18 6.34 18C5.70202 17.9835 5.07075 17.8654 4.47 17.65C3.99766 17.4728 3.57067 17.1927 3.22 16.83C2.85715 16.4814 2.57992 16.0536 2.41 15.58C2.1878 14.9842 2.06615 14.3557 2.05 13.72C2.05 12.72 2.05 12.47 2.05 10.05C2.05 7.63 2.05 7.34 2.05 6.38C2.06724 5.74121 2.18884 5.10954 2.41 4.51C2.58256 4.04063 2.85953 3.61662 3.22 3.27C3.56858 2.90715 3.99641 2.62992 4.47 2.46C5.06899 2.2369 5.70099 2.11523 6.34 2.1C7.28 2 7.57 2 10 2C12.43 2 12.72 2 13.66 2C14.3021 2.01633 14.9373 2.13794 15.54 2.36C16.0094 2.53256 16.4334 2.80953 16.78 3.17C17.1428 3.51858 17.4201 3.94641 17.59 4.42C17.8348 5.02856 17.9735 5.67458 18 6.33C18 7.33 18.05 7.58 18.05 10C18.05 12.42 18 12.71 18 13.67H17.94Z' />
              </svg>
              {/* <Image src={Insta} alt="Instagram" /> */}
            </Link>
            {/* <Link href="https://www.pinterest.co.uk/oneoffnature/"></Link> */}
            {/* <Image src={FB} alt="Facebook" /> */}
            <svg
              width='30'
              height='30'
              viewBox='0 0 20 20'
              fill='#fff'
              xmlns='http://www.w3.org/2000/svg'
              className='hover:fill-inactive-orange'
            >
              <path d='M18.9 0H1.1C0.808262 0 0.528473 0.115893 0.322183 0.322183C0.115893 0.528473 0 0.808262 0 1.1V18.9C0 19.0445 0.0284524 19.1875 0.0837326 19.321C0.139013 19.4544 0.220038 19.5757 0.322183 19.6778C0.424327 19.78 0.54559 19.861 0.679048 19.9163C0.812506 19.9715 0.955546 20 1.1 20H10.68V12.25H8.08V9.25H10.68V7C10.6261 6.47176 10.6885 5.93813 10.8627 5.43654C11.0369 4.93495 11.3188 4.47755 11.6885 4.09641C12.0582 3.71528 12.5068 3.41964 13.0028 3.23024C13.4989 3.04083 14.0304 2.96225 14.56 3C15.3383 2.99521 16.1163 3.03528 16.89 3.12V5.82H15.3C14.04 5.82 13.8 6.42 13.8 7.29V9.22H16.8L16.41 12.22H13.8V20H18.9C19.0445 20 19.1875 19.9715 19.321 19.9163C19.4544 19.861 19.5757 19.78 19.6778 19.6778C19.78 19.5757 19.861 19.4544 19.9163 19.321C19.9715 19.1875 20 19.0445 20 18.9V1.1C20 0.955546 19.9715 0.812506 19.9163 0.679048C19.861 0.54559 19.78 0.424327 19.6778 0.322183C19.5757 0.220038 19.4544 0.139013 19.321 0.0837326C19.1875 0.0284524 19.0445 0 18.9 0Z' />
            </svg>
          </div>
        </div>
      </div>
      <p className='mt-auto ml-40 mb-6 uppercase text-xs'>
        Copyright @ Oneoffnature.com 2020. All Rights Reserved..
      </p>
    </div>
  );
};

export default Footer;
