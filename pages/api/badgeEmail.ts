import sgMail from '@sendgrid/mail';
import generateBadgeEmail from '../../utils/emails/badgeEmailFormatter';

export default function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  console.log("Sending badge email...");
  const data = {
    title: "Lead mobile engineer",
    content:"Benjamin was instrumental in architecting and building out the DAO's core contract. Additionally, he was heavily involved in the governance process.",
    scanLink: "",
    badgeLevel: 5,
    entityName: "Badge Labs",
    entityContractAddress: "0x18...e7b5",
    recipientAddress: "0xF1xda..asda"
  }

  const msg = {
    to: "ben@badge.xyz",
    from: "ben@badge.xyz",
    subject: `Badge labs sent you a Badge - Lead Contributor`,
    dynamicTemplateData: data,
    templateId: "d-8f9af7d559054eb6b878f9554c36e162"
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