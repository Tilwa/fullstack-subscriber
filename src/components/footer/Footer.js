import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <ul className="you-l">
              <li class="title">My Account</li>
              <li>
                <a href="https://fasbazar.com/my-account/">My account</a>
              </li>
              <li>
                <a href="https://fasbazar.com/my-account/">My account</a>
              </li>

              <li>
                <a href="https://fasbazar.com/checkout/">Checkout</a>
              </li>
              <li>
                <a href="https://fasbazar.com/shop/">Shop</a>
              </li>
              <li>
                <a href="https://fasbazar.com/wishlist/">Wishlist</a>
              </li>
              <li>
                <a href="https://fasbazar.com/contact-us/">Contact us</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <ul className="you-l">
              <li class="title">Information</li>

              <li>
                <a href="https://fasbazar.com/about-company/">About Company</a>
              </li>
              <li>
                <a href="https://fasbazar.com/privacy-policy-2/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://fasbazar.com/terms-and-conditions/">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="https://fasbazar.com/delivery-policy/">
                  Delivery Policy
                </a>
              </li>
              <li>
                <a href="https://fasbazar.com/return-policy/">Return Policy</a>
              </li>
              <li>
                <a href="https://fasbazar.com/warranties/">Warranties</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <ul className="you-l">
              <li class="title">Contact Info</li>
              <li>
                <p>Sharjah saif zone</p>
              </li>

              <li>
                <p>Sharjah saif zone</p>
              </li>
              <li>
                <p>
                  <a>E-mail: </a>
                  <a
                    href="mailto:sales@fasbazar.com"
                    data-type="mailto"
                    data-id="mailto:sales@fasbazar.com"
                  >
                    sales@fasbazar.com
                  </a>
                </p>
              </li>
              <li>
                <a
                  href="https://fasbazar.com/contact-us/"
                  data-type="URL"
                  data-id="https://fasbazar.com/contact-us/"
                >
                  View on the Google Maps
                </a>
              </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <ul className="you-l">
              <li class="title">Create Account</li>
              <li>
                <a href="https://fasbazar.com/my-account/">Login</a>
              </li>
              <li>
                <a href="https://fasbazar.com/my-account/">Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
