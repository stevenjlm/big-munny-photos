import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";
import { ContactGrid } from "@/utils/contactForm";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json()
    let validator = new ContactGrid(body.name, body.email, body.subject, body.message);
    let validatorRes = validator.validateFormAPI();
    
    if (!validatorRes.isValid) {
      return NextResponse.json({ error: validatorRes.msg, status: 404 });
    }
    await sendgrid.send({
      to: process.env.SENDGRID_DESTINATION as string,
      from: process.env.SENDGRID_SOURCE as string,
      subject: `${body.subject}`,
      html: buildEmail(body),
    });
  } catch (error: any) {
    // console.log(error);
    return NextResponse.json({ error: error.message, status: (error.statusCode || 500) });
  }

  return NextResponse.json({ message: "sent", status: (200) });
}

function buildEmail(body: any): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html lang="en">
          <head>
            <meta charset="utf-8">
          
            <title>Bigmunny.com message: ${body.subject}</title>          
          </head>
          
          <body>
            <h3>Name: ${body.fullname}, Email: ${body.email} </h3>
            <h3>Message:</h3>
            <p>${body.message}</p>
          </body>
          </html>`
}
