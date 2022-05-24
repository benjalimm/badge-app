import sgMail from '@sendgrid/mail';
import generateBadgeEmail from '../../utils/emails/badgeEmailFormatter';

export default function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  console.log("Sending badge email...");
  const emailTemplate = generateBadgeEmail({
    title: "Lead contributor",
    content: "Benjamin was instrumental in architecting and building out the DAO's core contract. Additionally, he was heavily involved in the governance process.",
    scanLink: "",
    badgeLevel: 4,
    entityName: "Badge labs",
    entityContractDisplayAddress: "0x18...e7b5",
    recipientDisplayAddress: "0xF1xda..asda"
  })

  const msg = {
    to: "ben@badge.xyz",
    from: "ben@badge.xyz",
    subject: `Badge labs sent you a Badge - Lead Contributor`,
    text: "Hello world?",
    html: emailTemplate,
  }
  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
      res.status(200).json({ success: true })
    })
    .catch((error) => {
      console.error(error)
      console.log(error.response.body)
      res.status(500).json(error);
    })
}