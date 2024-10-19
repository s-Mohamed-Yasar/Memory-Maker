import React from 'react'
import '../assets/App.css'

function Footer() {
  const year = new Date().getFullYear()

  
  return (
    <div>
      <footer>
        <div className="footer-content">
          <nav>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/creater">Creater</a>
              </li>
              <li>
                <a href="/album">Collections</a>
              </li>
            </ul>
          </nav>
          <p>&copy; {year} all the rights are reserved by Memory Maker.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer