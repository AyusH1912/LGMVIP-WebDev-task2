import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
            <h1>Zippy</h1>
            <ul>
              <li>
                Contact: <a href="">contact@zippy.com</a>
              </li>
              <li>
                <h1>Connect With Us</h1>
              </li>  
              <li>
              <a href="">Facebook</a>
              </li>
              <li>
              <a href="">Instagram</a>
              </li>
              <li>
              <a href="">Twitter</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
export default Footer;