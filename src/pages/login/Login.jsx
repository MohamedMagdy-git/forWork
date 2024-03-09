import React from 'react'
import './login.scss'
import gif from '../../assets/giphy2.gif'
import svg from '../../assets/giphy.gif'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
const Login = () => {

    const bodyElement = document.body;
  // document.getElementById()
 
  // function focusNextInput(event) {
  //   if (event.key === "Enter") {
  //     event.preventDefault(); // prevent the default Enter key behavior

  //     // Get all input elements with class "focus-input"
  //     var inputs = document.getElementsByClassName("focus-input");

  //     // Find the index of the currently focused input
  //     var currentIndex = Array.from(inputs).indexOf(document.activeElement);

  //     // Calculate the index of the next input
  //     var nextIndex = (currentIndex + 1) % inputs.length;

  //     // Set focus on the next input
  //     inputs[nextIndex].focus();
  //   }
  // }
   
    const backgrounds = [
      'linear-gradient(to right, #7fc5d3, #ffffff)',
      'linear-gradient(to right, #ebd9ba, #ffffff)',
      'linear-gradient(to right, #8593c3, #ffffff)',
    ];

  
 
    const intervalDuration = 6000;
  
   
    bodyElement.style.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
 
    function changeBackground() {
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      bodyElement.style.background = backgrounds[randomIndex];

    }
  

    setInterval(changeBackground, intervalDuration);

  return (
    <div className="login">
          <div className="left">
            <img src={svg} alt=""  />
          </div>
        <div className='container'>
            <div className="right">
                <div className="content">
                    <motion.div
                    //  initial={{ translateY: -100, scale: 0.5 }}
                    //  animate={{ translateY: 0, scale: 1 }}
                    //  transition={{ duration: 0.3 }}
                     className="title"> تسجيل الدخول الي Minimal</motion.div>
                    <div className="register_row">
                        <span> مستخدم جديد؟  </span> 
                        <Link to=''>إنشاء حساب</Link>
                    </div>
                    <motion.div
                    initial={{ translateX: 100, scale: 0.5 }}
                    animate={{ translateX: 0, scale: 1 }}
                     className="box_alert">
                        <div className="col_icon"><InfoOutlinedIcon /></div>
                        <div className="text_col">
                            <div className="text1">البريد الالكتروني:<span>demo@minimals.cc</span></div>
                            <div className="text2">كلمة المرور:<span>demo1234</span> </div>
                        </div>
                    </motion.div>
                    {/* from start */}
                    <form action="">
                        <div className="inputandlable">
                            <label htmlFor="email">البريد الالكتروني</label>
                            <input type="email" name="email" id="email" />
                            {/* <input type="text" name="" class="focus-input" onKeyDown={(event)=>focusNextInput(event)}/> */}
                        </div>
                        <div className="inputandlable">
                            <label htmlFor="password">كلمة المرور</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div className="forgotPass_text">هل نسيت كلمة المرور؟</div>
                        <motion.button
                        initial={{ translateY: 100, scale: 0.5 }}
                        animate={{ translateY: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                         className="button button--flex">
                            <span>تسجيل الدخول</span>
                            <LoginOutlinedIcon />
                        </motion.button>
                    </form>
                    {/* form end */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login