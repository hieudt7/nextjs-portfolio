import * as React from 'react';

export default function Header() {
  return (
    <header>
      <div className="w-full px-1 text-gray-700 antialiased">
        <div className="mx-auto max-w-screen-lg">
          <div className="border-b border-gray-300">
            <div className="flex justify-between">
              <div className="p-logo">
                <h1>H</h1>
                <a href="#">hieudtx9@gmail.com</a>
              </div>
              <nav>
                <ul className="flex flex-wrap gap-x-5 text-xl">
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a className="btn-download" href="#">Resume</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
