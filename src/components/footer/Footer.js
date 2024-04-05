import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

import logoFooter from '../images/logoFooter.jpg';

export default function Footer() {
  return (
    <footer className="bg-white border border-y">
        <div className="mx-auto container-xl p-4 py-6 py-lg-8">
            <div className="d-md-flex justify-content-between">
                <div className="mb-6 md-mb-0" style={{ width: '530px' }}>
                    <Link to='/' className='"d-flex align-items-center"'>
                        <img 
                            src={logoFooter}
                            alt='Logo'
                            className='logofoot'
                        />
                    </Link>
                </div>
                    <div className='row row-cols-2 gap-4 gap-sm-6 row-cols-sm-4' >
                        <div className="flex-grow-1">
                            <h2 className="mb-6 text-h2 font-weight-bold text-gray-900 uppercase logo-pad">Resources</h2>
                            <ul className="text-gray-500 font-weight-medium">
                                <li className="mb-4">
                                    <Link to='/' className="text-decoration-none hover-underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/about' className="text-decoration-none hover-underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-grow-1">
                            <h2 className="mb-6 text-h2 font-weight-bold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-weight-medium">
                                <li className="mb-4">
                                    <a className="text-decoration-none hover-underline" 
                                    target="_blank"  rel="noreferrer">
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to='/' className="text-decoration-none hover-underline" >
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-grow-1">
                            <h2 className="mb-6 text-h2 font-weight-bold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-weight-medium">
                                <li className="mb-4">
                                    <Link to='#' className="text-decoration-none hover-underline">
                                        Private Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <hr className="my-6 bg-gray-200 d-none d-sm-block mx-auto" />
            <div className="d-sm-flex align-items-center justify-content-between">
                <span className="text-sm text-gray-500 text-sm-center">
                © 2024
                <a href='#' className="text-decoration-none hover-underline mr">
                    C_HondaGaming
                </a>
                . All Rights Reserved.
                </span>
                <div className="d-flex mt-4 gap-5 justify-content-center mt-sm-0">
                    <Link to='#' className="text-gray-500 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                        <span className="visually-hidden">Facebook page</span>
                    </Link>
                    <Link to='#' className="text-gray-500 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                    </svg>
                        <span className="visually-hidden">Discord community</span>
                    </Link>
                    <Link to='#' className="vtext-gray-500 hover:text-gray-900" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>
                        <span className="visually-hidden">Twitter page</span>
                    </Link>
                    <Link to='#' className="text-gray-500 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        <span className="visually-hidden">GitHub</span>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
