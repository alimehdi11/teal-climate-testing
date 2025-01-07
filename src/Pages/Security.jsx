import React from "react";
import { NavLink } from "react-router-dom";

const Security = () => {
  return (
    <>
      <section className="mx-auto mt-10 mb-24 max-w-5xl text-center">
        <h1 className="head-1">Security</h1>
      </section>

      <section className="mx-auto my-16 w-[90%] max-w-[1400px] rounded-lg border-2 border-gray-300 bg-white dark:bg-zinc-700 p-5 shadow-xl max-lg:flex-col sm:p-10 xl:p-20">
        <h1 className="text-xl font-bold">Last updated: 26-Oct-24</h1>
        <div className="my-6 h-screen space-y-6 overflow-auto border-2 rounded-lg border-gray-300 p-2 text-gray-800 dark:text-white sm:p-10">
          <h1 className="text-xl font-bold sm:text-2xl">Overview</h1>
          <p>
            From inception, Teal Climate recognized the need to have security
            architected throughout the Teal Climate, climate management &
            account platform (CMAP) and our supporting services. Our customers
            share data to calculate their carbon footprint and expect their data
            to be kept secure and confidential. To that end, we have invested
            heavily in our platform to enable enterprise-grade security features
            and processes. With this, Teal Climate's security posture is guided
            and maintained by four (4) security principles as described further
            on this page:
          </p>
          <ol className="ml-[2vmax] flex list-decimal flex-col gap-3 font-bold">
            <li>
              Provision and manage users with the principle of least privilege
            </li>
            <li>Architect and develop for security and privacy</li>
            <li>Train and educate on security repeatedly</li>
            <li>Align and comply with industry security standards</li>
          </ol>
          <p>
            For further information of Teal Climate's security and privacy
            controls or to request copies of Teal Climate's audit reports and
            certifications, please visit{" "}
            <NavLink to="/privacy&policy" className="text-blue-500 underline">
              Teal Climate's trust page
            </NavLink>
            .
          </p>
          <h1 className="text-xl font-bold sm:text-2xl">
            Shared security responsibility model (SSRM)
          </h1>
          <p>
            As a software as a service (SaaS) application hosted in amazon web
            services (AWS), we maintain a list of security responsibilities that
            are shared between AWS, Teal Climate, and Teal Climate’s customers.
            At a summary level those responsibilities are:
          </p>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              AWS is responsible for the physical data centers, networking,
              perimeter security, hardware configurations, and availability of
              the platform-as-a-service (PaaS) services provided to Teal Climate
              for use in the CMAP
            </li>
            <li>
              Teal Climate is responsible for security configurations including
              but not limited to data encryption at rest and in transit, network
              and firewall restrictions, and application, database, container,
              and infrastructure security.
            </li>
            <li>
              Teal Climate's customers are responsible for the proper use of and
              security access configurations in the CMAP. Other responsibilities
              include but are not limited to user setup and management, user
              access reviews, data quality, data classNameification standards,
              third-party integration setup, and, as applicable, the single
              sign-on (SSO) setup.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">
            Principle 1: provision and manage users with the principle of least
            privilege
          </h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              The security principle of "least privilege" is utilized across all
              Teal Climate systems. Access to platform code and data depends on
              the resource’s role, and production access by employees is
              particularly controlled and restricted.
            </li>
            <li>
              Teal Climate utilizes privileged access management (PAM) to manage
              and audit access to production environments. Using PAM, developers
              must request access to a production environment and the request
              must be approved by Teal Climate’s engineering leadership. Once
              access is granted, the access duration is limited to a specific
              duration and activity logs are available for later review.
            </li>
            <li>
              Teal Climate reviews Teal Climate personnel access to all systems
              at least quarterly.
            </li>
            <li>
              Customers are responsible for reviewing access to their Teal
              Climate account following their own access review policies and
              procedures. Teal Climate resources with direct access to customer
              accounts are always shown in Teal Climate user manager screen, so
              customers have a full view of all users with access to their data.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">
            Principle 2: architect and develop for security and privacy
            Architecture
          </h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              The Teal Climate CMAP consists of a multi-tier, multi-tenant SaaS
              application hosted in HEROKU and is architected into four distinct
              tiers or layers: the highly protected database tier, API tier,
              front-end tier, and web browser (which is managed by the
              customer).
            </li>
            <li>
              Web application firewalls, security groups, access control lists,
              and other security detection and control mechanisms are deployed
              between layers to provide multiple layers of protection between
              the internet and database tier.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">Authentication</h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              Teal Climate supports identity provider (IdP) initiated SSO via
              the SAML protocol with IdPs such as okta, Microsoft, and ping.
            </li>
            <li>
              If SSO is not utilized, and username and password authentication
              is chosen instead, Teal Climate supports multi-factor
              authentication, and IP allows listing to enhance access control to
              the CMAP. In this configuration, passwords are hashed with bcrypt
              and salted.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">
            Data storage and backup
          </h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li className="">
              Teal Climate's multi-tenant architecture concurrently stores data
              in HEROKU United States, Virginia, United States, Oregon, United
              States, Tokyo, Japan, Dublin, Ireland, Frankfurt, Germany, London,
              United Kingdom, Montreal, Canada, Mumbai, India, Singapore, and
              Sydney, Australia). Note: if you have specific data residency
              needs, please ask your Teal Climate sales representative about
              Teal Climate's single tenant architecture model.
            </li>
            <div className="overflow-x-auto">
              <div className=" min-w-[450px]">
                <table className="w-full border border-gray-300 bg-white rounded-lg shadow-md">
                  <thead>
                    <tr className="text-left">
                      <th className="px-4 py-2 border-b">ID</th>
                      <th className="px-4 py-2 border-b">Location</th>
                      <th className="px-4 py-2 border-b">Runtime</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="px-4 py-2 border-b">EU</td>
                      <td className="px-4 py-2 border-b">Europe</td>
                      <td className="px-4 py-2 border-b">Common Runtime</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2 border-b">US</td>
                      <td className="px-4 py-2 border-b">United States</td>
                      <td className="px-4 py-2 border-b">Common Runtime</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2 border-b">Dublin</td>
                      <td className="px-4 py-2 border-b">Dublin, Ireland</td>
                      <td className="px-4 py-2 border-b">Private Spaces</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2 border-b">Frankfurt</td>
                      <td className="px-4 py-2 border-b">Frankfurt, Germany</td>
                      <td className="px-4 py-2 border-b">Private Spaces</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2 border-b">London</td>
                      <td className="px-4 py-2 border-b">
                        London, United Kingdom
                      </td>
                      <td className="px-4 py-2 border-b">Private Spaces</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2 border-b">Montreal</td>
                      <td className="px-4 py-2 border-b">Montreal, Canada</td>
                      <td className="px-4 py-2 border-b">Private Spaces</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2 border-b">Mumbai</td>
                      <td className="px-4 py-2 border-b">Mumbai, India</td>
                      <td className="px-4 py-2 border-b">Private Spaces</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2 border-b">Oregon</td>
                      <td className="px-4 py-2 border-b">
                        Oregon, United States
                      </td>
                      <td className="px-4 py-2 border-b">Private Spaces</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2 border-b">Singapore</td>
                      <td className="px-4 py-2 border-b">Singapore</td>
                      <td className="px-4 py-2 border-b">Private Spaces</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2 border-b">Sydney</td>
                      <td className="px-4 py-2 border-b">Sydney, Australia</td>
                      <td className="px-4 py-2 border-b">Private Spaces</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2 border-b">Tokyo</td>
                      <td className="px-4 py-2 border-b">Tokyo, Japan</td>
                      <td className="px-4 py-2 border-b">Private Spaces</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-2">Virginia</td>
                      <td className="px-4 py-2">Virginia, United States</td>
                      <td className="px-4 py-2">Private Spaces</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <li>
              Data within the Teal Climate platform is backed up continuously
              and can be restored to any point every 24 hours.
            </li>
            <li>
              Additionally, backups are taken each day and maintained for at
              least a year.
            </li>
            <li>
              Backups will always be encrypted using advanced encryption
              standard (AES) 256-bit encryption and are stored in secure, Heroku
              offer BYOK features.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">Encryption</h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              Teal Climate utilizes encryption at rest using advanced encryption
              standard (AES) 256 and encryption in transit via TLS 1.2 or above.
              Teal Climate also utilizes perfect forward secrecy (PFS) ciphers
              for data transmission outside the CMAP.
            </li>
            <li>
              Teal Climate's multi-tenant architecture utilizes Heroku managed
              encryption keys. <b>Note:</b> if you require customer managed
              encryption keys, please ask your Teal Climate sales representative
              about Teal Climate's single tenant architecture model.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">
            Monitoring & logging
          </h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              Teal Climate maintains monitoring and logging for each level of
              the platform's architecture, including databases, containers, load
              balancers, firewalls, and other application components.
            </li>
            <li>
              Teal Climate maintains all log information for at least one year
              for security reviews.
            </li>
            <li>
              If a security event is identified to be a threat, Teal Climate
              engineering and information security teams are notified
              immediately to triage, classNameify, contain, and remediate the
              security event or incident, including details such as the time of
              the event and impact to the platform.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">Physical security</h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              Teal Climate is hosted in Heroku (HEROKU), and HEROKU data centers
              maintain several physical security controls to protect Teal
              Climate and customer data. Teal Climate reviews and validates
              HEROKU security controls at least annually to affirm they are
              operating effectively. Please navigate the HEROKU compliance page
              for further information on its data center controls.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">
            Secure development lifecycle (SDLC)
          </h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              Teal Climate implements automated and manual review processes to
              ensure quality and security assurance in our software development
              processes starting from product design and feature creation
              through deployment to production.
            </li>
            <li>
              Static application security testing (SAST) of the platform's
              containers, software packages, and code is conducted with each
              software build.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">
            Vulnerability management
          </h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              Teal Climate is vulnerability tested and secured through several
              threat management processes, including:
            </li>
            <li>
              External network vulnerability scanning is conducted monthly.
            </li>
            <li>
              Penetration testing is conducted at least quarterly by a
              third-party vendor, including the following testing types:
            </li>
            <li>External network</li>
            <li>Api</li>
            <li>Gray box application</li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">
            Network & system hardening standards
          </h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              Teal Climate implements its application infrastructure and network
              configurations with guidance from industry-leading security
              standards such as NIST cybersecurity and CIS level 2 frameworks.
            </li>
            <li>
              Teal Climate maintains and executes security baseline requirements
              for each layer of the platform architecture.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">
            Principle 3: train and educate on security repeatedly
          </h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              All Teal Climate employees and contractors undergo security
              awareness and data privacy training upon hire and annually
              thereafter.
            </li>
            <li>
              All Teal Climate employees and contractors undergo criminal
              background checks before starting at Teal Climate.
            </li>
            <li>
              All Teal Climate engineering personnel undergo secure development
              + OWASP 10 training upon hire and annually thereafter.
            </li>
            <li>
              Informal security awareness training is conducted every two weeks
              during Teal Climate all company meetings.
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">
            Principle 4: align and comply with industry security & privacy
            standards Security compliance
          </h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              Teal Climate maintains a robust information security management
              system (ISMS) that a third-party auditor audits annually to
              maintain compliance with the following industry-standard security
              frameworks:
            </li>
            <li>
              <b>SOC 1 type ii:</b> an attestation that provides an external
              auditor’s validation that Teal Climate maintains appropriate
              controls around the climate management and accounting platform
              (CMAP) for customer financial reporting purposes (specific to
              carbon accounting). Teal Climate received a clean, unqualified
              audit report with no exceptions.
            </li>
            <li>
              <b>SOC 2 type ii:</b> an attestation that provides an external
              auditor’s validation that Teal Climate's security controls were in
              place and effective for the report’s coverage period as related to
              the American institute of certified public accountants (AICPA)
              trust service principles. Teal Climate was audited against the
              security, availability, and confidentiality trust service
              principles and received a clean, unqualified audit report with no
              exceptions.
            </li>
            <li>
              ISO 27001: a certification that provides external auditor
              validation that an effective information security management
              system (ISMS) has been established to identify and manage
              information risks through a comprehensive set of company-wide
              processes and security controls, including procedures and controls
              that continually improve the ISMS. To access our ISO 27001
              certification, please enter our registrant name, “Teal Climate” in
              the link{" "}
              <a
                href="www.coalfirecertification.com"
                className="text-blue-500 underline"
              >
                here
              </a>
              .
            </li>
            <li>
              ISO 27017: a certification that provides external auditor
              validation that Teal Climate's ISMS include controls for the
              secure management of Teal Climate's cloud infrastructure as well
              as cloud service security for users of the Teal Climate CMAP. To
              access our ISO 27017 certification, please enter our registrant
              name, “Teal Climate” in the link{" "}
              <a
                href="www.coalfirecertification.com"
                className="text-blue-500 underline"
              >
                here
              </a>
              . Note: ISO 27017 is an extension of the ISO 27001 security
              framework, and as such, Teal Climate's ISO 27017 certification is
              included in Teal Climate's ISO 27001 certificate.
            </li>
            <li>
              CSA star level 2 gold: a certification that provides external
              auditor validation that Teal Climate’s security controls are
              implemented according to the cloud security alliance (CSA)
              consensus assessment initiative questionnaire (CAIQ). To access
              our CSA star certificate and CAIQ, please navigate the CSA
              registry in the link{" "}
              <NavLink to="/privacy&policy" className="text-blue-500 underline">
                here
              </NavLink>
              .
            </li>
          </ol>
          <h1 className="text-xl font-bold sm:text-2xl">Privacy compliance</h1>
          <ol className="ml-[2vmax] flex list-disc flex-col gap-3">
            <li>
              Teal Climate is prepared to comply with obligations applicable to
              it according to global data protection laws, including GDPR and
              CCPA. Please see our{" "}
              <NavLink to="/privacy&policy" className="text-blue-500 underline">
                privacy policy
              </NavLink>
              for further information on your data privacy rights and how we
              comply with these regulations.
            </li>
            <li>
              Since personally identifiable information (PII) is not required
              for carbon accounting calculations, Teal Climate stores and
              processes very limited PII. Only users’ first name, last name,
              business email address, and IP address are stored to support
              authentication, logging, and audit requirements.
            </li>
            <li>
              Further to the shared data security responsibility principles,
              Teal Climate specifically requests that customers do not upload
              other PII to the CMAP.
            </li>
          </ol>
        </div>
        <h1 className="text-xl font-bold">End of Security</h1>
      </section>
    </>
  );
};

export default Security;
