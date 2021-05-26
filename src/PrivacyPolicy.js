import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";
import "./homepage.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
function PrivacyPolicy() {
    return (
      <>
        <div className="container">
          <div className=" ">
            <h1 className="text-dark text-center">PRIVACY OF POLICY</h1>
            <p className="text-dark">
              Your privacy is important to us, so Greaser, a India, has created
              the following Privacy Policy ("Policy") to let you know what
              information we collect when you visit our Site
              http://greaser.giksindia.com ("Site"), why we collect it and how
              we use it
            </p>
            <p className="text-dark">
              The terms "You," "Your," "Yours" and "User" refer to the
              entity/person/organization using our Site.
              <br />
              <br />
              When this Policy mentions "We", "Us," and "Our" it refers to
              Greaser and its subsidiaries and affiliates.
              <br />
              <br />
              This Privacy Policy is governed by our Terms of Services.
              <br />
              <br />
              For any questions regarding this Policy or any requests regarding
              the processing of personal data, please contact us at
              info@giksindia.com.
            </p>
            <p className="text-dark text-justify">
              1. INFORMATION WE COLLECT FROM YOU
              <br />
              We collect the information You provide to us and this information
              is necessary for the adequate performance of the contractual
              arrangement which is in place between You and us and allow us to
              comply with our legal obligations.
              <br />
              <br />
              <ul>
                <li>
                  Account Signup Information. When You create the account, we
                  ask You to provide the signup information, such as Email,
                  Name, Surname, Phone, Personal Number, Address, Passwords,
                  Username.
                </li>
                <li>
                  Login information. We collect Login information if You are
                  logging to our account with Authentication Data.
                </li>
              </ul>
              <br />
              2. THE WAY WE USE YOUR INFORMATION
              <br />
              We process your information adhering to the general data
              processing principles.
              <br />
              We may use the information we collect through our Site for a
              number of reasons, including to:
              <ul>
                <li>to create account</li>
              </ul>
              <br />
              We will normally collect personal information from you only where
              we have your consent to do so, where we need the personal
              information to perform a contract with you, or where the
              processing is in our legitimate business interests.
            </p>
            <p className="text-dark">
              3. COOKIES <br />
              We do not use cookies or other tracking technologies.
              <br />
              <br />
              4. RETENTION
              <br />
              We retain your personal information to provide services to you and
              as otherwise necessary to comply with our legal obligation,
              resolve disputes, and enforce our agreements.
              <br />
              We will retain your personal information not longer than you keep
              your account, unless we are otherwise required by law or
              regulations to retain your personal information longer.
              <br />
              If you would like to stop us using your personal information, you
              shall request that we erase your personal information and close
              your Account. Please note that even after deletion of your account
              we may keep some of your information for tax, legal reporting and
              auditing obligations.
            </p>
            <p className="text-dark">
              5. SECURITY
              <br />
              We have implemented security measures designed to protect the
              personal information you share with us, including physical,
              electronic and procedural measures. Among other things, we
              regularly monitor our systems for possible vulnerabilities and
              attacks.
              <br />
              Regardless of the measures and efforts taken by us, the
              transmission of information via internet, email or text message is
              not completely secure. We do not guarantee the absolute protection
              and security of your personal information.
              <br />
              We therefore encourage you to avoid providing us or anyone with
              any sensitive information of which you believe its disclosure
              could cause you substantial or irreparable harm.
              <br />
              If you have any questions regarding the security of our Site or
              Services, you are welcome to contact us at info@giksindia.com.
              <br />
              <br />
              6. YOUR RIGHTS
              <br />
              You are entitled to a range of rights regarding the protection of
              your personal information. Those rights are:
              <br />
              <ul>
                <li>
                  The right to access the information we have about you. If you
                  wish to access your personal information that we collect, you
                  can do so at any time by contacting us using the contact
                  details provided below.
                </li>
                <li>
                  The right to rectify inaccurate information about you. You can
                  correct, update or request deletion of your personal
                  information by contacting us using the contact details
                  provided below.
                </li>
                <li>
                  The right to object the processing. When we rely on your
                  consent to process your personal information, you may withdraw
                  consent at any time by contacting us using the contact details
                  provided below. This will not affect the lawfulness of
                  processing prior to the withdrawal of your consent.
                </li>
                <li>
                  The right to lodge a complaint. You can raise questions or
                  complaints to the national Data Protection Agency in your
                  country of residence in the event where your rights may have
                  been infringed. However, we recommend attempting to reach a
                  peaceful resolution of the possible dispute by contacting us
                  first.
                </li>
                <li>
                  The right to erase any data concerning you. You may demand
                  erasure of data without undue delay for legitimate reasons,
                  e.g. where data is no longer necessary for the purposes it was
                  collected, or where the data has been unlawfully processed.
                </li>
              </ul>
              <br />
              7. APPLICATION OF POLICY
              <br />
              This Policy was created with the help of the Privacy Policy
              Generator from TermsHub and applies only to the services offered
              by our Company. Our Policy does not apply to services offered by
              other companies or individuals, including products or sites that
              may be displayed to you in search results, sites that may include
              our services or other sites linked from our Site or Services.
              <br />
              8. AMENDMENTS
              <br />
              Our Policy may change from time to time. We will post any Policy
              changes on our Site and, if the changes are significant, we may
              consider providing a more explicit notice (including, for certain
              services, email notification of Policy changes).
              <br />
              9. ACCEPTANCE OF THIS POLICY
              <br />
              We assume that all Users of this Site have carefully read this
              document and agree to its contents. If someone does not agree with
              this Policy, they should refrain from using our Site. We reserve
              the right to change our Policy at any time and inform by using the
              way as indicated in Section 8. Continued use of this Site implies
              acceptance of the revised Policy.
              <br />
              10. FURTHER INFORMATION
              <br />
              TIf you have any further questions regarding the data we collect,
              or how we use it, then please feel free to contact us at the
              details as indicated above.
              <br />
            </p>
          </div>
        </div>
      </>
    );
}
export default PrivacyPolicy;
