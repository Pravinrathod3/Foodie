import React from 'react'
import picture from '../assets/fotimage.png'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className="flex flex-col w-full h-[700px]">
       <div className="flex justify-center ">
          <div className="w-[1200px] h-[432px]">
             <img className="absolute" src={picture} />
                <div className="relative text-white font-semibold text-[48px]">
                  <div className="pt-10 flex flex-col items-center">
                       <p >Get our promo code to subscribe our page and</p>
                       <p>channel of food </p>
                  </div>
                  <div className=" m-14  flex text-black  border-2 rounded-3xl w-[996px] h-[90px]">
                    <input type="text" placeholder="Type your email and get" className=" placeholder-black-300  placeholder-opacity-100 placeholder:text-xxl w-[800px] h-full rounded-l-3xl" ></input>
                    <div className="relative bg-white b-1 rounded-r-3xl w-[196px] h-full">
                      <p className=" mt-2 mr-2 bg-[#DAE952] b-1 rounded-3xl text-white text-[40px] flex justify-center items-center">Subscribe</p>
                      </div>
                  </div>
              
                </div>
          </div>
          
       </div>
       <div className="flex flex-row justify-evenly mt-10 ">
           <div>
              <div>
                 <img src={logo} />
              </div>
              <div className="w-[296px]">
              Managing restaurant menus and other information including location and opening hours. Managing the preparation of orders at a restaurant kitchen.
              </div>
           </div>
           <div>
               <div><b>Navigation</b></div>
               <div>Menu</div>
               <div>products</div>
               <div>About Us</div>
               <div>Dish</div>
               <div>Asian</div>
           </div>
           <div>
               <div><b>Genres</b></div>
               <div>Salad</div>
               <div>Spicy</div>
               <div>Bowl</div>
               <div>Kitchen</div>
               <div>Home</div>
           </div>
           <div>
               <div><b>Follow Us</b></div>
               <div className="size-10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="facebook">
                      <g>
                        <path fill="none" stroke="#303c42" stroke-linecap="round" stroke-linejoin="round" d="M21 1.5H3A1.5 1.5 0 0 0 1.5 3v18A1.5 1.5 0 0 0 3 22.5h8.5v-8h-2v-3h2v-2a4 4 0 0 1 4-4h3v3h-3a1 1 0 0 0-1 1v2h4l-.5 3h-3.5v8H21a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 21 1.5Z"></path>
                      </g>
                    </svg></div>
               <div className="size-10"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24" id="twitter">
                      <path d="M8.16 21.433c-2.45 0-4.941-.701-7.405-2.086a.497.497 0 0 1-.23-.59.505.505 0 0 1 .533-.344c1.855.213 3.811-.223 5.276-1.086-1.696-.396-3.065-1.498-3.789-3.098a.5.5 0 0 1 .602-.683c.214.066.432.113.643.139-1.287-.768-2.665-2.237-2.665-4.438 0-.193.111-.369.285-.451a.49.49 0 0 1 .53.063c.16.126.332.236.509.323a5.366 5.366 0 0 1-.87-1.814c-.333-1.285-.141-2.583.556-3.76a.495.495 0 0 1 .396-.242.486.486 0 0 1 .425.187c1.473 1.84 4.089 4.063 8.294 4.469-.078-1.332.321-3.514 2.159-4.586 2.243-1.313 4.446-1.143 6.306.485.828-.186 2.137-.752 2.406-.939a.5.5 0 0 1 .769.538c-.125.472-.408.994-.763 1.463.279-.083.517-.167.644-.23a.5.5 0 0 1 .652.71c-.589.931-1.54 1.795-2.175 2.265.255 3.121-1.009 6.561-3.415 9.254-2.565 2.873-6.001 4.457-9.671 4.457 0-.006-.001-.006-.002-.006zm-5.012-2.034c1.681.688 3.36 1.033 5.012 1.033h.001c3.382 0 6.551-1.466 8.925-4.123 2.297-2.572 3.471-5.854 3.139-8.771a.5.5 0 0 1 .225-.476c.269-.178.68-.502 1.094-.903-.407.088-.803.146-1.089.147h-.002a.501.501 0 0 1-.183-.966c.28-.111.664-.451.992-.87-.563.22-1.177.412-1.626.479a.491.491 0 0 1-.411-.133c-1.58-1.483-3.375-1.652-5.309-.522-1.746 1.021-1.784 3.396-1.6 4.146a.5.5 0 0 1-.514.618c-4.47-.233-7.375-2.346-9.123-4.291a3.822 3.822 0 0 0-.132 2.346c.294 1.133 1.034 2.002 1.597 2.329a.5.5 0 0 1-.153.923 3.093 3.093 0 0 1-1.752-.185c.521 2.084 2.689 3.063 3.299 3.134a.499.499 0 0 1 .268.879c-.433.365-1.072.553-1.83.51.836 1.113 2.132 1.754 3.681 1.789a.498.498 0 1 1 .323.871C6.78 18.44 5 19.179 3.148 19.399z"></path>
                    </svg></div>
                    <div className="size-10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></div>
                               </div>
                

       </div>

    </div>
  )
}

export default Footer