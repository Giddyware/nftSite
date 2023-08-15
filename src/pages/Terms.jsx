import { useSelector } from "react-redux";
import RootLayout from "../layout/RootLayout";

const Terms = () => {
  const { wallet, termsRefund, termsCommission } = useSelector(
    (state) => state.auth.userDetails
  );

  console.log(termsCommission);

  return (
    <RootLayout>
      <div className="container mx-auto mt-10 text-xl">
        <h1 className="mb-4 text-[hsl(0,_0%,_99%)] text-3xl font-bold text-center px-6 py-10 bg-[hsl(10,_3%,_56%)]">
          Terms of Service
        </h1>
        <div className="">
          <div className="mx-10">
            <h1 className="py-4 mb-4 text-3xl font-bold">
              Omega NFT Marketplace{" "}
            </h1>
            <p className="mb-4 text-xl">
              Welcome to Omega, an online marketplace for trading Non-Fungible
              Tokens (NFTs). These Terms and Conditions outline the rules and
              guidelines for using our marketplace. By accessing and using
              Omega, you agree to be bound by these terms. Please read them
              carefully before participating in any transactions on our
              marketplace.
            </p>
            {/* Last Updated: 20/01/2023 Please read these Terms of Service

            ("Terms") carefully before accessing or using the Omega.shop NFT
            marketplace platform ("Platform") operated by Omega.shop ("we,"
            "us," or "our"). These Terms govern your use of the Platform and
            constitute a legally binding agreement between you and Omega.shop.{" "} */}

            <h1 className="mt-8 mb-4 text-2xl font-bold">1. General Terms</h1>
            <div className="flex flex-col gap-4 ml-6">
              <p>
                1.1. Eligibility: In order to participate in the Omega NFT
                marketplace, you must meet the eligibility requirements. This
                means that you must be at least 18 years old or have the legal
                capacity to enter into contracts as per the laws of your
                jurisdiction. By accessing and using Omega platform, you confirm
                that you meet these eligibility criteria.
              </p>
              <p>
                1.2. Account Creation: To engage in NFT trading on Omega, you
                are required to create a user account on Omega. During the
                account creation process, you will be asked to provide certain
                information, including personal details and contact information.
                It is your responsibility to ensure that the information you
                provide is accurate, up-to-date, and complete. You are also
                responsible for maintaining the confidentiality of your account
                credentials and for all activities that occur under your
                account. You must promptly notify Omega if you become aware of
                any unauthorized access or use of your account.
              </p>
              <p>
                1.3. Compliance with Laws: When using the Omega platform, you
                agree to comply with all applicable laws, rules, and regulations
                governing the purchase, sale, and trading of NFTs. It is your
                responsibility to understand and adhere to the legal
                requirements specific to your jurisdiction. By accessing and
                using Omega, you confirm that your activities on the platform
                are lawful in your jurisdiction and that you will not engage in
                any illegal or prohibited activities.
              </p>
              <p>
                1.4. Platform Usage: Omega serves as an online marketplace that
                facilitates the buying, selling, and trading of NFTs. It is
                important to note that Omega does not own or endorse any of the
                NFTs listed on the platform. We act as an intermediary,
                providing the platform for users to connect and transact. As
                such, any transactions, agreements, or interactions between
                users are solely the responsibility of the participating users.
                Omega does not guarantee the accuracy, quality, legality, or
                authenticity of the NFTs listed on the platform. It is your
                responsibility to conduct due diligence and assess the
                authenticity, ownership rights, and accuracy of the NFTs before
                engaging in any transactions.
              </p>
            </div>
            <h1 className="mt-8 mb-4 text-2xl font-bold">
              2. NFT Listings and Transactions
            </h1>
            <div className="flex flex-col gap-4 ml-6">
              <p>
                2.1. Ownership and Authenticity: As a seller on Omega, it is
                imperative that you have the legal rights to sell the NFTs you
                list on the platform. By listing an NFT for sale, you represent
                and warrant that you are the rightful owner of the NFT and have
                the authority to transfer ownership to the buyer. Omega may
                require you to undergo an insurance verification process to
                confirm your ownership rights and to provide a level of
                assurance to potential buyers.
                <span>
                  {/* Additionally, in certain cases, Omega may collect a
                  refundable fee from the seller to further ensure the
                  authenticity and legitimacy of the NFT. This fee will be
                  refunded to the seller upon successful completion of the
                  transaction and verification of ownership. */}
                  {termsRefund}
                </span>{" "}
                It is your responsibility to ensure that the NFTs you list are
                accurately described and that the images and information
                provided reflect the actual item for sale.
              </p>
              <p>
                2.2. Prohibited Content: Omega strictly prohibits the listing or
                trading of NFTs that are illegal, fraudulent, offensive,
                infringe on intellectual property rights, or violate these Terms
                and Conditions. You may not list NFTs that contain explicit or
                adult content, promote hate speech, or engage in any form of
                illegal activity. Omega reserves the right to remove any content
                that violates these guidelines and may take appropriate action,
                including suspending or terminating the accounts of users who
                repeatedly violate these rules.
              </p>
              <p>
                2.3. Disputes and Refunds: In the event of any disputes between
                buyers and sellers, Omega encourages users to resolve such
                issues amicably. Omega does not act as an arbiter in these
                disputes and is not responsible for mediating or resolving them.
                The resolution of disputes, including refunds or returns of
                NFTs, is at the discretion of the seller unless otherwise
                required by applicable laws or regulations. It is recommended
                that buyers and sellers communicate openly and honestly to
                address any concerns or discrepancies that may arise during the
                transaction process.
              </p>
              <p>
                2.4. Fees and Payments: When creating and listing new art or
                items on Omega, a minting fee of <span>{wallet?.mintFee}</span>{" "}
                ETH will be charged per art or item.{" "}
                <span>
                  {/* Omega may charge transaction fees or commissions on NFT
                  sales conducted on the platform. */}
                  {termsCommission}
                </span>{" "}
                It is your responsibility as a seller to review and understand
                the applicable fees associated with each transaction. These fees
                will be clearly communicated to you before you confirm the
                listing of your NFT. Payments for NFT purchases will be
                processed securely through our designated payment processor.
              </p>
            </div>
            <h1 className="mt-8 mb-4 text-2xl font-bold">
              3 .Intellectual Property{" "}
            </h1>
            <div className="flex flex-col gap-4 ml-6">
              <p>
                3.1. Copyright: Omega expects all users to respect the
                intellectual property rights of others. You may not use,
                reproduce, distribute, or modify any copyrighted material
                without proper authorization from the rights holder. When
                listing an NFT for sale on Omega, you must ensure that you have
                the necessary rights, licenses, or permissions to include any
                copyrighted material within the NFT. By listing an NFT on the
                platform, you affirm that you are not infringing upon any third
                party intellectual property rights.
              </p>
              <p>
                3.2. License: By listing an NFT for sale on Omega, you grant
                Omega a non-exclusive, worldwide, royalty-free license to
                display, reproduce, and promote the NFT for the purpose of
                facilitating transactions on the platform. This license allows
                Omega to showcase the NFT in listings, search results,
                promotional materials, and other marketing efforts related to
                the platform. The license granted to Omega is limited to the
                extent necessary to provide the services and functionalities of
                the platform.
                <br />
                Please note that this license does not transfer ownership of the
                NFT to Omega or any other users. Ownership rights remain with
                the respective NFT owners, and Omega does not claim any
                ownership or control over the NFTs listed on the platform. It is
                your responsibility as a user to ensure that your actions on
                Omega comply with applicable intellectual property laws and
                respect the rights of others. Omega reserves the right to remove
                any NFT listings or take appropriate action in response to
                notices of alleged copyright infringement or other intellectual
                property violations. If you believe that your copyrighted work
                has been infringed upon on the Omega platform, please follow the
                procedures outlined in our Copyright Policy to report the
                infringement.
              </p>
            </div>
            <h1 className="mt-8 mb-4 text-2xl font-bold">
              4. Termination and Suspension
            </h1>
            <div className="flex flex-col gap-4 ml-6">
              <p>
                {" "}
                4.1. Termination: Omega reserves the right to suspend or
                terminate your account or access to the platform at any time and
                for any reason. This includes, but is not limited to, violations
                of these Terms and Conditions suspected fraudulent activity, or
                any other conduct that Omega deems inappropriate or harmful to
                the platform or its users. In the event of termination, you will
                no longer have access to your account and any ongoing
                transactions or listings may be canceled.
              </p>
              <p>
                4.2. Account Deletion: If you wish to delete your account on
                Omega, please contact our support team or follow the account
                deletion procedures specified on the platform. Deleting your
                account will permanently remove your personal information and
                any associated data from the platform. Please note that once
                your account is deleted, it cannot be restored, and any ongoing
                transactions or listings will be canceled. Omega reserves the
                right to retain certain information related to your account, as
                required by law or for legitimate business purposes, even after
                account deletion. Such retained information will be handled in
                accordance with Omega's Privacy Policy.
              </p>
            </div>

            <h1 className="mt-8 mb-4 text-2xl font-bold">
              5. Limitation of Liability{" "}
            </h1>
            <div className="flex flex-col gap-4 ml-6">
              <p>
                5.1. Omega and its affiliates will not be liable for any direct,
                indirect, incidental, consequential, or punitive damages arising
                from the use of the platform. This includes but is not limited
                to, loss of profits, data, or reputation, even if Omega has been
                advised of the possibility of such damages.
              </p>
              <p>
                5.2. Omega strives to provide a secure and reliable platform for
                NFT trading, but we do not guarantee the continuous
                availability, accuracy, or reliability of the platform or its
                services. While we take reasonable measures to maintain the
                security of user accounts and transactions, Omega cannot
                guarantee that unauthorized third parties will not gain access
                to user information or interfere with the platform's operations.
                Therefore, you agree to use Omega at your own risk.
              </p>
              <p>
                5.3. Omega is not responsible for any disputes, disagreements,
                or issues that may arise between users in connection with NFT
                transactions conducted on the platform. Any transactions,
                agreements, or interactions between users are solely the
                responsibility of the participating users. Omega encourages
                users to communicate openly and resolve disputes amicably.
                However, Omega is not liable for any losses or damages resulting
                from such disputes.
              </p>
              <p>
                5.4. Some jurisdictions do not allow the exclusion or limitation
                of liability for certain types of damages. Therefore, to the
                extent that such exclusions or limitations are not permitted
                under applicable law, the above limitations may not apply to
                you. By using Omega, you agree to release and hold harmless
                Omega and its affiliates from any claims, demands, or damages,
                whether direct or indirect, arising out of or in connection with
                your use of the platform.
              </p>
            </div>

            <h1 className="mt-8 mb-4 text-2xl font-bold">6. Amendments </h1>
            <div className="flex flex-col gap-4 ml-6">
              <p>
                6.1. Omega reserves the right to modify these Terms and
                Conditions at any time without prior notice. Any changes or
                updates to these terms will be effective immediately upon
                posting on Omega website or through other means of communication
                provided by Omega. It is your responsibility to review these
                Terms and Conditions periodically to stay informed of any
                changes.
              </p>
              <p>
                6.2. By continuing to use Omega after any modifications to the
                Terms and Conditions have been made, you acknowledge and agree
                to be bound by the revised terms. If you do not agree with the
                modified terms, you must stop using Omega.
              </p>
              <p>
                6.3. Omega may also introduce additional terms, policies, or
                guidelines that govern specific features, services, or offerings
                provided on the platform. Such additional terms will be
                presented to you and will be considered as part of these Terms
                and Conditions.
              </p>
              <p>
                6.4. In the event of any conflict or inconsistency between these
                Terms and Conditions and any additional terms or policies, the
                additional terms or policies will prevail to the extent of the
                inconsistency. Omega encourages you to regularly review the
                Terms and Conditions to ensure that you are aware of any updates
                or changes that may affect your use of the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};
export default Terms;
